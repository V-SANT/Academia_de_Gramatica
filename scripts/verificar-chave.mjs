// Confere as unidades transcritas contra a chave dos exercícios do livro.
// Para cada exercício compara os números dos itens (incluindo os saltos dos
// exemplos já resolvidos) e cada resposta, tolerando acentos, maiúsculas,
// alternativas com "/" e partes opcionais entre parênteses.
//
// Corre a partir da raiz do projecto:
//   node scripts/verificar-chave.mjs fontes/chave.txt [scripts/adaptacao-br.json]
import { readFileSync } from "node:fs";
import { UNITS } from "../src/data/units.js";

// A chave do livro está em português europeu e o conteúdo da app foi adaptado
// ao português do Brasil. Aplica-se a mesma tabela de substituições à chave
// antes de comparar, senão cada "autocarro -> ônibus" aparecia como erro.
const tabela = process.argv[3] || new URL("adaptacao-br.json", import.meta.url);
const adaptacao = JSON.parse(readFileSync(tabela, "utf8")).regras;
const paraBR = (texto) => adaptacao.reduce((acc, [de, para]) => acc.split(de).join(para), texto);

const chave = paraBR(readFileSync(process.argv[2], "utf8"));

// A chave vem em blocos "Unidade N" -> "6.1." -> "2. resposta"
const porUnidade = {};
{
  const blocos = chave.split(/^Unidade (\d+)$/m);
  for (let i = 1; i < blocos.length; i += 2) {
    const n = Number(blocos[i]);
    const exercicios = {};
    let actual = null;
    const soltas = {};
    for (const linha of blocos[i + 1].split("\n").map((l) => l.trim())) {
      const cab = linha.match(/^(\d+\.\d+)\.$/);
      if (cab) {
        actual = cab[1];
        exercicios[actual] = {};
        continue;
      }
      // Exercícios com grupos "a) 1. … 2. …": cada grupo é um exercício à
      // parte, com o id do exercício seguido da letra (44.3a, 44.3b, …).
      const grupo = linha.match(/^([A-Za-z])\)\s+(.*)$/);
      if (grupo && actual) {
        const idGrupo = actual + grupo[1];
        exercicios[idGrupo] = {};
        for (const pedaco of grupo[2].split(/\s{2,}/)) {
          const m = pedaco.match(/^(\d+)\.\s*(.*)$/);
          if (m) exercicios[idGrupo][m[1]] = m[2];
        }
        continue;
      }
      // O 50.2 é um diálogo: a chave marca as falas com o nome de quem fala
      // (Ana:, Rita:) em vez de as numerar. Numeram-se pela ordem de entrada.
      const fala = linha.match(/^[A-ZÁ-Ú][a-zá-ú]{1,10}:\s+(.*)$/);
      if (fala && actual) {
        exercicios[actual][String(Object.keys(exercicios[actual]).length + 1)] = fala[1];
        continue;
      }
      const item = linha.match(/^(\d+)\.\s+(.*)$/);
      if (item && actual) {
        exercicios[actual][item[1]] = item[2];
      } else if (actual && linha && soltas[actual] === undefined) {
        soltas[actual] = linha;
      }
    }
    // Exercícios que são uma lista (35.1, 35.2): a chave dá tudo numa linha sem
    // numeração, e do lado da app são um só item com vários brancos. Só conta
    // se o exercício não tiver itens numerados — há exercícios (47.4) que
    // trazem uma nota antes deles.
    for (const [id, linha] of Object.entries(soltas)) {
      if (Object.keys(exercicios[id]).length === 0) exercicios[id] = { 1: linha };
    }
    porUnidade[n] = exercicios;
  }
}

// A chave do livro está em português europeu (está a fazer); a app usa a forma
// brasileira (está fazendo). Converte-se a chave antes de comparar.
const paraGerundio = (s) =>
  s.replace(
    /\b(est(?:ou|ás|á|amos|ão|ar|ava|avas|ávamos|avam|eve|iveram|ive))\s+a\s+([a-zçãõáéíóúâêô]+)r\b/gi,
    // "pôr" perde o circunflexo no gerúndio: estar a pôr -> estar pondo.
    (_, estar, raiz) => `${estar} ${raiz.replace(/ô$/, "o")}ndo`,
  );

const normalizar = (s) =>
  s
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[.,!?;:()→=]/g, "") // a chave usa "→" e "=" entre os passos das transformações
    .replace(/\s+/g, " ")
    .trim();

let problemas = 0;
for (const unidade of UNITS) {
  const chaveUnidade = porUnidade[unidade.n];
  if (!chaveUnidade) {
    console.log(`U${unidade.n}: sem secção na chave`);
    problemas++;
    continue;
  }
  for (const ex of unidade.exercises) {
    if (ex.type === "open") continue;
    const chaveEx = chaveUnidade[ex.id];
    if (!chaveEx) {
      console.log(`U${unidade.n} ${ex.id}: exercício não está na chave`);
      problemas++;
      continue;
    }
    // Itens com sufixo (2a/2b/2c) juntam-se no mesmo número da chave
    const agrupado = {};
    for (const item of ex.items) {
      const base = String(item.n).match(/^\d+/)[0];
      const resp = ex.type === "blank" ? item.answers.join(" ") : item.answer;
      agrupado[base] = (agrupado[base] ? agrupado[base] + " " : "") + resp;
    }
    for (const [n, minha] of Object.entries(agrupado)) {
      const dela = chaveEx[n];
      if (dela === undefined) {
        console.log(`U${unidade.n} ${ex.id} item ${n}: não existe na chave`);
        problemas++;
        continue;
      }
      // Os dois lados podem trazer alternativas com "/" e partes opcionais
      // entre parênteses. Gera-se o conjunto de variantes de cada um e basta
      // que se cruzem nalgum ponto.
      const expandir = (texto) => {
        const comOpcionais = [
          texto.replace(/\(([^)]*)\)/g, "$1"), // com a parte opcional
          texto.replace(/\([^)]*\)/g, ""), // sem ela
        ];
        const fora = new Set();
        for (const variante of comOpcionais) {
          fora.add(normalizar(variante)); // a frase inteira (o "/" pode ser separador de brancos)
          for (const pedaco of variante.split("/")) fora.add(normalizar(pedaco));
          fora.add(normalizar(variante.replace(/\//g, " "))); // "/" como espaço
        }
        fora.delete("");
        return fora;
      };
      const minhas = expandir(minha);
      const bate = [...expandir(paraGerundio(dela))].some((v) => minhas.has(v));
      if (!bate) {
        console.log(`U${unidade.n} ${ex.id} item ${n}:`);
        console.log(`   minha: ${minha}`);
        console.log(`   chave: ${dela}`);
        problemas++;
      }
    }
    for (const n of Object.keys(chaveEx)) {
      if (!(n in agrupado)) {
        console.log(`U${unidade.n} ${ex.id} item ${n}: está na chave mas falta na app -> ${chaveEx[n]}`);
        problemas++;
      }
    }
  }
}

const total = UNITS.reduce(
  (acc, u) =>
    acc +
    u.exercises.reduce(
      (a, e) => a + (e.type === "open" ? 0 : e.items.reduce((x, i) => x + (e.type === "blank" ? i.answers.length : 1), 0)),
      0,
    ),
  0,
);
console.log(`\nUnidades: ${UNITS.length} | respostas corrigíveis: ${total} | divergências: ${problemas}`);
