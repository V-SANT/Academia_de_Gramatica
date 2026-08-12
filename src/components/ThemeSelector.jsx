// Selector de tema (claro / escuro / sistema). É controlado: o estado real
// vive no App, que é quem aplica a classe .dark e ouve o sistema operativo.

import Icon from "./Icon";
import { useI18n } from "../lib/i18n";

const OPCOES = [
  { valor: "light", chave: "tema.claro", icone: "sol" },
  { valor: "dark", chave: "tema.escuro", icone: "lua" },
  { valor: "system", chave: "tema.sistema", icone: "ecra" },
];

export default function ThemeSelector({ valor, onChange }) {
  const { t } = useI18n();

  return (
    <div role="radiogroup" aria-label={t("tema.grupo")} className="grid gap-3 sm:grid-cols-3">
      {OPCOES.map((opcao) => {
        const activo = valor === opcao.valor;
        return (
          <button
            key={opcao.valor}
            type="button"
            role="radio"
            aria-checked={activo}
            onClick={() => onChange(opcao.valor)}
            className={
              "flex items-center gap-3 rounded-xl border p-4 text-left transition " +
              (activo
                ? "border-amarelo-400 bg-amarelo-50 dark:border-amarelo-400 dark:bg-amarelo-950/40"
                : "border-noite-200 hover:border-noite-300 hover:bg-noite-50 dark:border-noite-800 dark:hover:border-noite-700 dark:hover:bg-noite-800/50")
            }
          >
            <span
              className={
                "grid place-items-center w-9 h-9 shrink-0 rounded-lg " +
                (activo
                  ? "bg-amarelo-400 text-azul-950"
                  : "bg-noite-100 text-noite-500 dark:bg-noite-800 dark:text-noite-300")
              }
            >
              <Icon nome={opcao.icone} className="w-5 h-5" />
            </span>
            <span className="min-w-0">
              <span className="block text-sm font-medium text-noite-900 dark:text-white">
                {t(opcao.chave)}
              </span>
              {opcao.valor === "system" && (
                <span className="block text-xs text-noite-500 dark:text-noite-400">
                  {t("tema.sistemaNota")}
                </span>
              )}
            </span>
          </button>
        );
      })}
    </div>
  );
}
