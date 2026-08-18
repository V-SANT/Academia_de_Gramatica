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
// frase portuguesa ao dicionário CONTEUDO_ES em src/lib/i18n.js. Não é preciso
// traduzir listas de formas verbais nem frases que se leem igual: sem entrada
// no dicionário, tc() devolve o português.
//
// ADAPTAÇÃO AO PORTUGUÊS DO BRASIL
// O livro é de português europeu; o conteúdo aqui é adaptado ao do Brasil.
// O que se adapta:
//   · gerúndio          "está a fazer" -> "está fazendo"
//   · ortografia de 1990  correcta->correta, acção->ação, vêem->veem,
//                         fim-de-semana->fim de semana, meses e estações em
//                         minúscula (Abril->abril, Inverno->inverno)
//   · vocabulário       autocarro->ônibus, comboio->trem, camioneta->ônibus,
//                       pequeno-almoço->café da manhã, tomar duche->tomar banho,
//                       chapéu de chuva->guarda-chuva, camisola->blusa,
//                       pasta->mochila, sumo->suco, rapariga->garota,
//                       apanhar->pegar, divisões->cômodos, vivenda->casa,
//                       bilhetes->ingressos, ficar mal disposto->passar mal
//   · "ter de" -> "ter que"
// O que NÃO se adapta (decisão do utilizador):
//   · as formas de tu (és, tens, foste…) — o livro ensina-as e ficam
//   · a colocação do pronome — a Unidade 14 ensina a regra europeia (ênclise
//     por omissão); no Brasil a próclise é a norma falada
//   · "ter frio/fome/sede" — são os exemplos que treinam o verbo ter na
//     Unidade 10; em vez de se trocarem, há lá uma secção com o "estar com"
// Quando a chave do livro e a forma adaptada divergirem numa resposta
// corrigível, aceitam-se as duas com "forma A/forma B".

// Com extensão ".js" de propósito: assim este ficheiro também se pode importar
// directamente com `node`, o que permite correr scripts que conferem o
// conteúdo contra a chave dos exercícios sem passar pelo Vite.
import { UNIDADES_01_05 } from "./unidades/u01-05.js";
import { UNIDADES_06_10 } from "./unidades/u06-10.js";
import { UNIDADES_11_15 } from "./unidades/u11-15.js";
import { UNIDADES_16_20 } from "./unidades/u16-20.js";
import { UNIDADES_21_25 } from "./unidades/u21-25.js";
import { UNIDADES_26_30 } from "./unidades/u26-30.js";
import { UNIDADES_31_35 } from "./unidades/u31-35.js";
import { UNIDADES_36_40 } from "./unidades/u36-40.js";
import { UNIDADES_41_45 } from "./unidades/u41-45.js";

export const UNITS = [...UNIDADES_01_05, ...UNIDADES_06_10, ...UNIDADES_11_15, ...UNIDADES_16_20, ...UNIDADES_21_25, ...UNIDADES_26_30, ...UNIDADES_31_35, ...UNIDADES_36_40, ...UNIDADES_41_45];
