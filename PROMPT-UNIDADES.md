# Prompt para transcrever as unidades que faltam

Copia tudo o que está abaixo da linha para um chat novo, ajustando o intervalo
de unidades que queres nessa sessão.

---

Estou a construir uma app para estudar português com os exercícios da cartilha
"Gramática Ativa 1" (Lidel). As Unidades 1 a 30 já estão feitas e verificadas.
Preciso que transcrevas as **Unidades 31 a 35** seguindo exactamente o mesmo
método. Não faças commits nem deploy — disso trato eu.

O projecto está em `C:\Users\Valentin Santander\Desktop\PORTUGUÊS\Academia_de_Gramatica`.
É React 19 + Vite + Tailwind v4, sem backend: o progresso guarda-se em
localStorage. `npm run lint` e `npm run build` têm de ficar limpos.

## Antes de começar, lê estes dois ficheiros

1. **`scripts/README.md`** — o pipeline completo: como preparar as fontes, como
   descobrir que página corresponde a que unidade, como ver a chave das
   respostas e como verificar o resultado.
2. **A cabeça de `src/data/units.js`** — o formato dos dados e a política de
   adaptação ao português do Brasil (o que se adapta e o que fica de propósito).

E abre `src/data/unidades/u26-30.js` para veres o estilo à letra. Segue-o.

## Ponto de partida

```bash
pip install pypdfium2 python-docx
python scripts/preparar-fontes.py "C:/Users/Valentin Santander/Downloads" fontes
```

Isto rende as 108 páginas do livro para PNG e extrai a chave para texto. Os PDF
são digitalizações em JBIG2 sem camada de texto — nenhuma biblioteca de
extracção devolve nada, só o PDFium as decodifica, por isso as páginas lêem-se
como **imagem**. Não tentes `pdftotext` nem `pdfplumber`, perdes tempo.

A unidade **U** está em `fontes/paginas/pdf{2U+3}.png` (teoria) e
`pdf{2U+4}.png` (exercícios). Unidade 31 → `pdf065.png` e `pdf066.png`.

## Como transcrever cada unidade

Uma de cada vez, e nesta ordem:

1. Lê a página da teoria e a dos exercícios com a ferramenta de leitura de
   ficheiros (as imagens vêem-se).
2. `python scripts/ver-chave.py fontes/chave.txt 31` para as respostas.
3. Escreve a unidade no ficheiro do lote e liga-a em `src/data/units.js`.
4. Só depois passa à seguinte.

Escreve cada unidade em disco **antes** de passar à próxima, para o trabalho
não se perder se a conversa se cortar. Junta-as em lotes de cinco:
`src/data/unidades/u31-35.js`, que exporta `UNIDADES_31_35` e é reexportado por
`src/data/units.js`. Repara que os imports em `units.js` levam extensão `.js` de
propósito, para os scripts de verificação poderem carregar os dados com `node`.

## Regras de transcrição que vais precisar

**Numeração.** Na chave, o item 1 costuma ser o exemplo já resolvido no
enunciado do livro e por isso não aparece; saltos na numeração (10 → 12) são
outros exemplos dentro do exercício. Mantém a numeração do livro — não
renumeres. Se o livro resolveu o item 1 como exemplo, começa em 2.

**Barras na chave.** Um "/" na chave tanto pode ser *alternativas para o mesmo
espaço* ("oiço/ouço") como *respostas para espaços seguidos* ("veio/trouxe",
quando a frase tem dois brancos). Decide olhando para quantos "___" tem o
enunciado na digitalização. No primeiro caso é uma resposta com "/" lá dentro;
no segundo são duas entradas no array `answers`.

**Partes opcionais.** A chave escreve "(Eu) não sei o nome dela" quando o
sujeito é dispensável. Guarda-o tal e qual: o corrector aceita todas as
combinações com e sem cada parte entre parênteses.

