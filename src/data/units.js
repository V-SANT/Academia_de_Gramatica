// Conteúdo da "Gramática Ativa 1" (Lidel) — 50 unidades.
// Teoria e enunciados transcritos das páginas escaneadas do livro.
// Respostas conferidas contra a Chave dos Exercícios (páginas 110-129).
//
// O conteúdo está dividido por lotes em ./unidades/, só para os ficheiros não
// ficarem enormes. Este ficheiro é o ponto de entrada: os componentes importam
// sempre UNITS daqui.
//
// Estrutura de cada unidade:
//   theory.intro     -> frases de exemplo introdutórias
//   theory.table     -> tabela de conjugação (verbo + linhas [pronome, forma, forma-negativa?])
//   theory.sections  -> blocos de exemplos de uso, cada um com heading/note opcionais
//
//   exercises[].type === "blank"     -> frase com um ou mais "___", answers[] = uma resposta por "___"
//   exercises[].type === "construct" -> o aluno escreve a frase toda a partir de uma pista (cue)
//   exercises[].type === "open"      -> não tem resposta fixa (é pessoal); não se corrige automaticamente
//
// Para traduzir instruções/notas/etiquetas novas para espanhol, acrescenta a
// frase portuguesa ao dicionário CONTEUDO_ES em src/lib/i18n.js.

// Com extensão ".js" de propósito: assim este ficheiro também se pode importar
// directamente com `node`, o que permite correr scripts que conferem o
// conteúdo contra a chave dos exercícios sem passar pelo Vite.
import { UNIDADES_01_05 } from "./unidades/u01-05.js";
import { UNIDADES_06_10 } from "./unidades/u06-10.js";
import { UNIDADES_11_15 } from "./unidades/u11-15.js";

export const UNITS = [...UNIDADES_01_05, ...UNIDADES_06_10, ...UNIDADES_11_15];
