// Página própria de uma unidade: teoria + exercícios + correção.
// É aqui que vive a lógica de correção (antes estava no cartão desdobrável).

import { useState } from "react";
import ExercisePart from "../components/ExercisePart";
import TheoryBlock from "../components/TheoryBlock";
import Icon from "../components/Icon";
import { BarraComLimiar } from "../components/Progresso";
import { checkBlankItem, checkConstructItem } from "../lib/grading";
import { recordExerciseResults, getProgress, getRiscadas, toggleRiscada, limparRiscadas } from "../lib/storage";
import { rotas } from "../lib/router";
import { useI18n } from "../lib/i18n";
import {
  estatisticasUnidade,
  unidadeDesbloqueada,
  unidadeEmFalta,
  LIMIAR_DESBLOQUEIO,
} from "../lib/progress";

// Recupera do localStorage o que a pessoa já tinha escrito/corrigido nesta unidade.
function estadoGuardado(username, unidadeN, campo) {
  const guardado = getProgress(username).units[unidadeN] || {};
  const inicial = {};
  for (const [exercicioId, dados] of Object.entries(guardado)) {
    if (dados[campo]) inicial[exercicioId] = dados[campo];
  }
  return inicial;
}

function EcraBloqueado({ unidade, emFalta }) {
  const { t } = useI18n();

  return (
    <div className="mx-auto max-w-md rounded-2xl border border-noite-200 bg-white p-8 text-center dark:border-noite-800 dark:bg-noite-900">
      <span className="mx-auto grid place-items-center w-14 h-14 rounded-full bg-noite-100 text-noite-500 dark:bg-noite-800 dark:text-noite-400">
        <Icon nome="cadeado" className="w-6 h-6" />
      </span>
      <h1 className="mt-4 text-xl font-bold text-noite-900 dark:text-white">
        {t("unidade.bloqueadaTitulo", { n: unidade.n })}
      </h1>
      <p className="mt-2 text-sm leading-relaxed text-noite-500 dark:text-noite-400">
        {t("unidade.bloqueadaTexto", { pct: LIMIAR_DESBLOQUEIO, n: emFalta.n })} <em>{emFalta.title}</em>.
      </p>
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <a
          href={rotas.unidade(emFalta.n)}
          className="inline-flex items-center gap-2 rounded-lg bg-amarelo-400 px-4 py-2.5 text-sm font-semibold text-azul-950 transition hover:bg-amarelo-300"
        >
          {t("unidade.irPara", { n: emFalta.n })}
          <Icon nome="setaDireita" className="w-4 h-4" />
        </a>
        <a
          href={rotas.unidades}
          className="inline-flex items-center gap-2 rounded-lg border border-noite-300 px-4 py-2.5 text-sm font-medium text-noite-600 transition hover:bg-noite-100 dark:border-noite-700 dark:text-noite-300 dark:hover:bg-noite-800"
        >
          {t("comum.verTodasUnidades")}
        </a>
      </div>
    </div>
  );
}