**Duas formas aceitáveis.** Quando a forma adaptada ao Brasil e a da chave
divergirem numa resposta corrigível, aceita as duas com `"forma A/forma B"`.

**Tabelas de vários verbos.** O modelo só tem `theory.table` para um verbo. Se a
unidade trouxer uma tabela com vários em paralelo, mete-a numa secção com uma
linha por verbo: `"ver — vejo, vês, vê, vemos, veem"`. Não mudes o componente.

**Exercícios de redacção livre.** Se não houver resposta única, usa
`type: "open"` e põe a sugestão do livro na `note` do exercício. Os itens
`open` só mostram o enunciado e não contam para a percentagem.

**Respostas em frase dentro de exercícios com vários brancos.** Se um item
pedir três frases completas (como o 9.1), parte-o em itens `construct` com
sufixo — `n: "2a"`, `"2b"`, `"2c"`. O verificador reagrupa-os pelo número base
para os comparar com a linha única da chave.

**Adaptação ao Brasil.** Escreve já adaptado enquanto transcreves (gerúndio em
vez de "estar a + infinitivo", ortografia pós-1990, vocabulário brasileiro).
No fim corre `python scripts/adaptar-br.py` para apanhar o que escapou. Se
encontrares uma palavra europeia que ainda não esteja em
`scripts/adaptacao-br.json`, acrescenta-a lá em vez de a trocares só à mão —
assim o verificador continua a saber comparar com a chave europeia.

Não adaptes as formas de `tu` nem a colocação do pronome: foi decisão do
utilizador mantê-las como o livro as ensina.

**Traduções.** Cada enunciado, nota, título de secção, etiqueta, título e
subtítulo novo precisa de entrada no dicionário `CONTEUDO_ES` em
`src/lib/i18n.js`. Não traduzas listas de formas verbais nem de pronomes nem
frases que se leem igual em espanhol — sem entrada, `tc()` devolve o português,
que é o que se quer nesses casos. Cuidado ao mexer em `i18n.js`: as chaves são
as frases portuguesas e os valores espanhóis usam "correcta", que em espanhol
está certo. Nunca faças substituir global nesse ficheiro.

## Verificação — não dês nada por feito sem isto

```bash
node scripts/verificar-chave.mjs fontes/chave.txt   # tem de dar 0 divergências
node scripts/verificar-traducoes.mjs                # 0 chaves órfãs
npm run lint && npm run build
```

Se `verificar-chave` acusar divergências, olha uma a uma: umas serão erros meus
de transcrição, outras erratas do próprio material. Quando for errata do
material (já apareceu uma na 10.3), aceita as duas formas e deixa um comentário
no código a dizer porquê — e diz-me.

Confirma também no browser que a unidade nova abre e mostra teoria e
exercícios. Para desbloquear tudo sem responder a nada, semeia o progresso no
localStorage (as respostas certas ficam limitadas ao total da unidade, por isso
semear a mais dá 100%):

```js
const muitas = Array.from({ length: 400 }, () => true);
const units = {};
for (let n = 1; n <= 35; n++) units[n] = { seed: { results: { 1: muitas }, answers: {} } };
localStorage.setItem('ga_profiles', JSON.stringify(['Teste']));
localStorage.setItem('ga_current_user', 'Teste');
localStorage.setItem('ga_progress_Teste', JSON.stringify({ createdAt: new Date().toISOString(), units }));
```

Limpa as chaves `ga_*` quando acabares.

## Notas de ambiente

O caminho do projecto tem um "Ê" que se estraga ao passar pela linha de
comandos. Nos scripts em Python usa sempre caminhos **relativos** depois de
entrar na pasta do projecto — nunca metas o caminho absoluto num literal.

## O que quero no fim

As Unidades 31 a 35 transcritas, ligadas, verificadas contra a chave com zero
divergências, traduzidas e com lint e build limpos. Diz-me que decisões de
modelação tiveste de tomar e se encontraste alguma discrepância entre o livro
digitalizado e a chave.
