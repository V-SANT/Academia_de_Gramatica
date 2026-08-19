// Página inicial: boas-vindas, números gerais e atalho para continuar onde se
// ficou. As unidades em si vivem em #/unidades e cada uma na sua própria página.

import Icon from "../components/Icon";
import UnitCard from "../components/UnitCard";
import { BarraProgresso } from "../components/Progresso";
import { rotas } from "../lib/router";
import { useI18n } from "../lib/i18n";
import {
  estatisticasGerais,
  estatisticasUnidade,
  proximaUnidade,
  unidadeDesbloqueada,
  unidadeEmFalta,
  LIMIAR_DESBLOQUEIO,
} from "../lib/progress";

function Metrica({ icone, rotulo, valor, sufixo }) {
  return (
    <div className="rounded-xl border border-noite-200 bg-white p-4 dark:border-noite-800 dark:bg-noite-900">
      <div className="flex items-center gap-2 text-noite-500 dark:text-noite-400">
        <Icon nome={icone} className="w-4 h-4" />
        <span className="text-xs uppercase tracking-wide">{rotulo}</span>
      </div>
      <p className="mt-2 text-2xl font-bold text-noite-900 dark:text-white">
        {valor}
        {sufixo && <span className="ml-1 text-sm font-medium text-noite-400">{sufixo}</span>}
      </p>
    </div>
  );
}

export default function HomePage({ unidades, progresso, username }) {
  const { t } = useI18n();
  const geral = estatisticasGerais(progresso, unidades);
  const seguinte = proximaUnidade(progresso, unidades);
  const statsSeguinte = estatisticasUnidade(progresso, seguinte);
  const tudoConcluido = geral.concluidas === unidades.length;

  return (
    <div className="space-y-8">
      {/* Cartão de destaque com as cores da bandeira */}
      <section className="overflow-hidden rounded-2xl bg-azul-900 dark:bg-noite-900 dark:ring-1 dark:ring-noite-800">
        <div className="faixa-brasil h-1.5" />
        <div className="p-6 sm:p-8">
          <p className="text-sm text-amarelo-300">{t("home.ola", { nome: username })}</p>
          <h1 className="mt-1 text-2xl font-bold text-white sm:text-3xl">
            {tudoConcluido ? t("home.tituloCompleto") : t("home.titulo")}
          </h1>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-azul-100">
            {tudoConcluido ? t("home.introCompleto") : t("home.intro", { pct: LIMIAR_DESBLOQUEIO })}
          </p>

          <div className="mt-6 max-w-md">
            <div className="mb-1.5 flex items-center justify-between text-xs text-azul-100">
              <span>{t("home.progressoCurso")}</span>
              <span className="font-semibold text-amarelo-300">{geral.percentagem}%</span>
            </div>
            <BarraProgresso valor={geral.percentagem} />
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={rotas.unidade(seguinte.n)}
              className="inline-flex items-center gap-2 rounded-lg bg-amarelo-400 px-4 py-2.5 text-sm font-semibold text-azul-950 transition hover:bg-amarelo-300"
            >
              <Icon nome="raio" className="w-4 h-4" />
              {statsSeguinte.comecada ? t("comum.continuar") : t("comum.comecar")} —{" "}
              {t("comum.unidade", { n: seguinte.n })}
            </a>
            <a
              href={rotas.unidades}
              className="inline-flex items-center gap-2 rounded-lg border border-white/25 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-white/10"
            >
              {t("comum.verTodasUnidades")}
              <Icon nome="setaDireita" className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        <Metrica
          icone="visto"
          rotulo={t("home.concluidas")}
          valor={geral.concluidas}
          sufixo={`/ ${unidades.length}`}
        />
        <Metrica
          icone="cadeado"
          rotulo={t("home.desbloqueadas")}
          valor={geral.desbloqueadas}
          sufixo={`/ ${unidades.length}`}
        />
        <Metrica icone="alvo" rotulo={t("home.certas")} valor={geral.certas} sufixo={`/ ${geral.total}`} />
        <Metrica icone="chama" rotulo={t("home.precisao")} valor={`${geral.percentagem}%`} />
      </section>

      <section>
        <div className="mb-3 flex items-end justify-between">
          <div>
            <h2 className="text-lg font-semibold text-noite-900 dark:text-white">{t("home.proximaEtapa")}</h2>
            <p className="text-sm text-noite-500 dark:text-noite-400">{t("home.proximaEtapaNota")}</p>
          </div>
          <a
            href={rotas.unidades}
            className="hidden shrink-0 text-sm font-medium text-azul-700 hover:underline sm:block dark:text-amarelo-300"
          >
            {t("comum.verTodas")}
          </a>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {unidades
            .filter((u) => u.n >= seguinte.n)
            .slice(0, 2)
            .map((unidade) => (
              <UnitCard
                key={unidade.n}
                unidade={unidade}
                stats={estatisticasUnidade(progresso, unidade)}
                desbloqueada={unidadeDesbloqueada(progresso, unidades, unidade.n)}
                emFalta={unidadeEmFalta(progresso, unidades, unidade.n)}
              />
            ))}
        </div>
      </section>
    </div>
  );
}
