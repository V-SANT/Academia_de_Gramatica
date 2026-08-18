// Confere o dicionário de conteúdo (CONTEUDO_ES) contra os textos reais:
//  - chaves órfãs: já não correspondem a nenhum texto do conteúdo
//  - textos sem tradução: aparecem na app mas não estão no dicionário
import { UNITS } from "../src/data/units.js";
import { CONTEUDO_ES } from "../src/lib/i18n.js";

// Só se traduz o que é "moldura": enunciados, notas, títulos de secção e
// etiquetas. As frases portuguesas de estudo ficam sempre em português.
const usados = new Set();
for (const u of UNITS) {
  if (u.title) usados.add(u.title);
  if (u.subtitle) usados.add(u.subtitle);
  for (const s of u.theory?.sections || []) {
    if (s.heading) usados.add(s.heading);
    if (s.note) usados.add(s.note);
    for (const e of s.examples || []) if (e && typeof e === "object" && e.tag) usados.add(e.tag);
  }
  for (const ex of u.exercises) {
    if (ex.instructions) usados.add(ex.instructions);
    if (ex.note) usados.add(ex.note);
  }
}

const chaves = new Set(Object.keys(CONTEUDO_ES));
const orfas = [...chaves].filter((k) => !usados.has(k));
const semTraducao = [...usados].filter((t) => !chaves.has(t));

console.log(`textos traduzíveis: ${usados.size} | chaves no dicionário: ${chaves.size}`);
console.log(`\n--- CHAVES ÓRFÃS (${orfas.length}) ---`);
for (const k of orfas) console.log(`  ${JSON.stringify(k)}`);
console.log(`\n--- SEM TRADUÇÃO (${semTraducao.length}) ---`);
for (const t of semTraducao) console.log(`  ${JSON.stringify(t)}`);
