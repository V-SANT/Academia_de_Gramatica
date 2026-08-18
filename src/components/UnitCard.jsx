// Cartão de uma unidade no menu geral (#/unidades) e no Início.
// Mostra o estado (bloqueada / disponível / em curso / concluída) e leva à
// página própria da unidade.

import Icon from "./Icon";
import { BarraComLimiar } from "./Progresso";
import { rotas } from "../lib/router";
import { useI18n } from "../lib/i18n";
import { LIMIAR_DESBLOQUEIO } from "../lib/progress";

function Etiqueta({ stats, desbloqueada }) {
  const { t } = useI18n();

  if (!desbloqueada) {
    return (
      <span className="inline-flex items-center gap-1 rounded-full bg-noite-100 px-2.5 py-1 text-xs font-medium text-noite-500 dark:bg-noite-800 dark:text-noite-400">
        <Icon nome="cadeado" className="w-3.5 h-3.5" />
        {t("estado.bloqueada")}
      </span>
    );
  }
  if (stats.concluida) {
    return (
      <span className="inline-flex items-center gap-1 rounded-full bg-verde-100 px-2.5 py-1 text-xs font-medium text-verde-700 dark:bg-verde-900/50 dark:text-verde-300">
        <Icon nome="visto" className="w-3.5 h-3.5" />
        {t("estado.concluida")}
      </span>
    );
  }
  if (stats.comecada) {
    return (
      <span className="inline-flex items-center gap-1 rounded-full bg-amarelo-100 px-2.5 py-1 text-xs font-medium text-amarelo-800 dark:bg-amarelo-950 dark:text-amarelo-300">
        {t("estado.emCurso")}
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-azul-50 px-2.5 py-1 text-xs font-medium text-azul-700 dark:bg-azul-950 dark:text-azul-200">
      {t("estado.disponivel")}
    </span>
  );
}

export default function UnitCard({ unidade, stats, desbloqueada, emFalta }) {
  const { t, tc } = useI18n();

  const base =
    "group relative flex flex-col gap-3 rounded-2xl border p-5 transition " +
    (desbloqueada
      ? "border-noite-200 bg-white hover:border-amarelo-400 hover:shadow-lg hover:shadow-azul-900/5 dark:border-noite-800 dark:bg-noite-900 dark:hover:border-amarelo-400"
      : "border-dashed border-noite-200 bg-noite-100/60 dark:border-noite-800 dark:bg-noite-900/40");

  const cabecalho = (
    <>
      <div className="flex items-start justify-between gap-3">
        <span
          className={
            "grid place-items-center w-11 h-11 shrink-0 rounded-xl text-lg font-bold " +
            (stats.concluida
              ? "bg-verde-500 text-white"
              : desbloqueada
                ? "bg-azul-900 text-amarelo-400"
                : "bg-noite-200 text-noite-500 dark:bg-noite-800 dark:text-noite-500")
          }
        >
          {unidade.n}
        </span>
        <Etiqueta stats={stats} desbloqueada={desbloqueada} />
      </div>

      <div>
        <h3
          className={
            "font-semibold leading-snug " +
            (desbloqueada ? "text-noite-900 dark:text-white" : "text-noite-500 dark:text-noite-500")
          }
        >
          {tc(unidade.title)}
        </h3>
        {unidade.subtitle && (
          <p className="mt-0.5 text-sm text-noite-500 dark:text-noite-400">{tc(unidade.subtitle)}</p>
        )}
      </div>
    </>
  );

  if (!desbloqueada) {
    return (
      <div className={base}>
        {cabecalho}
        <p className="mt-auto flex items-start gap-2 pt-2 text-sm text-noite-500 dark:text-noite-400">
          <Icon nome="cadeado" className="w-4 h-4 mt-0.5 shrink-0" />
          <span>
            {t("cartao.precisasDe", { pct: LIMIAR_DESBLOQUEIO })}
            <a
              href={rotas.unidade(emFalta.n)}
              className="font-medium text-azul-700 underline underline-offset-2 hover:text-azul-900 dark:text-azul-300 dark:hover:text-azul-200"
            >
              {t("comum.unidade", { n: emFalta.n })}
            </a>
            {t("cartao.paraAbrir")}
          </span>
        </p>
      </div>
    );
  }

  return (
    <a href={rotas.unidade(unidade.n)} className={base}>
      {cabecalho}

      <div className="mt-auto pt-2">
        <BarraComLimiar valor={stats.percentagem} />
        <div className="mt-2 flex items-center justify-between text-xs">
          <span className="text-noite-500 dark:text-noite-400">
            {stats.comecada
              ? t("cartao.respostasCertas", { certas: stats.certas, total: stats.total })
              : t("cartao.respostas", { total: stats.total })}
          </span>
          <span className="inline-flex items-center gap-1 font-medium text-azul-800 group-hover:gap-2 transition-all dark:text-amarelo-300">
            {stats.comecada ? `${stats.percentagem}%` : t("comum.comecar")}
            <Icon nome="setaDireita" className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>
    </a>
  );
}
