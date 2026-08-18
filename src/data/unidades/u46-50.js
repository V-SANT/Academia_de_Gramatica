// Unidades 46-50 da "Gramática Ativa 1" (Lidel).
// O formato de cada unidade está documentado em ../units.js.

export const UNIDADES_46_50 = [
  {
    n: 46,
    title: "relativos",
    subtitle: "que, quem, onde, o qual, cujo",
    theory: {
      intro: [
        "As pessoas que conhecemos na festa eram muito simpáticas.",
        "O professor com quem estivemos falando vai na excursão.",
        "O restaurante onde fomos era ótimo.",
      ],
      table: null,
      sections: [
        {
          heading: "Relativos invariáveis",
          examples: [
            "pessoas e/ou coisas — que",
            "pessoas — quem",
            "lugares — onde",
          ],
          note: "Os relativos referem-se a pessoas, coisas ou lugares que os antecedem. Quem vem geralmente precedido de preposição; onde exprime uma circunstância de lugar.",
        },
        {
          heading: "que",
          examples: [
            "As pessoas eram muito simpáticas. Conhecemo-las na festa. → As pessoas que conhecemos na festa eram muito simpáticas.",
            "Encontrei uma amiga. Não a via há muito tempo. → Encontrei uma amiga que não via há muito tempo.",
            "O filme ganhou 4 óscares. Vamos vê-lo hoje. → O filme que vamos ver hoje ganhou 4 óscares.",
            "Viste a mala? A mala estava em cima da cadeira. → Viste a mala que estava em cima da cadeira?",
          ],
        },
        {
          heading: "quem · onde",
          examples: [
            "O professor vai na excursão. Estivemos a falar com ele. → O professor com quem estivemos falando vai na excursão.",
            "O restaurante era ótimo. Nós fomos lá. → O restaurante onde fomos era ótimo.",
          ],
        },
        {
          heading: "Relativos variáveis",
          examples: [
            "o qual, a qual — os quais, as quais",
            "cujo, cuja — cujos, cujas",
          ],
          note: "O/a qual e os/as quais concordam em gênero e número com o antecedente e usam-se geralmente precedidos de preposição. Cujo(s), cuja(s) indicam posse e concordam com o substantivo que precedem.",
        },
        {
          heading: "o qual… · cujo…",
          examples: [
            "O teste correu-me bem. Estudei muito para o teste. → O teste para o qual estudei muito correu-me bem.",
            "Os amigos chegam amanhã. Falei-te deles. → Os amigos dos quais te falei chegam amanhã.",
            "Fomos a um restaurante. O dono do restaurante é um amigo nosso. → Fomos a um restaurante cujo dono é um amigo nosso.",
            "O meu avô vive sozinho. A mulher dele morreu há um ano. → O meu avô, cuja mulher morreu há um ano, vive sozinho.",
          ],
        },
      ],
    },
    exercises: [
      {
        id: "46.1",
        instructions: "Complete com que, quem ou onde.",
        note: "O exemplo do livro é: Gosto muito da casa onde moro.",
        type: "blank",
        items: [
          { n: 2, prompt: "O João é um amigo ___ já me ajudou muito.", answers: ["que"] },
          { n: 3, prompt: "O rapaz de ___ te falei vem cá hoje.", answers: ["quem"] },
          { n: 4, prompt: "Os livros ___ tu precisas estão todos na biblioteca.", answers: ["que"] },
          { n: 5, prompt: "O hotel ___ ficámos era ótimo.", answers: ["onde"] },
          { n: 6, prompt: "Os sapatos ___ comprei não são confortáveis.", answers: ["que"] },
          { n: 7, prompt: "Ela não recebeu a carta ___ eu lhe escrevi.", answers: ["que"] },
          { n: 8, prompt: "Já viste as fotografias ___ a Ana tirou?", answers: ["que"] },
          { n: 9, prompt: "O professor com ___ tivemos aulas vai-se embora.", answers: ["quem"] },
          { n: 10, prompt: "Lisboa é a cidade ___ se vai realizar a Expo 98.", answers: ["onde"] },
        ],
      },
      {
        id: "46.2",
        instructions: "Substitua o relativo invariável pela forma variável correspondente.",
        note: "Escreve só o relativo novo. O exemplo do livro é: O ônibus em que viajámos tinha ar condicionado. → O ônibus no qual viajámos…",
        type: "blank",
        items: [
          {
            n: 2,
            prompt: "O vizinho ___ me dou muito bem vai mudar de casa. (com quem)",
            answers: ["com o qual"],
          },
          {
            n: 3,
            prompt: "A reunião ___ fomos convocados foi adiada. (para que)",
            answers: ["para a qual"],
          },
          {
            n: 4,
            prompt: "O campeonato ___ eles participam começou ontem. (em que)",
            answers: ["no qual"],
          },
          {
            n: 5,
            prompt: "Os jogadores ___ todos falam deixaram o clube. (de que)",
            answers: ["dos quais"],
          },
          {
            n: 6,
            prompt: "O concerto ___ assistimos acabou muito tarde. (a que)",
            answers: ["ao qual"],
          },
        ],
      },
      {
        id: "46.3",
        instructions: "Substitua a parte destacada pelo relativo cujo(s), cuja(s).",
        note: "Escreve só a parte que muda. O exemplo do livro é: A garota de olhos azuis é a irmã da Ana. → A garota, cujos olhos são azuis, é a irmã da Ana.",
        type: "blank",
        items: [
          {
            n: 2,
            prompt: "O quarto, ___, é o mais bonito. (com as paredes cor-de-rosa)",
            answers: ["cujas paredes são cor-de-rosa"],
          },
          {
            n: 3,
            prompt: "Os alunos, ___, ganharam uma bolsa de estudo. (com os melhores resultados)",
            answers: ["cujos resultados foram os melhores"],
          },
          {
            n: 4,
            prompt: "Os futebolistas, ___, são da equipe adversária. (com a camisa às riscas)",
            answers: ["cuja camisa é às riscas"],
          },
          {
            n: 5,
            prompt: "O dicionário, ___, é o de português. (de capa vermelha)",
            answers: ["cuja capa é vermelha"],
          },
          {
            n: 6,
            prompt: "O homem, ___, é o meu professor. (de casaco preto)",
            answers: ["cujo casaco é preto"],
          },
        ],
      },
      {
        id: "46.4",
        instructions: "Ligue as duas frases com um relativo.",
        note: "O exemplo do livro é: Os produtos são para exportação. Os produtos são feitos nesta fábrica. → Os produtos que são feitos nesta fábrica são para exportação.",
        type: "construct",
        items: [
          {
            n: 2,
            cue: "Lisboa é uma cidade em festa na noite de 12 para 13 de junho. O seu padroeiro é o Santo António.",
            answer:
              "Lisboa, cujo padroeiro é o Santo António, é uma cidade em festa na noite de 12 para 13 de junho.",
          },
          {
            n: 3,
            cue: "O empregado era muito simpático. Nós falámos com ele.",
            answer: "O empregado com quem falámos era muito simpático.",
          },
          {
            n: 4,
            cue: "Passei no exame. Estudei muito para o exame.",
            answer: "Passei no exame para o qual estudei muito.",
          },
          {
            n: 5,
            cue: "Qual é o nome do hotel? Nós ficámos no hotel.",
            answer: "Qual é o nome do hotel onde nós ficámos?",
          },
          {
            n: 6,
            cue: "A senhora ainda está no estrangeiro. Aluguei a casa à senhora.",
            answer: "A senhora, a quem aluguei a casa, ainda está no estrangeiro.",
          },
          {
            n: 7,
            cue: "A história era mentira. Eles contaram a história.",
            answer: "A história que eles contaram era mentira.",
          },
          {
            n: 8,
            cue: "Isso é uma afirmação. Eu não concordo com ela.",
            answer: "Isso é uma afirmação, com a qual (eu) não concordo.",
          },
          {
            n: 9,
            cue: "Viste o dinheiro? O dinheiro estava em cima da mesa.",
            answer: "Viste o dinheiro que estava em cima da mesa?",
          },
          {
            n: 10,
            cue: "O médico era muito competente. Ele atendeu-me.",
            answer: "O médico que me atendeu era muito competente.",
          },
        ],
      },
    ],
  },
  {
    n: 47,
    title: "poder, conseguir, saber, conhecer",
    subtitle: "dever, ter de/que e precisar de",
    theory: {
      intro: [
        "— Posso entrar? — Pode, pode.",
        "Sem óculos não consigo ver nada.",
        "A minha mãe sabe falar russo.",
      ],
      table: null,
      sections: [
        {
          heading: "poder",
          examples: [
            {
              text: "Ele tem tido muito trabalho. Só agora é que pode tirar férias. Hoje não posso ir com vocês.",
              tag: "possibilidade / oportunidade",
            },
            {
              text: "Não se pode fumar nos transportes públicos. O senhor não pode estacionar aqui o carro.",
              tag: "proibição (negativa)",
            },
            { text: "— Posso entrar? — Pode, pode.", tag: "pedir / dar autorização" },
          ],
        },
        {
          heading: "conseguir",
          examples: [
            {
              text: "Ele não consegue estudar com barulho. — Consegues ver alguma coisa? — Não. Sem óculos não consigo ver nada.",
              tag: "capacidade física / mental",
            },
          ],
        },
        {
          heading: "saber · conhecer",
          examples: [
            {
              text: "— Sabes trabalhar com esta máquina? — Não, não sei. A minha mãe sabe falar russo.",
              tag: "ter conhecimentos para",
            },
            {
              text: "— Conheces o irmão da Ana? — Conheço, foi meu colega na escola. Ainda não conheço a tua casa nova.",
              tag: "já ter visto / já ter ido",
            },
          ],
        },
        {
          heading: "dever",
          examples: [
            {
              text: "É meia-noite. A estas horas não deve estar ninguém no escritório.",
              tag: "probabilidade",
            },
            {
              text: "Um jornalista deve ter cultura geral. Não devias fumar. Faz mal à saúde.",
              tag: "obrigação moral (o que está certo)",
            },
          ],
        },
        {
          heading: "ter de / que · precisar de",
          examples: [
            { text: "Tenho que tomar o antibiótico 3 vezes por dia.", tag: "forte necessidade" },
            { text: "Em Portugal os homens têm que fazer o serviço militar.", tag: "obrigação" },
            {
              text: "Vou ao banco. Preciso de levantar dinheiro. Vou às compras. A minha mãe precisa de ovos, açúcar e manteiga para fazer um bolo.",
              tag: "necessidade",
            },
          ],
        },
      ],
    },
    exercises: [
      {
        id: "47.1",
        instructions: "Complete com poder, conseguir, saber ou conhecer na forma correta.",
        note: "O exemplo do livro é: Podia dizer-me as horas, por favor?",
        type: "blank",
        items: [
          { n: 2, prompt: "Não ___ tocar piano. Nunca aprendi.", answers: ["sei"] },
          { n: 3, prompt: "A Ana não ___ sair. Tem exame amanhã.", answers: ["pode"] },
          { n: 4, prompt: "___ fazer um telefonema?", answers: ["Posso"] },
          { n: 5, prompt: "Não ___ abrir a janela. Ajudas-me?", answers: ["consigo"] },
          { n: 6, prompt: "— ___ nadar? — ___, mas não muito bem.", answers: ["Sabes", "Sei"] },
          { n: 7, prompt: "Estava cansadíssimo, mas não ___ dormir.", answers: ["consegui"] },
          { n: 8, prompt: "— ___ o Porto? — Não, não ___.", answers: ["Conheces", "conheço"] },
          { n: 9, prompt: "Ele não ___ ir à festa no sábado. Estava doente.", answers: ["pôde"] },
          {
            n: 10,
            prompt: "Não ___ ver nada. Está muita gente à minha frente.",
            answers: ["consigo"],
          },
          {
            n: 11,
            prompt: "Não ___ falar espanhol, mas ___ perceber quase tudo.",
            answers: ["sei", "consigo"],
          },
          { n: 12, prompt: "— ___ os meus pais? — Muito prazer. Como estão?", answers: ["Conhece/Conheces"] },
          { n: 13, prompt: "Esse rio é perigoso. Não se ___ tomar banho.", answers: ["pode"] },
          {
            n: 14,
            prompt: "Ela falou tão depressa que nós não ___ compreender nada.",
            answers: ["conseguimos"],
          },
          {
            n: 15,
            prompt: "___ o Algarve muito bem. Vivi em Faro durante 10 anos.",
            answers: ["Conheço"],
          },
        ],
      },
      {
        id: "47.2",
        instructions: "Complete com precisar de na forma correta.",
        note: "No livro já vêm resolvidos o item 1 (Estás a ficar muito gorda. (fazer ginástica) → Precisas de fazer ginástica.) e o 2 (A roupa está suja. (lavar) → Precisa de ser lavada.).",
        type: "construct",
        items: [
          {
            n: 3,
            cue: "Os elevadores não funcionam. (arranjar)",
            answer: "Precisam de ser arranjados.",
          },
          { n: 4, cue: "Não tenho nada em casa. (ir às compras)", answer: "Preciso de ir às compras." },
          {
            n: 5,
            cue: "Ele tem o cabelo muito comprido. (cortar o cabelo)",
            answer: "Precisa de cortar o cabelo.",
          },
        ],
      },
      {
        id: "47.3A",
        instructions: "Complete com dever na forma correta — probabilidade.",
        note: "O exemplo do livro é: — Sabes se a Ana está em casa? — (provavelmente está) Deve estar.",
        type: "construct",
        items: [
          {
            n: 2,
            cue: "— De quem é este dicionário de português? — (provavelmente é da Mary)",
            answer: "Deve ser da Mary.",
          },
          {
            n: 3,
            cue: "— Ninguém atende o telefone. — (provavelmente estão de férias)",
            answer: "Devem estar de férias.",
          },
          {
            n: 4,
            cue: "— Estou com febre. — (provavelmente estás com gripe)",
            answer: "Deves estar com gripe.",
          },
          {
            n: 5,
            cue: "— Ainda não foste ver esse filme? — (provavelmente vou amanhã)",
            answer: "Devo ir ver amanhã.",
          },
          {
            n: 6,
            cue: "— Houve um acidente na autoestrada. — (provavelmente ele chega atrasado)",
            answer: "Ele deve chegar atrasado.",
          },
        ],
      },
      {
        id: "47.3B",
        instructions: "Complete com dever na forma correta — conselho.",
        note: "O exemplo do livro é: Estás muito gordo. Devias comer menos.",
        type: "blank",
        items: [
          { n: 2, prompt: "Vocês não ___ fumar. Faz mal à saúde.", answers: ["deviam"] },
          { n: 3, prompt: "Se não te sentes bem ___ ir ao médico.", answers: ["devias"] },
          {
            n: 4,
            prompt: "Eles convidaram-nos para a festa. ___ telefonar a agradecer.",
            answers: ["Devíamos"],
          },
          { n: 5, prompt: "___ sair agora, senão chegas atrasado.", answers: ["Devias"] },
          {
            n: 6,
            prompt: "O filme é muito violento. Acho que tu não o ___ ver.",
            answers: ["devias"],
          },
        ],
      },
      {
        id: "47.4",
        instructions: "Complete com ter de / que na forma correta.",
        note: "Qualquer destas respostas pode ter como alternativa ter que na forma correta. O exemplo do livro é: Temos de ganhar o jogo hoje. É a nossa última oportunidade.",
        type: "blank",
        items: [
          {
            n: 2,
            prompt: "O banco está quase a fechar. (Eu) ___. (sair já)",
            answers: ["Tenho que sair já/Tenho que sair já"],
          },
          {
            n: 3,
            prompt: "Eles compraram o andar. Mas, para isso, ___ pedir um empréstimo.",
            answers: ["tiveram de/tiveram que"],
          },
          { n: 4, prompt: "O filme é ótimo. (Vocês) ___ vê-lo.", answers: ["Têm de/Têm que"] },
          {
            n: 5,
            prompt: "Se queres passar no exame, ___ estudar mais.",
            answers: ["tens de/tens que"],
          },
          { n: 6, prompt: "Ainda fico a trabalhar. ___ acabar estas cartas.", answers: ["Tenho que/Tenho que"] },
        ],
      },
    ],
  },
  {
    n: 48,
    title: "gerúndio simples; ir + gerúndio",
    subtitle: "realização gradual",
    theory: {
      intro: ["Vão descendo que eu já vou.", "Indo de táxi é mais rápido."],
      table: {
        verb: "ir + gerúndio — andando / escrevendo / fazendo",
        rows: [
          ["eu", "vou"],
          ["tu", "vais"],
          ["você / ele / ela", "vai"],
          ["nós", "vamos"],
          ["vocês / eles / elas", "vão"],
        ],
      },
      sections: [
        {
          heading: "Gerúndio simples",
          examples: ["-ar falar — falando", "-er comer — comendo", "-ir abrir — abrindo"],
        },
        {
          heading: "Usamos o gerúndio para:",
          examples: [
            {
              text: "Assaltaram a casa e levaram todos os valores. → Assaltaram a casa, levando todos os valores.",
              tag: "substituir uma oração coordenada",
            },
            {
              text: "Quando viu o carro, parou. → Vendo o carro, parou.",
              tag: "exprimir uma circunstância de tempo",
            },
            {
              text: "Ela ouvia com lágrimas nos olhos o relato do acidente. → Ela ouvia, chorando, o relato do acidente.",
              tag: "indicar o modo",
            },
          ],
        },
        {
          heading: "Realização gradual — ir + gerúndio",
          examples: [
            "Vão andando que nós estamos quase prontos.",
            "Vai chamando o táxi que eu já desço.",
            "Enquanto a mãe faz o almoço, a Ana vai pondo a mesa.",
            "Enquanto o professor não chega, os alunos vão lendo o texto.",
          ],
        },
      ],
    },
    exercises: [
      {
        id: "48.1",
        instructions: "Complete as frases substituindo a parte destacada pelo gerúndio.",
        note: "O exemplo do livro é: Quando chego a casa, abro logo a televisão. → Chegando a casa, abro logo a televisão.",
        type: "blank",
        items: [
          {
            n: 2,
            prompt: "Junte o açúcar com a manteiga, ___. (e misture bem)",
            answers: ["misturando bem"],
          },
          {
            n: 3,
            prompt: "As crianças entraram na escola, ___. (a cantar e a rir)",
            answers: ["cantando e rindo"],
          },
          {
            n: 4,
            prompt: "Ela ganha a vida ___. (a fazer comida para fora)",
            answers: ["fazendo comida para fora"],
          },
          {
            n: 5,
            prompt: "A mãe ouvia ___ as histórias do filho. (com um sorriso)",
            answers: ["sorrindo"],
          },
          {
            n: 6,
            prompt: "___, fico com dores de cabeça. (Quando durmo pouco)",
            answers: ["Dormindo pouco"],
          },
        ],
      },
      {
        id: "48.2",
        instructions: "Responda às perguntas com o gerúndio.",
        note: "O exemplo do livro é: — Como é que os ladrões entraram? — Partindo (partir) o vidro.",
        type: "blank",
        items: [
          { n: 2, prompt: "— Como é que a mancha sai? — ___ (esfregar) com força.", answers: ["Esfregando"] },
          {
            n: 3,
            prompt: "— Como é que se demora menos tempo? — ___ (ir) pela autoestrada.",
            answers: ["Indo"],
          },
          {
            n: 4,
            prompt: "— Como é que se liga a máquina? — ___ (carregar) no botão.",
            answers: ["Carregando"],
          },
          {
            n: 5,
            prompt: "— Como é que ele passou no exame? — ___ (copiar) pelo colega.",
            answers: ["Copiando"],
          },
          {
            n: 6,
            prompt: "— Como é que partiste o braço? — ___ (cair) da escada.",
            answers: ["Caindo"],
          },
          {
            n: 7,
            prompt: "— Como é que conseguiste o emprego? — ___ (falar) com o diretor.",
            answers: ["Falando"],
          },
          {
            n: 8,
            prompt: "— Como é que arranjaram o dinheiro? — ___ (pedir) um empréstimo ao banco.",
            answers: ["Pedindo"],
          },
          {
            n: 9,
            prompt: "— Como é que resolveste o problema? — ___ (comprar) um segundo carro.",
            answers: ["Comprando"],
          },
          {
            n: 10,
            prompt: "— Como é que vocês ganharam o campeonato? — ___ (trabalhar) muito.",
            answers: ["Trabalhando"],
          },
        ],
      },
      {
        id: "48.3a",
        instructions: "Complete com ir + gerúndio: enquanto o professor não chega, os alunos…",
        note: "O exemplo do livro é: vão lendo o texto (ler o texto).",
        type: "blank",
        items: [
          { n: 2, prompt: "___ a composição. (escrever)", answers: ["vão escrevendo"] },
          { n: 3, prompt: "___ os exercícios. (fazer)", answers: ["vão fazendo"] },
          { n: 4, prompt: "___ a cassete. (ouvir)", answers: ["vão ouvindo"] },
          { n: 5, prompt: "___ a gramática. (estudar)", answers: ["vão estudando"] },
          { n: 6, prompt: "___ a lição. (preparar)", answers: ["vão preparando"] },
        ],
      },
      {
        id: "48.3b",
        instructions: "Complete com ir + gerúndio: enquanto a D. Rita vai às compras, a empregada…",
        note: "O exemplo do livro é: vai fazendo as camas (fazer as camas).",
        type: "blank",
        items: [
          { n: 2, prompt: "___ os quartos. (arrumar)", answers: ["vai arrumando"] },
          { n: 3, prompt: "___ o pó. (limpar)", answers: ["vai limpando"] },
          { n: 4, prompt: "___ a roupa. (estender)", answers: ["vai estendendo"] },
          { n: 5, prompt: "___ o almoço. (preparar)", answers: ["vai preparando"] },
          { n: 6, prompt: "___ a mesa. (pôr)", answers: ["vai pondo"] },
        ],
      },
      {
        id: "48.3c",
        instructions: "Complete com ir + gerúndio: enquanto o senhor doutor está na reunião, eu…",
        note: "O exemplo do livro é: vou telefonando aos clientes (telefonar aos clientes).",
        type: "blank",
        items: [
          { n: 2, prompt: "___ os relatórios. (fazer)", answers: ["vou fazendo"] },
          { n: 3, prompt: "___ a carta. (traduzir)", answers: ["vou traduzindo"] },
          { n: 4, prompt: "___ os processos. (arquivar)", answers: ["vou arquivando"] },
          { n: 5, prompt: "___ fotocópias. (tirar)", answers: ["vou tirando"] },
          { n: 6, prompt: "___ os impressos. (preencher)", answers: ["vou preenchendo"] },
        ],
      },
    ],
  },
  {
    n: 49,
    title: "desde e há",
    subtitle: "expressões de tempo",
    theory: {
      intro: [
        "Hoje é sexta. Não vejo o João e a Ana desde segunda.",
        "Não os vejo há cinco dias.",
      ],
      table: null,
      sections: [
        {
          heading: "desde — o começo de um período de tempo",
          examples: [
            "desde segunda · desde ontem · desde as 10 horas",
            "desde o dia 20 de julho · desde março · desde 1990",
          ],
        },
        {
          heading: "há — o período de tempo",
          examples: [
            "há um dia · há cinco dias · há uma hora",
            "há uma semana · há dois meses · há três anos",
          ],
        },
        {
          heading: "Compare",
          examples: [
            "Ele está de férias desde a semana passada. / Ele está de férias há uma semana.",
            "Ando tirando o curso desde 1990. / Ando tirando o curso há quatro anos.",
            "Conheço-a desde 1970. / Conheço-a há muito tempo.",
          ],
        },
        {
          heading: "há — um momento no passado",
          examples: [
            "Ela saiu de casa há meia hora.",
            "— Quando é que chegaste? — Há dez minutos.",
            "Estive com o Paulo há dois dias.",
          ],
          note: "Quando o há indica um momento no passado, o verbo está sempre no passado.",
        },
      ],
    },
    exercises: [
      {
        id: "49.1",
        instructions: "Complete com desde ou há.",
        type: "blank",
        items: [
          { n: 1, prompt: "Ele saiu ___ cinco minutos.", answers: ["há"] },
          { n: 2, prompt: "Ando lendo o livro ___ duas semanas.", answers: ["há"] },
          { n: 3, prompt: "Ela estuda inglês ___ os quatro anos.", answers: ["desde"] },
          { n: 4, prompt: "Estou à espera do ônibus ___ meia hora.", answers: ["há"] },
          { n: 5, prompt: "A casa está alugada ___ janeiro.", answers: ["desde"] },
          { n: 6, prompt: "Estivemos em Paris ___ três anos.", answers: ["há"] },
          { n: 7, prompt: "Não vou ao teatro ___ muito tempo.", answers: ["há"] },
          { n: 8, prompt: "Comprei o carro ___ dois meses.", answers: ["há"] },
          { n: 9, prompt: "O João está doente ___ quarta-feira.", answers: ["desde"] },
          { n: 10, prompt: "Não ando de bicicleta ___ criança.", answers: ["desde"] },
        ],
      },
      {
        id: "49.2",
        instructions: "Faça frases com desde e há.",
        note: "Cada situação leva duas frases: uma com desde e outra com há. O exemplo do livro é: São dez da manhã. Acordei às 8h00. → Estou acordada desde as 8h00. / Estou acordada há duas horas.",
        type: "construct",
        items: [
          {
            n: "2a",
            cue: "Estamos em agosto. Eles foram viver para o Porto em janeiro. — Eles vivem… (desde)",
            answer: "no Porto desde janeiro.",
          },
          { n: "2b", cue: "— Eles vivem… (há)", answer: "no Porto há 8 meses." },
          {
            n: "3a",
            cue: "Hoje é sexta-feira. Falei com ele na segunda-feira. — Não o vejo… (desde)",
            answer: "desde segunda-feira.",
          },
          { n: "3b", cue: "— Não o vejo… (há)", answer: "há 5 dias." },
          {
            n: "4a",
            cue: "É meio-dia. Tomei o café da manhã às 7h00. — Já não como… (desde)",
            answer: "desde as 7h00.",
          },
          { n: "4b", cue: "— Já não como… (há)", answer: "há 5 horas." },
          {
            n: "5a",
            cue: "Hoje é dia 15. Mudaram para a casa nova no dia 1. — Estão na casa nova… (desde)",
            answer: "desde o dia 1.",
          },
          { n: "5b", cue: "— Estão na casa nova… (há)", answer: "há 15 dias." },
        ],
      },
      {
        id: "49.3",
        instructions: "Complete com desde e há.",
        type: "blank",
        items: [
          {
            n: 1,
            prompt: "Eles estão casados ___ 1970. Estão casados ___ mais de vinte anos.",
            answers: ["desde", "há"],
          },
          {
            n: 2,
            prompt: "Ontem encontrei o João. Já não o via ___ imenso tempo, ___ os tempos da escola.",
            answers: ["há", "desde"],
          },
          {
            n: 3,
            prompt: "São 14h00. Estou estudando ___ meia hora. Estou estudando ___ as 13h30.",
            answers: ["há", "desde"],
          },
          {
            n: 4,
            prompt:
              "Vou telefonar aos meus pais. Já não falo com eles ___ uns meses, mais precisamente ___ o Natal.",
            answers: ["há", "desde"],
          },
          {
            n: 5,
            prompt: "O professor está doente. Não temos aulas ___ quinta-feira, ___ quase uma semana.",
            answers: ["desde", "há"],
          },
        ],
      },
      {
        id: "49.4",
        instructions: "Responda às seguintes perguntas com desde ou há.",
        type: "construct",
        items: [
          {
            n: 1,
            cue: "Há quanto tempo não lê o jornal? (ontem)",
            answer: "Não leio o jornal desde ontem.",
          },
          { n: 2, cue: "Quando é que chegaram? (cinco minutos)", answer: "Chegámos há cinco minutos." },
          {
            n: 3,
            cue: "Há quanto tempo estuda português? (1992)",
            answer: "Estudo português desde 1992.",
          },
          { n: 4, cue: "Desde quando é que vives aqui? (dezembro)", answer: "Vivo aqui desde dezembro." },
          {
            n: 5,
            cue: "Quando é que foi a estreia? (quinze dias)",
            answer: "A estreia foi há quinze dias.",
          },
          {
            n: 6,
            cue: "Há quanto tempo estás à espera? (duas horas)",
            answer: "Estou à espera há duas horas.",
          },
          {
            n: 7,
            cue: "Há quanto tempo estás à espera? (as duas horas)",
            answer: "Estou à espera desde as duas horas (14:00).",
          },
          {
            n: 8,
            cue: "Há quanto tempo não anda de avião? (os cinco anos)",
            answer: "Não ando de avião desde os cinco anos.",
          },
          {
            n: 9,
            cue: "Há quanto tempo não anda de avião? (cinco anos)",
            answer: "Não ando de avião há cinco anos.",
          },
        ],
      },
    ],
  },
  {
    n: 50,
    title: "haver; haver de + infinitivo",
    subtitle: "forma impessoal e intenção no futuro",
    theory: {
      intro: [
        "Não há nada dentro da caixa.",
        "Há um coelho dentro da caixa.",
        "Há dois coelhos dentro da caixa.",
      ],
      table: {
        verb: "haver de + infinitivo — fazer / ir / ser",
        rows: [
          ["eu", "hei de"],
          ["tu", "hás de"],
          ["você / ele / ela", "há de"],
          ["nós", "havemos de"],
          ["vocês / eles / elas", "hão de"],
        ],
      },
      sections: [
        {
          heading: "Verbo haver — forma impessoal",
          examples: [
            "presente — há · p.p.s. — houve · imperfeito — havia",
            "pretérito perfeito composto — tem havido · mais-que-perfeito composto — tinha havido",
            "futuro — haverá · condicional — haveria",
          ],
        },
        {
          heading: "O verbo haver pode ser equivalente a:",
          examples: [
            { text: "Há morangos para a sobremesa. (= Temos morangos para a sobremesa.)", tag: "ter" },
            {
              text: "Hoje há um bom filme na televisão. (= Hoje dá / é transmitido um bom filme na televisão.)",
              tag: "dar / ser transmitido",
            },
            {
              text: "Havia muita gente na rua àquela hora. (= Estava muita gente na rua àquela hora.)",
              tag: "estar",
            },
            {
              text: "Há várias teorias sobre esse assunto. (= Existem várias teorias sobre esse assunto.)",
              tag: "existir",
            },
            { text: "O que é que houve? (= O que é que aconteceu / se passou?)", tag: "acontecer / passar-se" },
          ],
        },
        {
          heading: "haver de + infinitivo — forte intenção ou convicção sobre o futuro",
          examples: [
            "— O que é que queres ser mais tarde? — Hei de ser médico.",
            "Fomos a Évora. É uma cidade tão bonita que havemos de voltar lá.",
            "— Já encontraste a tua mala? — Ainda não, mas hei de encontrar.",
          ],
        },
      ],
    },
    exercises: [
      {
        id: "50.1",
        instructions: "Substitua o verbo destacado pela forma correta do verbo haver.",
        note: "Escreve só a forma do verbo haver. O exemplo do livro é: Ontem não tivemos aulas. → Ontem não houve aulas.",
        type: "blank",
        items: [
          { n: 2, prompt: "Ainda ___ duas pessoas na sala de espera. (estão)", answers: ["há"] },
          { n: 3, prompt: "___ muito trabalho ultimamente. (Temos tido)", answers: ["Tem havido"] },
          {
            n: 4,
            prompt: "Ontem à noite ___ um programa muito interessante na TV. (deu)",
            answers: ["houve"],
          },
          { n: 5, prompt: "Antigamente ___ um café naquela esquina. (existia)", answers: ["havia"] },
          { n: 6, prompt: "Amanhã ___ uma visita de estudo aos Jerónimos. (temos)", answers: ["há"] },
          { n: 7, prompt: "Tu não estás bem. O que é que ___? (aconteceu)", answers: ["houve"] },
          { n: 8, prompt: "Depois da palestra, ___ um debate. (tivemos)", answers: ["houve"] },
          { n: 9, prompt: "___ tempo para tomar um café? (Temos)", answers: ["Há"] },
          { n: 10, prompt: "___ alguém no escritório a esta hora? (Está)", answers: ["Há"] },
          { n: 11, prompt: "Não, não ___ lá ninguém. (está)", answers: ["há"] },
          {
            n: 12,
            prompt: "Depois do sorteio, ___ uma festa-convívio. (teremos)",
            answers: ["haverá"],
          },
          {
            n: 13,
            prompt: "Disseram que no próximo ano ___ mais bolsas de estudo para atribuir. (teriam)",
            answers: ["haveria"],
          },
        ],
      },
      {
        id: "50.2",
        instructions:
          "A Ana está conversando com a Rita sobre o cruzeiro que tenciona fazer ao Mediterrâneo. Complete o diálogo com haver de + infinitivo na forma correta.",
        note: "O exemplo do livro é a primeira fala: Um cruzeiro pelo Mediterrâneo há de ser (ser) uma experiência muito interessante.",
        type: "blank",
        items: [
          {
            n: 1,
            prompt: "Ana: Eu ___ (conhecer) outras terras e outros povos.",
            answers: ["hei de conhecer"],
          },
          {
            n: 2,
            prompt: "Rita: Sim e tu ___ (aprender) muito sobre os costumes desses países.",
            answers: ["hás de aprender"],
          },
          {
            n: 3,
            prompt: "Ana: Eu e o meu marido ___ (tirar) fotografias para te mostrarmos.",
            answers: ["havemos de tirar"],
          },
          {
            n: 4,
            prompt:
              "Rita: Ótimo. Acho que vocês nunca ___ (esquecer) essas férias. ___ (divertir-se) bastante e depois ___ (contar)-me tudo.",
            answers: ["hão de esquecer", "Hão de divertir-se", "hão de contar"],
          },
          { n: 5, prompt: "Ana: Claro e um dia, quem sabe, ___ (ir) tu conosco.", answers: ["hás de ir"] },
        ],
      },
      {
        id: "50.3",
        instructions: "Substitua o futuro por haver de + infinitivo na forma correta.",
        note: "Escreve só a forma nova do verbo. O exemplo do livro é: Eles serão contatados ainda hoje. → Eles hão de ser contatados ainda hoje.",
        type: "blank",
        items: [
          {
            n: 2,
            prompt: "Da próxima vez ___ o que o médico te aconselhar e tudo ___ bem. (farás / correrá)",
            answers: ["hás de fazer", "há de correr"],
          },
          {
            n: 3,
            prompt: "Seguindo as indicações do mapa, ___ facilmente o hotel. (encontrarão)",
            answers: ["hão de encontrar"],
          },
          {
            n: 4,
            prompt: "Durante a nossa estada em Lisboa, ___ o Mosteiro dos Jerónimos. (visitaremos)",
            answers: ["havemos de visitar"],
          },
          { n: 5, prompt: "Faz como te expliquei e não ___ problemas. (haverá)", answers: ["há de haver"] },
          {
            n: 6,
            prompt: "Eles gostaram imenso de Veneza. Um dia, também eu lá ___. (irei)",
            answers: ["hei de ir"],
          },
        ],
      },
    ],
  },
];