export default function UnitPage({ unidadeN, unidades, progresso, username, onProgresso }) {
  const { t, tc } = useI18n();
  const unidade = unidades.find((u) => u.n === unidadeN);

  const [respostas, setRespostas] = useState(() =>
    unidade ? estadoGuardado(username, unidade.n, "answers") : {},
  );
  const [resultados, setResultados] = useState(() =>
    unidade ? estadoGuardado(username, unidade.n, "results") : {},
  );
  const [riscadas, setRiscadas] = useState(() =>
    unidade ? getRiscadas(username)[unidade.n] || {} : {},
  );
  const [acabouDeCorrigir, setAcabouDeCorrigir] = useState(false);
  const [teoriaAberta, setTeoriaAberta] = useState(true);

  if (!unidade) {
    return (
      <div className="rounded-2xl border border-noite-200 bg-white p-8 text-center dark:border-noite-800 dark:bg-noite-900">
        <h1 className="text-lg font-semibold text-noite-900 dark:text-white">{t("unidade.naoEncontrada")}</h1>
        <a href={rotas.unidades} className="mt-3 inline-block text-sm text-azul-700 hover:underline dark:text-amarelo-300">
          {t("unidade.voltarMenu")}
        </a>
      </div>
    );
  }

  const desbloqueada = unidadeDesbloqueada(progresso, unidades, unidade.n);
  const emFalta = unidadeEmFalta(progresso, unidades, unidade.n);
  if (!desbloqueada) {
    return <EcraBloqueado unidade={unidade} emFalta={emFalta} />;
  }

  const stats = estatisticasUnidade(progresso, unidade);
  const indice = unidades.findIndex((u) => u.n === unidade.n);
  const anterior = indice > 0 ? unidades[indice - 1] : null;
  const seguinte = indice < unidades.length - 1 ? unidades[indice + 1] : null;
  const seguinteAberta = seguinte ? stats.concluida : false;

  function aoEscrever(exercicioId, itemN, slot, valor) {
    setAcabouDeCorrigir(false);
    setRespostas((anteriores) => {
      const doExercicio = { ...(anteriores[exercicioId] || {}) };
      const item = [...(doExercicio[itemN] || [])];
      item[slot] = valor;
      doExercicio[itemN] = item;
      return { ...anteriores, [exercicioId]: doExercicio };
    });
  }

  function aoRiscar(exercicioId, palavra) {
    const todas = toggleRiscada(username, unidade.n, exercicioId, palavra);
    setRiscadas(todas[unidade.n] || {});
  }

  // Corrige um exercício e grava-o. Devolve o mapa de resultados desse bloco.
  function avaliar(exercicio) {
    const escritas = respostas[exercicio.id] || {};
    const doExercicio = {};

    for (const item of exercicio.items) {
      if (exercicio.type === "blank") {
        doExercicio[item.n] = checkBlankItem(item.answers, escritas[item.n] || []);
      } else if (exercicio.type === "construct") {
        doExercicio[item.n] = checkConstructItem(item.answer, (escritas[item.n] || [])[0] || "");
      }
    }

    recordExerciseResults(username, unidade.n, exercicio.id, doExercicio, escritas);
    return doExercicio;
  }

  // Corrige só um bloco, mantendo o que já estava corrigido nos outros.
  function corrigirExercicio(exercicio) {
    if (exercicio.type === "open") return;
    const doExercicio = avaliar(exercicio);
    setResultados((anteriores) => ({ ...anteriores, [exercicio.id]: doExercicio }));
    onProgresso(); // actualiza a sidebar e os desbloqueios
  }

  function corrigir() {
    const novosResultados = {};
    for (const exercicio of unidade.exercises) {
      if (exercicio.type === "open") continue;
      novosResultados[exercicio.id] = avaliar(exercicio);
    }

    setResultados(novosResultados);
    setAcabouDeCorrigir(true);
    onProgresso();
  }

  function limpar() {
    setRespostas({});
    setResultados({});
    setAcabouDeCorrigir(false);
    limparRiscadas(username, unidade.n);
    setRiscadas({});
  }

  return (
    <div className="space-y-6">
      <a
        href={rotas.unidades}
        className="inline-flex items-center gap-1.5 text-sm text-noite-500 hover:text-azul-700 dark:text-noite-400 dark:hover:text-amarelo-300"
      >
        <Icon nome="setaEsquerda" className="w-4 h-4" />
        {t("nav.unidades")}
      </a>

      <header className="overflow-hidden rounded-2xl border border-noite-200 bg-white dark:border-noite-800 dark:bg-noite-900">
        <div className="faixa-brasil h-1.5" />
        <div className="p-5 sm:p-6">
          <div className="flex items-start gap-4">
            <span
              className={
                "grid place-items-center w-12 h-12 shrink-0 rounded-xl text-lg font-bold " +
                (stats.concluida ? "bg-verde-500 text-white" : "bg-azul-900 text-amarelo-400")
              }
            >
              {unidade.n}
            </span>
            <div className="min-w-0">
              <p className="text-xs uppercase tracking-wide text-noite-400">
                {t("comum.unidade", { n: unidade.n })}
              </p>
              <h1 className="text-xl font-bold leading-tight text-noite-900 sm:text-2xl dark:text-white">
                {tc(unidade.title)}
              </h1>
              {unidade.subtitle && (
                <p className="mt-0.5 text-sm text-noite-500 dark:text-noite-400">{tc(unidade.subtitle)}</p>
              )}
            </div>
          </div>

          <div className="mt-5">
            <div className="mb-1.5 flex flex-wrap items-center justify-between gap-2 text-xs">
              <span className="text-noite-500 dark:text-noite-400">
                {stats.comecada
                  ? t("unidade.certasDeTotal", { certas: stats.certas, total: stats.total })
                  : t("unidade.totalPorCorrigir", { total: stats.total })}
              </span>
              <span
                className={
                  "font-semibold " +
                  (stats.concluida ? "text-verde-600 dark:text-verde-400" : "text-amarelo-700 dark:text-amarelo-300")
                }
              >
                {stats.percentagem}%{" "}
                {stats.concluida
                  ? t("unidade.concluidaSufixo")
                  : t("unidade.faltamPontos", { pontos: LIMIAR_DESBLOQUEIO - stats.percentagem })}
              </span>
            </div>
            <BarraComLimiar valor={stats.percentagem} />
            {seguinte && (
              <p className="mt-2 text-xs text-noite-400 dark:text-noite-500">
                {seguinteAberta
                  ? t("unidade.seguinteAberta", { n: seguinte.n })
                  : t("unidade.chegaA", { pct: LIMIAR_DESBLOQUEIO, n: seguinte.n })}
              </p>
            )}
          </div>
        </div>
      </header>

      {unidade.theory && (
        <section className="rounded-2xl border border-noite-200 bg-white dark:border-noite-800 dark:bg-noite-900">
          <button
            type="button"
            onClick={() => setTeoriaAberta((aberta) => !aberta)}
            aria-expanded={teoriaAberta}
            className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left"
          >
            <span className="font-semibold text-noite-900 dark:text-white">{t("unidade.teoria")}</span>
            <span className="text-sm text-noite-400">
              {teoriaAberta ? t("unidade.esconder") : t("unidade.mostrar")} ▾
            </span>
          </button>
          {teoriaAberta && (
            <div className="border-t border-noite-100 px-5 pb-5 dark:border-noite-800">
              <TheoryBlock theory={unidade.theory} />
            </div>
          )}
        </section>
      )}

      <section className="space-y-4">
        {unidade.exercises.map((exercicio) => (
          <div
            key={exercicio.id}
            className="rounded-2xl border border-noite-200 bg-white p-5 dark:border-noite-800 dark:bg-noite-900"
          >
            <ExercisePart
              exercise={exercicio}
              answers={respostas[exercicio.id] || {}}
              results={resultados[exercicio.id] || null}
              riscadas={riscadas[exercicio.id] || []}
              onRiscar={aoRiscar}
              onCorrigir={corrigirExercicio}
              onChange={(itemN, slot, valor) => aoEscrever(exercicio.id, itemN, slot, valor)}
            />
          </div>
        ))}
      </section>

      {acabouDeCorrigir && (
        <div
          className={
            "flex items-start gap-3 rounded-xl border p-4 text-sm " +
            (stats.concluida
              ? "border-verde-300 bg-verde-50 text-verde-900 dark:border-verde-800 dark:bg-verde-950/50 dark:text-verde-200"
              : "border-amarelo-300 bg-amarelo-50 text-amarelo-900 dark:border-amarelo-900 dark:bg-amarelo-950/40 dark:text-amarelo-200")
          }
        >
          <Icon nome={stats.concluida ? "visto" : "alvo"} className="mt-0.5 w-4 h-4 shrink-0" />
          <p>
            <strong>
              {t("unidade.resultado", {
                certas: stats.certas,
                total: stats.total,
                pct: stats.percentagem,
              })}
            </strong>{" "}
            {stats.concluida
              ? seguinte
                ? t("unidade.resultadoAbriu", { n: seguinte.n })
                : t("unidade.resultadoFim")
              : t("unidade.resultadoFalta", { pct: LIMIAR_DESBLOQUEIO })}
          </p>
        </div>
      )}

      {/* Barra de acções fixa ao fundo do ecrã */}
      <div className="sticky bottom-0 -mx-4 border-t border-noite-200 bg-white/90 px-4 py-3 backdrop-blur sm:-mx-6 sm:px-6 lg:-mx-10 lg:px-10 dark:border-noite-800 dark:bg-noite-900/90">
        <div className="flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={corrigir}
            className="inline-flex items-center gap-2 rounded-lg bg-amarelo-400 px-5 py-2.5 text-sm font-semibold text-azul-950 transition hover:bg-amarelo-300"
          >
            <Icon nome="visto" className="w-4 h-4" />
            {t("unidade.corrigir")}
          </button>
          <button
            type="button"
            onClick={limpar}
            className="rounded-lg px-3 py-2.5 text-sm text-noite-500 transition hover:text-noite-800 dark:text-noite-400 dark:hover:text-noite-100"
          >
            {t("unidade.limpar")}
          </button>
          <span className="ml-auto text-sm font-medium text-noite-500 dark:text-noite-400">
            {stats.percentagem}%
          </span>
        </div>
      </div>

      <nav className="flex items-center justify-between gap-3 pt-2">
        {anterior ? (
          <a
            href={rotas.unidade(anterior.n)}
            className="inline-flex items-center gap-2 rounded-lg border border-noite-200 px-4 py-2.5 text-sm text-noite-600 transition hover:bg-white dark:border-noite-800 dark:text-noite-300 dark:hover:bg-noite-900"
          >
            <Icon nome="setaEsquerda" className="w-4 h-4" />
            {t("comum.unidade", { n: anterior.n })}
          </a>
        ) : (
          <span />
        )}

        {seguinte &&
          (seguinteAberta ? (
            <a
              href={rotas.unidade(seguinte.n)}
              className="inline-flex items-center gap-2 rounded-lg bg-azul-900 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-azul-800"
            >
              {t("comum.unidade", { n: seguinte.n })}
              <Icon nome="setaDireita" className="w-4 h-4" />
            </a>
          ) : (
            <span
              aria-disabled="true"
              title={t("unidade.precisasNesta", { pct: LIMIAR_DESBLOQUEIO })}
              className="inline-flex cursor-not-allowed items-center gap-2 rounded-lg border border-dashed border-noite-300 px-4 py-2.5 text-sm text-noite-400 dark:border-noite-700 dark:text-noite-500"
            >
              <Icon nome="cadeado" className="w-4 h-4" />
              {t("comum.unidade", { n: seguinte.n })}
            </span>
          ))}
      </nav>
    </div>
  );
}
