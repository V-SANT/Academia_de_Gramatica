// Renderiza um bloco de exercício (ex.: "1.1", "1.3") de uma unidade.
// `answers` e `results` são mapas indexados por item.n:
//   answers[n]  -> string (construct/open) ou array de strings (blank, uma por "___")
//   results[n]  -> bool (construct) ou array de bools (blank) — null enquanto não se corrige
//
// Cada exercício corrige-se por si (botão no fim do bloco), sem ser preciso
// fazer a unidade toda. A resposta certa de um item errado não aparece logo:
// fica atrás de um clique, para dar hipótese de tentar outra vez primeiro.
//
// Nos exercícios com banco de palavras, `riscadas` são as palavras já usadas
// (risca-se/desrisca-se com um clique) — é só apoio visual, não conta para a nota.

import { useState } from "react";
import Icon from "./Icon";
import { useI18n } from "../lib/i18n";

// Conta certas/total a partir de um mapa de resultados de um exercício.
function contar(results) {
  if (!results) return null;
  let certas = 0;
  let total = 0;
  for (const valor of Object.values(results)) {
    const lista = Array.isArray(valor) ? valor : [valor];
    for (const r of lista) {
      if (r === null || r === undefined) continue;
      total += 1;
      if (r) certas += 1;
    }
  }
  return total ? { certas, total } : null;
}

const CAMPO_BASE =
  "rounded-md border px-2 py-1 text-sm transition focus:outline-none focus:ring-2 " +
  "bg-white text-noite-900 placeholder:text-noite-300 " +
  "dark:bg-noite-950 dark:text-white dark:placeholder:text-noite-600";

function classeCampo(resultado) {
  if (resultado === true) {
    return `${CAMPO_BASE} border-verde-400 bg-verde-50 focus:ring-verde-300 dark:border-verde-600 dark:bg-verde-950/60`;
  }
  if (resultado === false) {
    return `${CAMPO_BASE} border-red-400 bg-red-50 focus:ring-red-300 dark:border-red-700 dark:bg-red-950/50`;
  }
  return `${CAMPO_BASE} border-noite-300 focus:border-amarelo-400 focus:ring-amarelo-300 dark:border-noite-700`;
}

function BancoDePalavras({ palavras, riscadas, onRiscar }) {
  const { t } = useI18n();

  return (
    <div className="mt-3">
      <div className="flex flex-wrap gap-1.5">
        {palavras.map((palavra) => {
          const riscada = riscadas.includes(palavra);
          return (
            <button
              key={palavra}
              type="button"
              onClick={() => onRiscar(palavra)}
              aria-pressed={riscada}
              title={t(riscada ? "ex.desriscar" : "ex.riscar", { palavra })}
              className={
                "rounded-full px-2.5 py-0.5 text-xs font-medium transition " +
                (riscada
                  ? "bg-noite-100 text-noite-400 line-through decoration-2 decoration-noite-400 dark:bg-noite-800/60 dark:text-noite-500 dark:decoration-noite-500"
                  : "bg-amarelo-100 text-amarelo-900 hover:bg-amarelo-200 dark:bg-amarelo-950/60 dark:text-amarelo-200 dark:hover:bg-amarelo-900/60")
              }
            >
              {palavra}
            </button>
          );
        })}
      </div>
      <p className="mt-1.5 text-xs text-noite-400 dark:text-noite-500">{t("ex.dicaBanco")}</p>
    </div>
  );
}

function BlankItem({ item, value, onChange, result }) {
  const { t } = useI18n();
  // Que respostas certas é que já foram reveladas, por posição do "___"
  const [reveladas, setReveladas] = useState({});
  const partes = item.prompt.split("___");
  const valores = value || item.answers.map(() => "");
  const resultados = result || item.answers.map(() => null);

  function alternar(i) {
    setReveladas((anteriores) => ({ ...anteriores, [i]: !anteriores[i] }));
  }

  return (
    <div className="py-2">
      <div className="flex flex-wrap items-center gap-1 text-noite-800 dark:text-noite-100">
        <span className="mr-1 text-sm text-noite-400">{item.n}.</span>
        {partes.map((parte, i) => (
          <span key={i} className="flex flex-wrap items-center gap-1">
            <span>{parte}</span>
            {i < item.answers.length && (
              <span className="inline-flex items-center gap-1">
                <input
                  type="text"
                  value={valores[i] || ""}
                  onChange={(e) => onChange(item.n, i, e.target.value)}
                  aria-label={t("ex.respostaAria", { i: i + 1, n: item.n })}
                  className={"w-28 " + classeCampo(resultados[i])}
                />
                {resultados[i] === false &&
                  (reveladas[i] ? (
                    <button
                      type="button"
                      onClick={() => alternar(i)}
                      title={t("ex.esconderResposta")}
                      className="text-xs font-medium text-red-600 dark:text-red-400"
                    >
                      → {item.answers[i]}
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={() => alternar(i)}
                      className="rounded-md border border-red-300 px-1.5 py-0.5 text-[11px] font-medium text-red-600 transition hover:bg-red-50 dark:border-red-800 dark:text-red-400 dark:hover:bg-red-950/50"
                    >
                      {t("ex.verResposta")}
                    </button>
                  ))}
                {resultados[i] === true && (
                  <span className="text-sm text-verde-600 dark:text-verde-400">✓</span>
                )}
              </span>
            )}
          </span>
        ))}
      </div>
    </div>
  );
}

