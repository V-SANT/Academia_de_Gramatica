// Selector do idioma da interface. Cada opção aparece escrita no seu próprio
// idioma, para se perceber mesmo estando na língua errada.

import { IDIOMAS, useI18n } from "../lib/i18n";

export default function LanguageSelector({ valor, onChange, compacto = false }) {
  const { idioma } = useI18n();

  if (compacto) {
    return (
      <div
        role="radiogroup"
        aria-label="Idioma"
        className="inline-flex overflow-hidden rounded-lg border border-noite-300 dark:border-noite-700"
      >
        {IDIOMAS.map((opcao) => (
          <button
            key={opcao.valor}
            type="button"
            role="radio"
            aria-checked={idioma === opcao.valor}
            onClick={() => onChange(opcao.valor)}
            className={
              "px-3 py-1.5 text-xs font-medium transition " +
              (idioma === opcao.valor
                ? "bg-amarelo-400 text-azul-950"
                : "text-noite-500 hover:bg-noite-100 dark:text-noite-400 dark:hover:bg-noite-800")
            }
          >
            {opcao.rotulo}
          </button>
        ))}
      </div>
    );
  }

  return (
    <div role="radiogroup" aria-label="Idioma" className="grid gap-3 sm:grid-cols-2">
      {IDIOMAS.map((opcao) => {
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
                "grid place-items-center w-9 h-9 shrink-0 rounded-lg text-xs font-bold uppercase " +
                (activo
                  ? "bg-amarelo-400 text-azul-950"
                  : "bg-noite-100 text-noite-500 dark:bg-noite-800 dark:text-noite-300")
              }
            >
              {opcao.valor}
            </span>
            <span className="block text-sm font-medium text-noite-900 dark:text-white">{opcao.nativo}</span>
          </button>
        );
      })}
    </div>
  );
}
