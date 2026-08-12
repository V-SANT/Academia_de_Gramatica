import { useState, useRef } from "react";
// Só recolhe o nome; quem cria/regista o perfil é o App (função `entrar`).
import { listProfiles, importProgressFromFile, deleteProfile } from "../lib/storage";
import { useI18n } from "../lib/i18n";
import BrandMark from "./BrandMark";
import Icon from "./Icon";
import LanguageSelector from "./LanguageSelector";

export default function Onboarding({ onLogin, idioma, onIdioma }) {
  const { t } = useI18n();
  const [nome, setNome] = useState("");
  const [erro, setErro] = useState("");
  const [perfis, setPerfis] = useState(listProfiles);
  // Modo de gestão: só aí é que aparecem os botões de eliminar, para não se
  // apagar um perfil sem querer ao tentar entrar nele.
  const [aGerir, setAGerir] = useState(false);
  const [aEliminar, setAEliminar] = useState(null);
  const inputFicheiro = useRef(null);

  function submeter(evento) {
    evento.preventDefault();
    const limpo = nome.trim();
    if (!limpo) {
      setErro(t("login.erroVazio"));
      return;
    }
    onLogin(limpo);
  }

  async function importar(evento) {
    const ficheiro = evento.target.files?.[0];
    if (!ficheiro) return;
    try {
      const utilizador = await importProgressFromFile(ficheiro);
      onLogin(utilizador);
    } catch (err) {
      setErro(t("login.erroImportar", { erro: err.message }));
    }
  }

  function eliminar(perfil) {
    const restantes = deleteProfile(perfil);
    setPerfis(restantes);
    setAEliminar(null);
    if (restantes.length === 0) setAGerir(false);
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-azul-900 px-4 py-10 dark:bg-noite-950">
      <div className="w-full max-w-sm overflow-hidden rounded-2xl bg-white shadow-xl dark:bg-noite-900">
        <div className="faixa-brasil h-1.5" />
        <div className="p-8">
          <div className="flex justify-end">
            <LanguageSelector valor={idioma} onChange={onIdioma} compacto />
          </div>

          <div className="mt-2 flex flex-col items-center text-center">
            <BrandMark className="w-14 h-14" />
            <h1 className="mt-3 text-2xl font-bold text-noite-900 dark:text-white">{t("app.nome")}</h1>
            <p className="mt-1 text-sm text-noite-500 dark:text-noite-400">{t("login.subtitulo")}</p>
          </div>

          <form onSubmit={submeter} className="mt-8 space-y-3">
            <label htmlFor="nome" className="block text-sm font-medium text-noite-700 dark:text-noite-200">
              {t("login.nome")}
            </label>
            <input
              id="nome"
              autoFocus
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              placeholder={t("login.placeholder")}
              className="w-full rounded-lg border border-noite-300 bg-white px-3 py-2 text-noite-900 transition focus:border-amarelo-400 focus:outline-none focus:ring-2 focus:ring-amarelo-300 dark:border-noite-700 dark:bg-noite-950 dark:text-white"
            />
            {erro && <p className="text-sm text-red-600 dark:text-red-400">{erro}</p>}
            <button
              type="submit"
              className="w-full rounded-lg bg-amarelo-400 py-2.5 font-semibold text-azul-950 transition hover:bg-amarelo-300"
            >
              {t("login.entrar")}
            </button>
          </form>

          {perfis.length > 0 && (
            <div className="mt-6">
              <div className="mb-2 flex items-center justify-between gap-2">
                <p className="text-xs uppercase tracking-wide text-noite-400">{t("login.perfis")}</p>
                <button
                  type="button"
                  onClick={() => {
                    setAGerir((g) => !g);
                    setAEliminar(null);
                  }}
                  className="text-xs font-medium text-noite-400 underline underline-offset-2 transition hover:text-noite-600 dark:hover:text-noite-200"
                >
                  {aGerir ? t("login.gerirTerminar") : t("login.gerir")}
                </button>
              </div>

              <div className="flex flex-wrap gap-2">
                {perfis.map((perfil) => (
                  <span
                    key={perfil}
                    className="inline-flex items-center overflow-hidden rounded-full border border-noite-300 dark:border-noite-700"
                  >
                    <button
                      type="button"
                      onClick={() => onLogin(perfil)}
                      className="px-3 py-1 text-sm text-noite-700 transition hover:bg-amarelo-50 dark:text-noite-200 dark:hover:bg-noite-800"
                    >
                      {perfil}
                    </button>
                    {aGerir && (
                      <button
                        type="button"
                        onClick={() => setAEliminar(perfil)}
                        aria-label={t("login.eliminarAria", { nome: perfil })}
                        title={t("login.eliminarAria", { nome: perfil })}
                        className="border-l border-noite-300 px-2 py-1.5 text-noite-400 transition hover:bg-red-50 hover:text-red-600 dark:border-noite-700 dark:hover:bg-red-950/50 dark:hover:text-red-400"
                      >
                        <Icon nome="fechar" className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </span>
                ))}
              </div>

              {aEliminar && (
                <div className="mt-3 rounded-lg border border-red-200 bg-red-50 p-3 dark:border-red-900/60 dark:bg-red-950/30">
                  <p className="text-sm text-red-800 dark:text-red-200">
                    {t("login.confirmarEliminar", { nome: aEliminar })}
                  </p>
                  <div className="mt-2 flex gap-2">
                    <button
                      type="button"
                      onClick={() => eliminar(aEliminar)}
                      className="rounded-lg bg-red-600 px-3 py-1.5 text-sm font-medium text-white transition hover:bg-red-700"
                    >
                      {t("login.eliminar")}
                    </button>
                    <button
                      type="button"
                      onClick={() => setAEliminar(null)}
                      className="rounded-lg px-3 py-1.5 text-sm text-red-700 hover:underline dark:text-red-300"
                    >
                      {t("login.cancelar")}
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

          <div className="mt-6 text-center">
            <button
              type="button"
              onClick={() => inputFicheiro.current?.click()}
              className="text-sm text-noite-400 underline underline-offset-2 transition hover:text-noite-600 dark:hover:text-noite-200"
            >
              {t("login.importar")}
            </button>
            <input
              ref={inputFicheiro}
              type="file"
              accept="application/json"
              onChange={importar}
              className="hidden"
            />
          </div>

          <p className="mt-6 text-center text-xs leading-relaxed text-noite-400 dark:text-noite-500">
            {t("login.rodape")}
          </p>
        </div>
      </div>
    </div>
  );
}
