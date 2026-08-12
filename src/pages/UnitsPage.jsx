// Menu geral com todas as unidades. Daqui abre-se a página própria de cada uma.

import Icon from "../components/Icon";
import UnitCard from "../components/UnitCard";
import { BarraProgresso } from "../components/Progresso";
import { useI18n } from "../lib/i18n";
import {
  estatisticasGerais,
  estatisticasUnidade,
  unidadeDesbloqueada,
  unidadeEmFalta,
  LIMIAR_DESBLOQUEIO,
} from "../lib/progress";

export default function UnitsPage({ unidades, progresso }) {
  const { t } = useI18n();
  const geral = estatisticasGerais(progresso, unidades);

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-2xl font-bold text-noite-900 dark:text-white">{t("unidades.titulo")}</h1>
        <p className="mt-1 text-sm text-noite-500 dark:text-noite-400">
          {t("unidades.resumo", {
            concluidas: geral.concluidas,
            total: unidades.length,
            desbloqueadas: geral.desbloqueadas,
          })}
        </p>
        <div className="mt-3 max-w-sm">
          <BarraProgresso valor={geral.percentagem} />
        </div>
      </header>

      <div className="flex items-start gap-3 rounded-xl border border-amarelo-300 bg-amarelo-50 p-4 text-sm text-amarelo-900 dark:border-amarelo-900 dark:bg-amarelo-950/40 dark:text-amarelo-200">
        <Icon nome="cadeado" className="mt-0.5 w-4 h-4 shrink-0" />
        <p>
          {t("unidades.avisoAntes")}
          <strong>{t("unidades.avisoForte", { pct: LIMIAR_DESBLOQUEIO })}</strong>
          {t("unidades.avisoDepois")}
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {unidades.map((unidade) => (
          <UnitCard
            key={unidade.n}
            unidade={unidade}
            stats={estatisticasUnidade(progresso, unidade)}
            desbloqueada={unidadeDesbloqueada(progresso, unidades, unidade.n)}
            emFalta={unidadeEmFalta(progresso, unidades, unidade.n)}
          />
        ))}
      </div>
    </div>
  );
}
