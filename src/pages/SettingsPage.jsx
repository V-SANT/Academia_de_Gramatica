// Definições: idioma, aparência (tema), perfil e gestão dos dados guardados.

import { useRef, useState } from "react";
import Icon from "../components/Icon";
import ThemeSelector from "../components/ThemeSelector";
import LanguageSelector from "../components/LanguageSelector";
import {
  exportProgress,
  importProgressFromFile,
  resetProgress,
  deleteProfile,
  getProgress,
} from "../lib/storage";
import { useI18n } from "../lib/i18n";
import { estatisticasGerais, LIMIAR_DESBLOQUEIO } from "../lib/progress";

function Seccao({ titulo, descricao, children }) {
  return (
    <section className="rounded-2xl border border-noite-200 bg-white p-5 sm:p-6 dark:border-noite-800 dark:bg-noite-900">
      <h2 className="font-semibold text-noite-900 dark:text-white">{titulo}</h2>
      {descricao && <p className="mt-1 text-sm text-noite-500 dark:text-noite-400">{descricao}</p>}
      <div className="mt-4">{children}</div>
    </section>
  );
}

const BOTAO =
  "inline-flex items-center gap-2 rounded-lg border border-noite-300 px-4 py-2 text-sm font-medium text-noite-700 transition hover:bg-noite-100 dark:border-noite-700 dark:text-noite-200 dark:hover:bg-noite-800";

