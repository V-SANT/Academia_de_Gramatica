import { useCallback, useEffect, useMemo, useState } from "react";
import { UNITS } from "./data/units";
import { getCurrentUser, getProgress, clearCurrentUser, loginAs } from "./lib/storage";
import { getTheme, applyTheme, setTheme, watchSystemTheme } from "./lib/theme";
import { getIdioma, setIdioma, criarTradutores, I18nProvider, useI18n } from "./lib/i18n";
import { useHashRoute, navegar, rotas } from "./lib/router";
import Onboarding from "./components/Onboarding";
import Sidebar from "./components/Sidebar";
import Icon from "./components/Icon";
import BrandMark from "./components/BrandMark";
import HomePage from "./pages/HomePage";
import UnitsPage from "./pages/UnitsPage";
import UnitPage from "./pages/UnitPage";
import SettingsPage from "./pages/SettingsPage";

export default function App() {
  const [idioma, setIdiomaState] = useState(getIdioma);

  // O i18n envolve tudo — incluindo o ecrã de entrada, que já tem selector de idioma.
  const i18n = useMemo(() => ({ idioma, ...criarTradutores(idioma) }), [idioma]);

  function mudarIdioma(valor) {
    setIdioma(valor);
    setIdiomaState(valor);
    document.documentElement.lang = valor;
  }

  useEffect(() => {
    document.documentElement.lang = idioma;
  }, [idioma]);

  return (
    <I18nProvider value={i18n}>
      <AppInterno idioma={idioma} onIdioma={mudarIdioma} />
    </I18nProvider>
  );
}

function AppInterno({ idioma, onIdioma }) {
  const { t } = useI18n();
  const [username, setUsername] = useState(getCurrentUser());
  const [progresso, setProgresso] = useState(() => (username ? getProgress(username) : { units: {} }));
  const [tema, setTemaState] = useState(getTheme);
  const [menuAberto, setMenuAberto] = useState(false);
  const route = useHashRoute();

  // O tema já foi aplicado pelo script inline do index.html; aqui só se
  // reaplica quando a preferência muda e enquanto for "system" segue-se em
  // directo as mudanças do sistema operativo.
  useEffect(() => {
    applyTheme(tema);
    if (tema !== "system") return;
    return watchSystemTheme(() => applyTheme("system"));
  }, [tema]);

  // Cada página é um ecrã próprio: ao mudar de rota volta-se ao topo e fecha-se
  // a gaveta do telemóvel.
  useEffect(() => {
    window.scrollTo(0, 0);
    setMenuAberto(false);
  }, [route.nome, route.unidadeN]);

  const recarregarProgresso = useCallback(() => {
    if (username) setProgresso(getProgress(username));
  }, [username]);

  // Ponto único de entrada num perfil: cria-o se for novo, marca-o como o
  // utilizador actual (também usado depois de importar um ficheiro) e recarrega
  // o progresso.
  function entrar(nome) {
    loginAs(nome);
    setUsername(nome);
    setProgresso(getProgress(nome));
    navegar(rotas.inicio);
  }

  function trocarUtilizador() {
    clearCurrentUser();
    setUsername(null);
    setProgresso({ units: {} });
  }

  // O perfil já foi apagado do localStorage por quem chamou; aqui só se volta
  // ao ecrã de entrada.
  function aposEliminarPerfil() {
    setUsername(null);
    setProgresso({ units: {} });
    navegar(rotas.inicio);
  }

  function mudarTema(valor) {
    setTheme(valor);
    setTemaState(valor);
  }

  if (!username) {
    return <Onboarding onLogin={entrar} idioma={idioma} onIdioma={onIdioma} />;
  }

  const props = { unidades: UNITS, progresso, username, onProgresso: recarregarProgresso };

  let pagina;
  if (route.nome === "unidades") {
    pagina = <UnitsPage {...props} />;
  } else if (route.nome === "unidade") {
    // key: força o estado das respostas a reiniciar ao saltar entre unidades.
    pagina = <UnitPage key={route.unidadeN} unidadeN={route.unidadeN} {...props} />;
  } else if (route.nome === "definicoes") {
    pagina = (
      <SettingsPage
        {...props}
        tema={tema}
        onTema={mudarTema}
        idioma={idioma}
        onIdioma={onIdioma}
        onTrocarUtilizador={trocarUtilizador}
        onEliminarPerfil={aposEliminarPerfil}
        onImportado={entrar}
      />
    );
  } else {
    pagina = <HomePage {...props} />;
  }

  return (
    <div className="min-h-screen bg-noite-50 dark:bg-noite-950 text-noite-900 dark:text-noite-100">
      <Sidebar
        unidades={UNITS}
        progresso={progresso}
        route={route}
        username={username}
        aberta={menuAberto}
        onFechar={() => setMenuAberto(false)}
        onTrocarUtilizador={trocarUtilizador}
      />

      <div className="lg:pl-72">
        {/* Barra superior só em telemóvel/tablet — em desktop a sidebar chega. */}
        <header className="sticky top-0 z-20 flex items-center gap-3 border-b border-noite-200 bg-white/90 px-4 py-3 backdrop-blur lg:hidden dark:border-noite-800 dark:bg-noite-900/90">
          <button
            type="button"
            onClick={() => setMenuAberto(true)}
            aria-label={t("nav.abrirMenu")}
            className="rounded-lg p-1.5 text-noite-600 hover:bg-noite-100 dark:text-noite-300 dark:hover:bg-noite-800"
          >
            <Icon nome="menu" className="w-6 h-6" />
          </button>
          <BrandMark className="w-7 h-7" />
          <span className="font-semibold text-noite-900 dark:text-white">{t("app.nome")}</span>
        </header>

        <main className="mx-auto w-full max-w-4xl px-4 py-8 sm:px-6 lg:px-10 lg:py-12">{pagina}</main>
      </div>
    </div>
  );
}
