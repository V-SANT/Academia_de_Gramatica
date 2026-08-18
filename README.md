# Academia de Gramática — app de prática

App local para praticar os exercícios da cartilha "Gramática Ativa 1" (Lidel),
com teoria e exercícios por unidade, correção automática, e progresso guardado
no navegador (sem servidor, sem base de dados).

Estão transcritas as **50 unidades** do livro. O conteúdo é adaptado ao
**português do Brasil** — gerúndio (`está fazendo`, não `está a fazer`),
ortografia pós-1990 e vocabulário brasileiro. As formas de `tu` e a colocação
do pronome ficam como o livro as ensina.

## Interface

- **Menu lateral** com Início, Unidades e Definições, mais a lista completa dos
  níveis (com cadeado e percentagem em cada um). Em telemóvel abre como gaveta.
- **Cada unidade tem a sua própria página** (`#/unidade/3`), com endereço
  próprio — dá para guardar nos favoritos ou partilhar.
- **Percurso sequencial:** uma unidade só abre quando todas as anteriores
  tiverem pelo menos **80% de respostas certas**. A regra vive em
  `src/lib/progress.js` (`LIMIAR_DESBLOQUEIO`).
- **Interface em português ou espanhol**, à escolha em Definições (e também no
  ecrã de entrada). Traduzem-se os menus, os botões e as **instruções dos
  exercícios**; as frases, as respostas, o banco de palavras e os exemplos de
  gramática ficam sempre em português — é a matéria que se está a estudar.
- **Banco de palavras clicável:** nos exercícios com lista de verbos, clicar
  numa palavra risca-a (e outro clique desrisca-a), para ir marcando as que já
  se usaram. É só apoio visual: não conta para a nota.
- **Correção por exercício ou pela unidade toda** — dá para ir corrigindo aos
  poucos, sem ter de responder a tudo primeiro.
- **As respostas erradas ficam escondidas** atrás de um "ver resposta", para
  dar espaço a tentar outra vez antes de espreitar.
- **Tema claro / escuro / sistema**, escolhido em Definições e guardado no
  navegador. Um script no `index.html` aplica-o antes do primeiro paint para não
  haver "flash" branco.
- **Cores da bandeira do Brasil** — azul `#002776` e amarelo `#FFDF00` como
  cores principais, verde `#009C3B` reservado para "certo/concluído". As escalas
  estão em `src/index.css`, no bloco `@theme` (`azul-*`, `amarelo-*`, `verde-*`,
  `noite-*` para os neutros).

## Como correr localmente

Precisas de [Node.js](https://nodejs.org/) instalado (versão 18 ou mais recente).

```bash
npm install
npm run dev
```

Abre o endereço que aparece no terminal (normalmente `http://localhost:5173`).

## Como funciona o progresso

- Ao entrar, escreves só um **nome de utilizador** — não há palavra-passe nem
  conta real. O progresso é guardado no `localStorage` do navegador, associado
  a esse nome.
- Cada navegador/dispositivo tem o seu próprio progresso. Se quiseres continuar
  noutro dispositivo (ou fazer uma cópia de segurança), usa **"Exportar progresso"**
  para descarregar um ficheiro `.json`, e **"Importar progresso"** no outro
  dispositivo para o restaurar.
- Se limpares os dados de navegação ou usares uma janela anónima, o progresso
  guardado nesse navegador perde-se — por isso convém exportar de vez em quando.
- Vários amigos podem usar o mesmo link/instalação: cada um escolhe o seu
  próprio nome ao entrar e o progresso fica separado, desde que cada um use o
  seu próprio navegador/dispositivo.
- Um perfil pode ser **eliminado** de dois sítios: em Definições (elimina o
  perfil activo e volta ao ecrã de entrada) ou no ecrã de entrada, em
  **"Gerir"**, para limpar perfis antigos. Nos dois casos pede confirmação e
  apaga o progresso e as palavras riscadas desse perfil — os outros perfis do
  navegador não são tocados. Se só quiseres começar de novo mantendo o perfil,
  usa **"Apagar progresso"**.

## Estrutura do projeto

```
src/
  data/units.js      ponto de entrada do conteúdo + formato dos dados e política
                     de adaptação ao português do Brasil (documentados no topo)
  data/unidades/     conteúdo por lotes: u01-05.js, u06-10.js, u11-15.js, u16-20.js, u21-25.js, u26-30.js, u31-35.js, u36-40.js, u41-45.js, u46-50.js
  lib/grading.js     correção (tolerante a acentos/maiúsculas/pontuação)
  lib/storage.js     perfis, progresso, exportar/importar (tudo em localStorage)
  lib/progress.js    percentagem por unidade e regra dos 80% que desbloqueia a seguinte
  lib/router.js      router por hash (#/, #/unidades, #/unidade/:n, #/definicoes)
  lib/theme.js       preferência de tema e classe .dark no <html>
  lib/i18n.js        textos da interface (pt/es) + dicionário das instruções do livro
  pages/             HomePage, UnitsPage, UnitPage, SettingsPage
  components/        Sidebar, UnitCard, ExercisePart, TheoryBlock, Onboarding,
                     ThemeSelector, LanguageSelector, Progresso (barras/anéis),
                     Icon, BrandMark
```

Para traduzir texto novo do livro, acrescenta a frase portuguesa (tal como está
em `units.js`) ao dicionário `CONTEUDO_ES` de `src/lib/i18n.js`. Sem tradução, a
frase fica em português — nunca parte nada.

Para adicionar mais unidades não é preciso tocar nos componentes: o menu, os
cadeados e as percentagens saem todos do conteúdo. O método completo — como
preparar as páginas do livro, como consultar a chave das respostas e como
verificar o resultado — está em [`scripts/README.md`](scripts/README.md), e
[`PROMPT-UNIDADES.md`](PROMPT-UNIDADES.md) traz o prompt de arranque para
continuar a transcrição noutra sessão.

## Publicar / partilhar (mais tarde)

Quando quiseres partilhar com amigos, corre `npm run build` e sobe a pasta
`dist/` para Vercel, Netlify ou similar — é um site estático, não precisa de
nenhuma configuração de servidor.
