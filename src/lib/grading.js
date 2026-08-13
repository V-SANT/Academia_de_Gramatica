// Correção automática: comparação tolerante (maiúsculas/minúsculas, acentos e
// pontuação não importam) e suporte para respostas com "(não)" opcional ou
// várias formas aceitáveis separadas por "/".

function normalize(str) {
  return str
    .toString()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "") // remove acentos
    .toLowerCase()
    .replace(/[.,!?;:/]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

// Gera as variantes aceitáveis de uma resposta com partes opcionais entre
// parênteses, aceitando-a com e sem essa parte:
//   "Hoje (não) é quarta-feira."  -> "Hoje é quarta-feira." | "Hoje não é quarta-feira."
//   "(Eu) não sei o nome dela."   -> "Eu não sei..."        | "não sei..."
// A chave do livro usa isto tanto para o "(não)" como para os sujeitos que
// podem ficar subentendidos. Havendo vários, expandem-se as combinações todas.
function expandOptionals(answer) {
  const opcional = answer.match(/\(([^)]*)\)/);
  if (!opcional) return [answer];
  const com = answer.replace(opcional[0], opcional[1]);
  const sem = answer.replace(opcional[0], "");
  return [...expandOptionals(com), ...expandOptionals(sem)];
}

// Suporta respostas alternativas separadas por "/", ex.: "sou/és" -> ["sou", "és"]
function expandSlashAlternatives(answer) {
  if (!answer.includes("/")) return [answer];
  return answer.split("/").map((s) => s.trim());
}

function acceptableVariants(answer) {
  return expandOptionals(answer).flatMap(expandSlashAlternatives).map(normalize);
}

// Corrige um item de tipo "blank": userInputs e answers são arrays na mesma ordem
// (um por cada "___" do enunciado).
export function checkBlankItem(answers, userInputs) {
  return answers.map((answer, i) => {
    const variants = acceptableVariants(answer);
    const given = normalize(userInputs[i] || "");
    return given.length > 0 && variants.includes(given);
  });
}

// Corrige um item de tipo "construct": frase inteira escrita pelo aluno.
export function checkConstructItem(answer, userInput) {
  const variants = acceptableVariants(answer);
  const given = normalize(userInput || "");
  return given.length > 0 && variants.includes(given);
}