export default function SettingsPage({
  unidades,
  progresso,
  username,
  tema,
  onTema,
  idioma,
  onIdioma,
  onTrocarUtilizador,
  onEliminarPerfil,
  onImportado,
  onProgresso,
}) {
  const { t } = useI18n();
  const inputFicheiro = useRef(null);
  const [mensagem, setMensagem] = useState("");
  const [confirmarApagar, setConfirmarApagar] = useState(false);
  const [confirmarEliminar, setConfirmarEliminar] = useState(false);

  const geral = estatisticasGerais(progresso, unidades);
  const criadoEm = getProgress(username).createdAt;

  async function importar(evento) {
    const ficheiro = evento.target.files?.[0];
    if (!ficheiro) return;
    try {
      const importado = await importProgressFromFile(ficheiro);
      setMensagem(t("def.importado", { nome: importado }));
      onImportado(importado);
    } catch (erro) {
      setMensagem(t("def.erroImportar", { erro: erro.message }));
    } finally {
      evento.target.value = "";
    }
  }

  function apagar() {
    resetProgress(username);
    setConfirmarApagar(false);
    setMensagem(t("def.apagado"));
    onProgresso();
  }

  // Elimina o perfil inteiro: o App trata de voltar ao ecrã de entrada, por
  // isso esta página deixa de estar montada logo a seguir.
  function eliminar() {
    deleteProfile(username);
    onEliminarPerfil();
  }

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-2xl font-bold text-noite-900 dark:text-white">{t("def.titulo")}</h1>
        <p className="mt-1 text-sm text-noite-500 dark:text-noite-400">{t("def.subtitulo")}</p>
      </header>

      <Seccao titulo={t("def.idioma")} descricao={t("def.idiomaNota")}>
        <LanguageSelector valor={idioma} onChange={onIdioma} />
      </Seccao>

      <Seccao titulo={t("def.aparencia")} descricao={t("def.aparenciaNota")}>
        <ThemeSelector valor={tema} onChange={onTema} />
      </Seccao>

      <Seccao titulo={t("def.perfil")} descricao={t("def.perfilNota")}>
        <div className="flex flex-wrap items-center gap-4">
          <span className="grid place-items-center w-12 h-12 shrink-0 rounded-full bg-azul-900 text-lg font-bold text-amarelo-400">
            {username.slice(0, 1).toUpperCase()}
          </span>
          <div className="min-w-0">
            <p className="font-medium text-noite-900 dark:text-white">{username}</p>
            <p className="text-sm text-noite-500 dark:text-noite-400">
              {criadoEm
                ? t("def.desde", { data: new Date(criadoEm).toLocaleDateString(idioma === "es" ? "es-ES" : "pt-PT") })
                : t("def.perfilNovo")}
              {" · "}
              {t("def.resumoPerfil", {
                concluidas: geral.concluidas,
                total: unidades.length,
                pct: geral.percentagem,
              })}
            </p>
          </div>
          <button type="button" onClick={onTrocarUtilizador} className={BOTAO + " sm:ml-auto"}>
            <Icon nome="pessoa" className="w-4 h-4" />
            {t("nav.trocarUtilizador")}
          </button>
        </div>
      </Seccao>

      <Seccao titulo={t("def.dados")} descricao={t("def.dadosNota")}>
        <div className="flex flex-wrap gap-3">
          <button type="button" onClick={() => exportProgress(username)} className={BOTAO}>
            <Icon nome="descarregar" className="w-4 h-4" />
            {t("def.exportar")}
          </button>
          <button type="button" onClick={() => inputFicheiro.current?.click()} className={BOTAO}>
            <Icon nome="carregar" className="w-4 h-4" />
            {t("def.importar")}
          </button>
          <input
            ref={inputFicheiro}
            type="file"
            accept="application/json"
            onChange={importar}
            className="hidden"
          />
        </div>

        <div className="mt-5 rounded-xl border border-red-200 bg-red-50 p-4 dark:border-red-900/60 dark:bg-red-950/30">
          <p className="text-sm font-medium text-red-800 dark:text-red-200">{t("def.apagarTitulo")}</p>
          <p className="mt-1 text-sm text-red-700/80 dark:text-red-300/80">{t("def.apagarNota")}</p>
          {confirmarApagar ? (
            <div className="mt-3 flex flex-wrap gap-2">
              <button
                type="button"
                onClick={apagar}
                className="inline-flex items-center gap-2 rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-700"
              >
                <Icon nome="caixote" className="w-4 h-4" />
                {t("def.apagarConfirmar")}
              </button>
              <button
                type="button"
                onClick={() => setConfirmarApagar(false)}
                className="rounded-lg px-3 py-2 text-sm text-red-700 hover:underline dark:text-red-300"
              >
                {t("def.cancelar")}
              </button>
            </div>
          ) : (
            <button
              type="button"
              onClick={() => setConfirmarApagar(true)}
              className="mt-3 inline-flex items-center gap-2 rounded-lg border border-red-300 px-4 py-2 text-sm font-medium text-red-700 transition hover:bg-red-100 dark:border-red-800 dark:text-red-300 dark:hover:bg-red-950/60"
            >
              <Icon nome="caixote" className="w-4 h-4" />
              {t("def.apagar")}
            </button>
          )}
        </div>

        <div className="mt-3 rounded-xl border border-red-200 bg-red-50 p-4 dark:border-red-900/60 dark:bg-red-950/30">
          <p className="text-sm font-medium text-red-800 dark:text-red-200">{t("def.eliminarTitulo")}</p>
          <p className="mt-1 text-sm text-red-700/80 dark:text-red-300/80">
            {t("def.eliminarNota", { nome: username })}
          </p>
          {confirmarEliminar ? (
            <>
              <p className="mt-2 text-xs text-red-700/70 dark:text-red-300/70">
                {t("def.eliminarDica", { apagar: t("def.apagar") })}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={eliminar}
                  className="inline-flex items-center gap-2 rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-700"
                >
                  <Icon nome="caixote" className="w-4 h-4" />
                  {t("def.eliminarConfirmar", { nome: username })}
                </button>
                <button
                  type="button"
                  onClick={() => setConfirmarEliminar(false)}
                  className="rounded-lg px-3 py-2 text-sm text-red-700 hover:underline dark:text-red-300"
                >
                  {t("def.cancelar")}
                </button>
              </div>
            </>
          ) : (
            <button
              type="button"
              onClick={() => setConfirmarEliminar(true)}
              className="mt-3 inline-flex items-center gap-2 rounded-lg border border-red-300 px-4 py-2 text-sm font-medium text-red-700 transition hover:bg-red-100 dark:border-red-800 dark:text-red-300 dark:hover:bg-red-950/60"
            >
              <Icon nome="pessoa" className="w-4 h-4" />
              {t("def.eliminar")}
            </button>
          )}
        </div>

        {mensagem && <p className="mt-3 text-sm text-noite-500 dark:text-noite-400">{mensagem}</p>}
      </Seccao>

      <Seccao titulo={t("def.comoFunciona")}>
        <ul className="space-y-2 text-sm text-noite-600 dark:text-noite-300">
          <li className="flex gap-2">
            <Icon nome="cadeado" className="mt-0.5 w-4 h-4 shrink-0 text-noite-400" />
            {t("def.regra1", { pct: LIMIAR_DESBLOQUEIO })}
          </li>
          <li className="flex gap-2">
            <Icon nome="alvo" className="mt-0.5 w-4 h-4 shrink-0 text-noite-400" />
            {t("def.regra2")}
          </li>
          <li className="flex gap-2">
            <Icon nome="raio" className="mt-0.5 w-4 h-4 shrink-0 text-noite-400" />
            {t("def.regra3")}
          </li>
        </ul>
      </Seccao>
    </div>
  );
}
