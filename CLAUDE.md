# Academia de Gramática

App para estudar português a partir da cartilha "Gramática Ativa 1" (Lidel).
React 19 + Vite + Tailwind v4. Sem backend: perfis e progresso vivem no
localStorage. O `dist/` é um site estático.

**Estado:** 35 das 50 unidades transcritas (`src/data/unidades/u01-05.js`,
`u06-10.js`, `u11-15.js`, `u16-20.js`, `u21-25.js`, `u26-30.js`, `u31-35.js`).

## O utilizador trata dos commits e do deploy

Não faças `git commit`, `git push` nem configures git. Deixa as alterações no
working tree e diz o que mexeste. Verificar com lint, build e browser continua
a ser tarefa minha.

## Comandos

```bash
npm run dev                                        # servidor de desenvolvimento
npm run lint && npm run build                      # têm de ficar limpos
node scripts/verificar-chave.mjs fontes/chave.txt  # 0 divergências
node scripts/verificar-traducoes.mjs               # 0 chaves órfãs
```

Os dois verificadores precisam de `fontes/`, que se gera com
`python scripts/preparar-fontes.py "<pasta-das-fontes>" fontes` e está no
`.gitignore`.

## Acrescentar unidades

Todo o método está em **`scripts/README.md`** e o prompt de arranque para uma
sessão nova em **`PROMPT-UNIDADES.md`**. O essencial:

- Os PDF do livro são digitalizações JBIG2 sem camada de texto. Só o PDFium as
  decodifica; as páginas lêem-se como **imagem**. Não percas tempo com
  `pdftotext` ou `pdfplumber`.
- Unidade U → `fontes/paginas/pdf{2U+3}.png` (teoria), `pdf{2U+4}.png`
  (exercícios).
- Respostas: `python scripts/ver-chave.py fontes/chave.txt <n>`. Na chave o
  item 1 costuma ser o exemplo já resolvido; saltos na numeração são outros
  exemplos, não lacunas.
- Um lote de cinco unidades por ficheiro, reexportado por `src/data/units.js`.
  Os imports aí levam extensão `.js` de propósito, para os verificadores
  poderem carregar os dados com `node`.
- Escreve cada unidade em disco antes de passar à seguinte.

O formato dos dados está documentado na cabeça de **`src/data/units.js`**, com
a política de adaptação ao português do Brasil.

## Decisões que não se adivinham pelo código

- **Adapta-se ao português do Brasil**: gerúndio em vez de "estar a +
  infinitivo", ortografia pós-1990 e vocabulário brasileiro. A tabela está em
  `scripts/adaptacao-br.json`; palavras novas acrescentam-se lá, não à mão, para
  o verificador continuar a saber comparar com a chave europeia.
- **Não se adaptam** as formas de `tu` nem a colocação do pronome: o livro
  ensina-as e o utilizador quis mantê-las. A Unidade 10 mantém "ter frio/fome"
  (é o que treina o verbo `ter`) e tem uma secção à parte com o "estar com".
- **Quando o livro digitalizado e a chave divergirem** numa resposta corrigível,
  aceitam-se as duas com `"forma A/forma B"` e deixa-se um comentário a
  explicar. Já aconteceu no exercício 10.3.
- **Paleta da bandeira do Brasil**: azul `#002776` e amarelo `#FFDF00` como
  principais, verde `#009C3B` só para "certo/concluído". Escalas no bloco
  `@theme` de `src/index.css`.
- **Percurso sequencial**: uma unidade abre com 80% de respostas certas na
  anterior (`LIMIAR_DESBLOQUEIO` em `src/lib/progress.js`).
- **Corrige-se por exercício ou pela unidade toda**, e as respostas erradas
  ficam escondidas atrás de um "ver resposta".

## Armadilhas

- **`src/lib/i18n.js` nunca leva substituir global.** As chaves de
  `CONTEUDO_ES` são as frases portuguesas e os valores espanhóis usam
  "correcta", que em espanhol está certo. Mexer no texto português das unidades
  deixa chaves órfãs — `verificar-traducoes.mjs` mostra-as.
- **Não traduzas listas de formas verbais nem de pronomes.** Sem entrada no
  dicionário, `tc()` devolve o português, que é o que se quer: é a matéria de
  estudo.
- **O caminho do projecto tem um "Ê"** que se estraga ao passar pela linha de
  comandos. Nos scripts em Python entra na pasta e usa caminhos **relativos**;
  nunca metas o caminho absoluto num literal.
- **Exercícios sem resposta única** usam `type: "open"`: só mostram o enunciado
  e não contam para a percentagem.