function ConstructItem({ item, value, onChange, result }) {
  const { t } = useI18n();
  const [revelada, setRevelada] = useState(false);

  return (
    <div className="py-2">
      <div className="flex items-start gap-2">
        <span className="pt-1.5 text-sm text-noite-400">{item.n}.</span>
        <div className="flex-1 min-w-0">
          <p className="mb-1 text-xs italic text-noite-500 dark:text-noite-400">({item.cue})</p>
          <input
            type="text"
            value={(value && value[0]) || ""}
            onChange={(e) => onChange(item.n, 0, e.target.value)}
            aria-label={t("ex.fraseAria", { n: item.n })}
            className={"w-full " + classeCampo(result)}
          />
          {result === false &&
            (revelada ? (
              <button
                type="button"
                onClick={() => setRevelada(false)}
                title={t("ex.esconderResposta")}
                className="mt-1 text-left text-xs text-red-600 dark:text-red-400"
              >
                {t("ex.respostaLivro")} <span className="font-medium">{item.answer}</span>
              </button>
            ) : (
              <button
                type="button"
                onClick={() => setRevelada(true)}
                className="mt-1 rounded-md border border-red-300 px-1.5 py-0.5 text-[11px] font-medium text-red-600 transition hover:bg-red-50 dark:border-red-800 dark:text-red-400 dark:hover:bg-red-950/50"
              >
                {t("ex.verResposta")}
              </button>
            ))}
        </div>
        {result === true && <span className="pt-1.5 text-verde-600 dark:text-verde-400">✓</span>}
      </div>
    </div>
  );
}

function OpenItem({ item }) {
  return (
    <div className="flex items-start gap-2 py-2">
      <span className="pt-0.5 text-sm text-noite-400">{item.n}.</span>
      <p className="text-sm text-noite-600 dark:text-noite-300">{item.cue}</p>
    </div>
  );
}

export default function ExercisePart({
  exercise,
  answers,
  results,
  onChange,
  onCorrigir,
  riscadas = [],
  onRiscar,
}) {
  const { t, tc } = useI18n();
  const resumo = contar(results);

  return (
    <div>
      <p className="font-medium text-noite-900 dark:text-white">
        <span className="mr-1.5 rounded-md bg-azul-900 px-2 py-0.5 text-xs font-bold text-amarelo-400">
          {exercise.id}
        </span>
        <span className="text-sm font-normal text-noite-700 dark:text-noite-200">
          {tc(exercise.instructions)}
        </span>
      </p>

      {exercise.note && (
        <p className="mt-1.5 rounded-lg bg-noite-100 px-3 py-2 text-xs italic text-noite-500 dark:bg-noite-800/60 dark:text-noite-400">
          {tc(exercise.note)}
        </p>
      )}

      {exercise.wordBank && (
        <BancoDePalavras
          palavras={exercise.wordBank}
          riscadas={riscadas}
          onRiscar={(palavra) => onRiscar(exercise.id, palavra)}
        />
      )}

      <div className="mt-3 divide-y divide-noite-100 dark:divide-noite-800">
        {exercise.items.map((item) => {
          if (exercise.type === "blank") {
            return (
              <BlankItem
                key={item.n}
                item={item}
                value={answers[item.n]}
                result={results ? results[item.n] : null}
                onChange={onChange}
              />
            );
          }
          if (exercise.type === "construct") {
            return (
              <ConstructItem
                key={item.n}
                item={item}
                value={answers[item.n]}
                result={results ? results[item.n] : null}
                onChange={onChange}
              />
            );
          }
          return <OpenItem key={item.n} item={item} />;
        })}
      </div>

      {/* Correcção só deste exercício — dá para avançar aos poucos */}
      {exercise.type !== "open" && onCorrigir && (
        <div className="mt-4 flex flex-wrap items-center gap-3 border-t border-noite-100 pt-3 dark:border-noite-800">
          <button
            type="button"
            onClick={() => onCorrigir(exercise)}
            className="inline-flex items-center gap-1.5 rounded-lg border border-azul-900 px-3 py-1.5 text-xs font-semibold text-azul-900 transition hover:bg-azul-900 hover:text-amarelo-400 dark:border-amarelo-400 dark:text-amarelo-300 dark:hover:bg-amarelo-400 dark:hover:text-azul-950"
          >
            <Icon nome="visto" className="w-3.5 h-3.5" />
            {t("ex.corrigir")}
          </button>
          {resumo && (
            <span
              className={
                "text-xs font-medium " +
                (resumo.certas === resumo.total
                  ? "text-verde-600 dark:text-verde-400"
                  : "text-noite-500 dark:text-noite-400")
              }
            >
              {t("ex.resumo", { certas: resumo.certas, total: resumo.total })}
            </span>
          )}
        </div>
      )}
    </div>
  );
}
