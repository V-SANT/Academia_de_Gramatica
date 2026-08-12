// Os exemplos de gramática e a tabela de conjugação ficam sempre em português
// (é a matéria a estudar); só os títulos das secções, as notas e as etiquetas
// dos exemplos passam pelo dicionário de conteúdo (tc).

import { useI18n } from "../lib/i18n";

export default function TheoryBlock({ theory }) {
  const { tc } = useI18n();
  if (!theory) return null;

  return (
    <div className="mt-4 space-y-5 text-sm">
      {theory.intro && theory.intro.length > 0 && (
        <div className="space-y-1 rounded-xl border-l-4 border-amarelo-400 bg-amarelo-50 p-4 dark:bg-amarelo-950/30">
          {theory.intro.map((linha, i) => (
            <p key={i} className="italic text-noite-700 dark:text-amarelo-100">
              {linha}
            </p>
          ))}
        </div>
      )}

      {theory.table && (
        <div className="overflow-x-auto">
          <table className="min-w-full overflow-hidden rounded-xl border border-noite-200 text-sm dark:border-noite-700">
            <caption className="mb-1.5 text-left text-xs uppercase tracking-wide text-noite-400">
              {theory.table.verb}
            </caption>
            <tbody>
              {theory.table.rows.map((linha, i) => (
                <tr key={i} className="border-t border-noite-100 first:border-t-0 dark:border-noite-800">
                  {linha.map((celula, j) => (
                    <td
                      key={j}
                      className={
                        "px-3 py-2 " +
                        (j === 0
                          ? "bg-noite-100 text-noite-500 dark:bg-noite-800/70 dark:text-noite-300"
                          : j === 1
                            ? "font-semibold text-azul-900 dark:text-amarelo-300"
                            : "italic text-noite-400 dark:text-noite-500")
                      }
                    >
                      {celula}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {theory.sections &&
        theory.sections.map((seccao, i) => (
          <div key={i}>
            {seccao.heading && (
              <p className="mb-1.5 font-semibold text-noite-900 dark:text-white">{tc(seccao.heading)}</p>
            )}
            {seccao.examples && seccao.examples.length > 0 && (
              <ul className="space-y-1.5">
                {seccao.examples.map((exemplo, j) => {
                  const texto = typeof exemplo === "string" ? exemplo : exemplo.text;
                  const etiqueta = typeof exemplo === "string" ? null : exemplo.tag;
                  return (
                    <li
                      key={j}
                      className="flex flex-wrap items-baseline gap-2 text-noite-700 dark:text-noite-200"
                    >
                      <span>{texto}</span>
                      {etiqueta && (
                        <span className="rounded-full bg-verde-100 px-2 py-0.5 text-xs text-verde-800 dark:bg-verde-950/70 dark:text-verde-300">
                          {tc(etiqueta)}
                        </span>
                      )}
                    </li>
                  );
                })}
              </ul>
            )}
            {seccao.note && (
              <p className="mt-1.5 text-xs italic text-noite-500 dark:text-noite-400">{tc(seccao.note)}</p>
            )}
          </div>
        ))}
    </div>
  );
}
