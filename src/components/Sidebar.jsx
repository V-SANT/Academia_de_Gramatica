// Menu lateral: navegação principal (Início / Unidades / Definições) + a lista
// completa das unidades com o respectivo estado (bloqueada, em curso, concluída).
// Em ecrãs grandes fica fixa à esquerda; em telemóvel abre como gaveta.

import BrandMark from "./BrandMark";
import Icon from "./Icon";
import { rotas } from "../lib/router";
import { useI18n } from "../lib/i18n";
import { estatisticasUnidade, unidadeDesbloqueada, unidadeEmFalta, LIMIAR_DESBLOQUEIO } from "../lib/progress";

function ItemNav({ href, icone, texto, activo }) {
  return (
    <a
      href={href}
      aria-current={activo ? "page" : undefined}
      className={
        "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition " +
        (activo
          ? "bg-amarelo-400 text-azul-950"
          : "text-azul-100 hover:bg-white/10 hover:text-white")
      }
    >
      <Icon nome={icone} className="w-5 h-5 shrink-0" />
      {texto}
    </a>
  );
}

function ItemUnidade({ unidade, stats, desbloqueada, emFalta, activa }) {
  const { t } = useI18n();

  const numero = (
    <span
      className={
        "grid place-items-center w-7 h-7 shrink-0 rounded-md text-xs font-bold " +
        (activa
          ? "bg-azul-950 text-amarelo-400"
          : stats.concluida
            ? "bg-verde-500 text-white"
            : desbloqueada
              ? "bg-white/10 text-azul-100"
              : "bg-white/5 text-azul-300/50")
      }
    >
      {unidade.n}
    </span>
  );

  const conteudo = (
    <>
      {numero}
      <span className="flex-1 min-w-0">
        <span className="block truncate">{unidade.title}</span>
        {desbloqueada && stats.comecada && !stats.concluida && (
          <span className="block text-[11px] text-amarelo-300">{stats.percentagem}%</span>
        )}
      </span>
      {stats.concluida ? (
        <Icon nome="visto" className="w-4 h-4 shrink-0 text-verde-300" />
      ) : !desbloqueada ? (
        <Icon nome="cadeado" className="w-4 h-4 shrink-0 text-azul-300/60" />
      ) : null}
    </>
  );

  const base = "w-full flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-sm text-left transition";

  if (!desbloqueada) {
    return (
      <div
        aria-disabled="true"
        title={t("comum.bloqueadaTitulo", { pct: LIMIAR_DESBLOQUEIO, n: emFalta?.n ?? unidade.n - 1 })}
        className={base + " text-azul-300/50 cursor-not-allowed"}
      >
        {conteudo}
      </div>
    );
  }

  return (
    <a
      href={rotas.unidade(unidade.n)}
      aria-current={activa ? "page" : undefined}
      className={
        base +
        (activa ? " bg-white/15 text-white font-medium" : " text-azul-100 hover:bg-white/10 hover:text-white")
      }
    >
      {conteudo}
    </a>
  );
}

export default function Sidebar({ unidades, progresso, route, username, aberta, onFechar, onTrocarUtilizador }) {
  const { t } = useI18n();

  return (
    <>
      {/* Fundo escurecido quando a gaveta está aberta em telemóvel */}
      {aberta && (
        <button
          type="button"
          aria-label={t("nav.fecharMenu")}
          onClick={onFechar}
          className="fixed inset-0 z-30 bg-azul-950/60 backdrop-blur-sm lg:hidden"
        />
      )}

      <aside
        className={
          "fixed inset-y-0 left-0 z-40 w-72 flex flex-col bg-azul-900 dark:bg-noite-950 " +
          "border-r border-azul-950/50 dark:border-noite-800 transition-transform duration-200 lg:translate-x-0 " +
          (aberta ? "translate-x-0" : "-translate-x-full")
        }
      >
        <div className="faixa-brasil h-1 shrink-0" />

        <div className="flex items-center gap-3 px-5 py-5 shrink-0">
          <BrandMark className="w-10 h-10 shrink-0" />
          <div className="min-w-0">
            <p className="text-white font-semibold leading-tight">{t("app.nome")}</p>
            <p className="text-xs text-amarelo-300">{t("app.subtitulo")}</p>
          </div>
          <button
            type="button"
            onClick={onFechar}
            aria-label={t("nav.fecharMenu")}
            className="ml-auto text-azul-200 hover:text-white lg:hidden"
          >
            <Icon nome="fechar" />
          </button>
        </div>

        <nav className="px-3 space-y-1 shrink-0">
          <ItemNav href={rotas.inicio} icone="inicio" texto={t("nav.inicio")} activo={route.nome === "inicio"} />
          <ItemNav
            href={rotas.unidades}
            icone="livro"
            texto={t("nav.unidades")}
            activo={route.nome === "unidades"}
          />
          <ItemNav
            href={rotas.definicoes}
            icone="engrenagem"
            texto={t("nav.definicoes")}
            activo={route.nome === "definicoes"}
          />
        </nav>

        <div className="mt-6 px-5 shrink-0">
          <p className="text-[11px] uppercase tracking-wider text-azul-300">{t("nav.niveis")}</p>
        </div>

        <div className="mt-2 flex-1 overflow-y-auto px-3 pb-4 space-y-0.5">
          {unidades.map((unidade) => (
            <ItemUnidade
              key={unidade.n}
              unidade={unidade}
              stats={estatisticasUnidade(progresso, unidade)}
              desbloqueada={unidadeDesbloqueada(progresso, unidades, unidade.n)}
              emFalta={unidadeEmFalta(progresso, unidades, unidade.n)}
              activa={route.nome === "unidade" && route.unidadeN === unidade.n}
            />
          ))}
        </div>

        <div className="shrink-0 border-t border-white/10 p-3">
          <div className="flex items-center gap-3 rounded-lg px-2 py-2">
            <span className="grid place-items-center w-8 h-8 shrink-0 rounded-full bg-amarelo-400 text-azul-950 text-sm font-bold">
              {username.slice(0, 1).toUpperCase()}
            </span>
            <span className="flex-1 min-w-0">
              <span className="block text-sm text-white truncate">{username}</span>
              <span className="block text-[11px] text-azul-300">{t("nav.progressoLocal")}</span>
            </span>
            <button
              type="button"
              onClick={onTrocarUtilizador}
              title={t("nav.trocarUtilizador")}
              aria-label={t("nav.trocarUtilizador")}
              className="text-azul-200 hover:text-amarelo-300 shrink-0"
            >
              <Icon nome="sair" className="w-5 h-5" />
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}
