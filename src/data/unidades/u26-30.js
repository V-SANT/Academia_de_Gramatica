// Unidades 26-30 da "Gramática Ativa 1" (Lidel).
// O formato de cada unidade está documentado em ../units.js.

export const UNIDADES_26_30 = [
  {
    n: 26,
    title: "isto, isso, aquilo; aqui, aí, ali",
    subtitle: "demonstrativos invariáveis e advérbios de lugar",
    theory: {
      intro: ["Isto aqui é um livro.", "Isso aí são canetas.", "Aquilo ali é uma porta."],
      table: null,
      sections: [
        {
          heading:
            "Isto, isso e aquilo são demonstrativos invariáveis: usam-se para pedir a identificação de objetos ou para identificar objetos.",
          examples: [
            "— O que é isto? — Isso é um livro.",
            "— O que é isso? — Isto é uma caneta.",
            "— O que é aquilo? — Aquilo é um carro.",
          ],
          note: "Isto, isso e aquilo vão sempre com é (um livro, uma caneta) ou são (livros, canetas).",
        },
        {
          heading: "A que distância está o objeto",
          examples: [
            { text: "Isto está perto da pessoa que fala (eu).", tag: "aqui" },
            { text: "Isso está perto da pessoa com quem se fala (tu).", tag: "aí" },
            { text: "Aquilo está afastado do eu e do tu.", tag: "ali" },
          ],
        },
        {
          heading: "Aqui, aí e ali são advérbios de lugar e podem ser usados com os demonstrativos:",
          examples: [
            "Aqui indica que o objeto está perto da pessoa que fala (eu).",
            "Aí indica que o objeto está perto da pessoa com quem se fala (tu).",
            "Ali indica que o objeto está afastado do eu e do tu.",
          ],
        },
      ],
    },
    exercises: [
      {
        id: "26.1",
        instructions: "Complete com isto, isso, aquilo.",
        note: "O exemplo do livro é: Isto aqui é um livro.",
        type: "blank",
        items: [
          { n: 2, prompt: "___ aí é uma cadeira.", answers: ["Isso"] },
          { n: 3, prompt: "___ ali é uma porta.", answers: ["Aquilo"] },
          { n: 4, prompt: "___ aí são canetas.", answers: ["Isso"] },
          { n: 5, prompt: "___ ali é o quadro.", answers: ["Aquilo"] },
          { n: 6, prompt: "___ aqui é o dicionário de português.", answers: ["Isto"] },
          { n: 7, prompt: "___ aqui é uma pasta.", answers: ["Isto"] },
          { n: 8, prompt: "___ ali é a escola.", answers: ["Aquilo"] },
          { n: 9, prompt: "___ aqui são lápis.", answers: ["Isto"] },
          { n: 10, prompt: "___ aí é uma borracha.", answers: ["Isso"] },
          { n: 11, prompt: "___ aqui são livros.", answers: ["Isto"] },
          { n: 12, prompt: "___ aí é uma janela.", answers: ["Isso"] },
        ],
      },
      {
        id: "26.2",
        instructions: "Complete as respostas com isto, isso, aquilo.",
        note: "O exemplo do livro é: — O que é isto? — Isso é um lápis.",
        type: "blank",
        items: [
          { n: 2, prompt: "— O que é aquilo? — ___ são dicionários.", answers: ["Aquilo"] },
          { n: 3, prompt: "— O que é isso, Ana? — ___ são os livros de português.", answers: ["Isto"] },
          { n: 4, prompt: "— O que é aquilo ali? — ___ são cassetes.", answers: ["Aquilo"] },
          { n: 5, prompt: "— O que é isto? — ___ é uma borracha.", answers: ["Isso"] },
          { n: 6, prompt: "— O que é aquilo? — ___ é a porta.", answers: ["Aquilo"] },
          { n: 7, prompt: "— O que é isso aí? — ___ é uma cadeira.", answers: ["Isto"] },
          { n: 8, prompt: "— O que é aquilo ali? — ___ é a escola.", answers: ["Aquilo"] },
          { n: 9, prompt: "— O que é isto aqui? — ___ são óculos.", answers: ["Isso"] },
          { n: 10, prompt: "— O que é isso? — ___ são canetas.", answers: ["Isto"] },
          { n: 11, prompt: "— O que é isto? — ___ é o quadro da sala.", answers: ["Isso"] },
        ],
      },
      {
        id: "26.3",
        instructions:
          "Complete as respostas. Use isto, isso, aquilo, o presente do indicativo do verbo ser e os artigos definidos e indefinidos.",
        note: "No livro já vêm resolvidos o item 1 (— O que é isto? (livro) → Isso é um livro.) e o 6 (— O que é isto? (livros) → Isso são livros.).",
        type: "construct",
        items: [
          { n: 2, cue: "— O que é aquilo? (escola de português)", answer: "Aquilo é a escola de português." },
          { n: 3, cue: "— O que é isto? (quadro da sala)", answer: "Isso é o quadro da sala." },
          { n: 4, cue: "— O que é isso? (borracha)", answer: "Isto é uma borracha." },
          { n: 5, cue: "— O que é isto? (canetas)", answer: "Isso são canetas." },
          { n: 7, cue: "— O que é isso? (janela)", answer: "Isto é uma janela." },
          { n: 8, cue: "— O que é isto? (dicionário)", answer: "Isso é um dicionário." },
          { n: 9, cue: "— O que é aquilo? (pasta do professor)", answer: "Aquilo é a pasta do professor." },
          { n: 10, cue: "— O que é isso? (caneta)", answer: "Isto é uma caneta." },
        ],
      },
    ],
  },
  {
    n: 27,
    title: "este, esse, aquele, etc.",
    subtitle: "demonstrativos variáveis",
    theory: {
      intro: ["— Essa cadeira está partida.", "— Qual? Esta?", "— Sim, essa."],
      table: null,
      sections: [
        {
          heading: "Demonstrativos variáveis",
          examples: [
            "este livro, esta caneta — estes livros, estas canetas",
            "esse livro, essa caneta — esses livros, essas canetas",
            "aquele livro, aquela caneta — aqueles livros, aquelas canetas",
          ],
        },
        {
          heading: "Como se usam",
          examples: [
            "Usam-se com os substantivos ou substituem os substantivos a que se referem.",
            "Concordam em gênero e número com os substantivos a que se referem.",
            { text: "Este (+ substantivo) indica que o objeto está perto da pessoa que fala (eu).", tag: "aqui" },
            {
              text: "Esse (+ substantivo) indica que o objeto está perto da pessoa com quem se fala (tu).",
              tag: "aí",
            },
            { text: "Aquele (+ substantivo) indica que o objeto está afastado do eu e do tu.", tag: "ali" },
          ],
        },
        {
          examples: [
            "— Este hotel é caro. Aquele é mais barato e também é bom.",
            "— Quem é aquela garota?",
            "— Desculpe, esta é a Av. da República?",
            "— Essa caneta não escreve. Usa esta.",
            "— Esses sapatos são novos? — Não. Já comprei estes sapatos no mês passado.",
            "— Este quadro é bonito, não achas Ana? — Aquele ali é mais bonito.",
          ],
        },
      ],
    },
    exercises: [
      {
        id: "27.1",
        instructions: "Complete com este, esta, estes ou estas.",
        note: "O exemplo do livro é: estas pessoas.",
        type: "blank",
        items: [
          { n: 2, prompt: "___ rapaz", answers: ["este"] },
          { n: 3, prompt: "___ carro", answers: ["este"] },
          { n: 4, prompt: "___ casa", answers: ["esta"] },
          { n: 5, prompt: "___ árvores", answers: ["estas"] },
          { n: 6, prompt: "___ óculos", answers: ["estes"] },
          { n: 7, prompt: "___ sala", answers: ["esta"] },
          { n: 8, prompt: "___ quadro", answers: ["este"] },
          { n: 9, prompt: "___ livros", answers: ["estes"] },
          { n: 10, prompt: "___ mulher", answers: ["esta"] },
          { n: 11, prompt: "___ professor", answers: ["este"] },
          { n: 12, prompt: "___ garotas", answers: ["estas"] },
        ],
      },
      {
        id: "27.2",
        instructions: "Complete com esse, essa, esses ou essas.",
        note: "O exemplo do livro é: esse dicionário.",
        type: "blank",
        items: [
          { n: 2, prompt: "___ canetas", answers: ["essas"] },
          { n: 3, prompt: "___ café", answers: ["esse"] },
          { n: 4, prompt: "___ bolos", answers: ["esses"] },
          { n: 5, prompt: "___ homem", answers: ["esse"] },
          { n: 6, prompt: "___ calças", answers: ["essas"] },
          { n: 7, prompt: "___ escola", answers: ["essa"] },
          { n: 8, prompt: "___ cadeiras", answers: ["essas"] },
          { n: 9, prompt: "___ apartamento", answers: ["esse"] },
          { n: 10, prompt: "___ flores", answers: ["essas"] },
          { n: 11, prompt: "___ rua", answers: ["essa"] },
          { n: 12, prompt: "___ jardim", answers: ["esse"] },
        ],
      },
      {
        id: "27.3",
        instructions: "Complete com aquele, aquela, aqueles ou aquelas.",
        note: "O exemplo do livro é: aquelas crianças.",
        type: "blank",
        items: [
          { n: 2, prompt: "___ bicicleta", answers: ["aquela"] },
          { n: 3, prompt: "___ táxi", answers: ["aquele"] },
          { n: 4, prompt: "___ alunos", answers: ["aqueles"] },
          { n: 5, prompt: "___ borrachas", answers: ["aquelas"] },
          { n: 6, prompt: "___ filme", answers: ["aquele"] },
          { n: 7, prompt: "___ caneta", answers: ["aquela"] },
          { n: 8, prompt: "___ pássaros", answers: ["aqueles"] },
          { n: 9, prompt: "___ lugar", answers: ["aquele"] },
          { n: 10, prompt: "___ país", answers: ["aquele"] },
          { n: 11, prompt: "___ cidades", answers: ["aquelas"] },
          { n: 12, prompt: "___ viagem", answers: ["aquela"] },
        ],
      },
      {
        id: "27.4",
        instructions: "Complete com este, esse, aquele, etc.",
        note: "Escreve só a segunda frase. O exemplo do livro é: — O que é isto? (bolo / de chocolate) — Isso é um bolo. Esse bolo é de chocolate.",
        type: "construct",
        items: [
          {
            n: 2,
            cue: "— O que é aquilo? (flores / artificiais) — Aquilo são flores. …",
            answer: "Aquelas flores são artificiais.",
          },
          {
            n: 3,
            cue: "— O que é isso? (presente / para o professor) — Isto é um presente. …",
            answer: "Este presente é para o professor.",
          },
          {
            n: 4,
            cue: "— O que é isto? (óculos / da Ana) — Isso são óculos. …",
            answer: "Esses óculos são da Ana.",
          },
          {
            n: 5,
            cue: "— O que é aquilo? (supermercado / novo) — Aquilo é um supermercado. …",
            answer: "Aquele supermercado é novo.",
          },
        ],
      },
      {
        id: "27.5",
        instructions: "Complete com este(s), esta(s); esse(s), essa(s).",
        note: "O exemplo do livro é: Essa caneta não escreve. Usa esta.",
        type: "blank",
        items: [
          { n: 2, prompt: "___ dicionário não é bom. Toma ___.", answers: ["Esse", "este"] },
          // A chave traz "Esses/estas" no item 3, mas "óculos" é masculino: a forma
          // certa é "estes". Aceitam-se as duas, como nos outros casos em que a
          // chave do livro derrapa.
          { n: 3, prompt: "___ óculos são muito escuros. Põe ___.", answers: ["Esses", "estes/estas"] },
          { n: 4, prompt: "___ blusa é pouco quente. Veste ___.", answers: ["Essa", "esta"] },
          { n: 5, prompt: "___ telefone não funciona. Usa ___.", answers: ["Esse", "este"] },
          { n: 6, prompt: "___ raquete não é boa. Joga com ___.", answers: ["Essa", "esta"] },
          { n: 7, prompt: "___ bolo não está bom. Prova ___.", answers: ["Esse", "este"] },
          { n: 8, prompt: "___ batatas estão frias. Come ___.", answers: ["Essas", "estas"] },
          { n: 9, prompt: "___ vestido não é bonito. Compra ___.", answers: ["Esse", "este"] },
          { n: 10, prompt: "___ cerveja não está fresca. Bebe ___.", answers: ["Essa", "esta"] },
        ],
      },
    ],
  },
  {
    n: 28,
    title: "meu, teu, seu, etc.",
    subtitle: "possessivos",
    theory: {
      intro: [
        "— O meu carro é grande. — O meu é pequeno.",
        "— De quem é aquele carro? — É meu.",
      ],
      table: null,
      sections: [
        {
          heading: "Possessivos",
          examples: [
            "eu — meu(s), minha(s)",
            "tu — teu(s), tua(s)",
            "você — seu(s), sua(s)",
            "nós — nosso(s), nossa(s)",
            "vocês — vosso(s), vossa(s)",
          ],
        },
        {
          examples: [
            "Eu tenho um irmão e uma irmã. O meu irmão chama-se João. A minha irmã chama-se Ana. Os meus irmãos estão na escola.",
            "Tu tens um amigo francês e duas amigas inglesas. O teu amigo está em Portugal. As tuas amigas estão em Portugal.",
            "O sr. Marques foi buscar o carro à garagem. — O seu carro já está pronto. Tem aqui as suas chaves, sr. Marques.",
            "Nós andamos na escola. A nossa escola é moderna. Os nossos professores são muito simpáticos.",
            "O João está falando com o Pedro e com a Ana. — Encontrei os vossos pais no cinema.",
          ],
        },
        {
          examples: [
            "— De quem é esta caneta? — É tua. A minha caneta está na mala.",
            "— De quem são estes livros? — São meus. Os teus estão na sala.",
            "— Este jornal é seu, sr. Marques? — É meu, mas pode ler.",
            "— Aquele é o vosso carro? — Não. O nosso está na garagem.",
          ],
        },
        {
          heading: "Na 3.ª pessoa usa-se de + ele/ela/eles/elas:",
          examples: [
            { text: "A bicicleta dele, o relógio dele, as calças dele, os óculos dele.", tag: "o Paulo" },
            { text: "Os pais dela, as canetas dela, o vestido dela, a avó dela.", tag: "a Joana" },
            { text: "O carro deles, a casa deles, os filhos deles, as malas deles.", tag: "o sr. e a sra. Oliveira" },
            {
              text: "A escola delas, o dicionário delas, os namorados delas, as casas delas.",
              tag: "a Joana e a Ana",
            },
          ],
        },
      ],
    },
    exercises: [
      {
        id: "28.1",
        instructions: "Responda às seguintes perguntas:",
        note: "No livro já vêm resolvidos o item 1 (— De quem é esta bola? (eu) → É minha.) e o 2 (— De quem são estes óculos? (ele) → São dele.).",
        type: "construct",
        items: [
          { n: 3, cue: "— De quem é aquele dicionário? (vocês)", answer: "É vosso." },
          { n: 4, cue: "— De quem são estas flores? (eu)", answer: "São minhas." },
          { n: 5, cue: "— De quem é esse lápis? (tu)", answer: "É teu." },
          { n: 6, cue: "— De quem são estas revistas? (ela e ele)", answer: "São deles." },
          { n: 7, cue: "— De quem são essas malas? (nós)", answer: "São nossas." },
          { n: 8, cue: "— De quem é este bolo? (ela)", answer: "É dela." },
          { n: 9, cue: "— De quem são aquelas canetas? (tu e você)", answer: "São vossas." },
          { n: 10, cue: "— De quem é esta chave? (ele)", answer: "É dele." },
          { n: 11, cue: "— De quem é este café? (você)", answer: "É seu." },
          { n: 12, cue: "— De quem são estes chocolates? (eu e tu)", answer: "São nossos." },
        ],
      },
      {
        id: "28.2",
        instructions: "Complete as seguintes frases:",
        note: "O exemplo do livro é: Vi a sra. Marques com o marido dela.",
        type: "blank",
        items: [
          { n: 2, prompt: "Vi o sr. Marques com a mulher ___.", answers: ["dele"] },
          { n: 3, prompt: "Vi a Ana com o namorado ___.", answers: ["dela"] },
          { n: 4, prompt: "Vi o João e o Miguel com os pais ___.", answers: ["deles"] },
          { n: 5, prompt: "Vi o Pedro com os filhos ___.", answers: ["dele"] },
          { n: 6, prompt: "Vi a Joana e a Paula com os amigos ___.", answers: ["delas"] },
        ],
      },
      {
        id: "28.3",
        instructions: "Use os possessivos.",
        note: "No livro já vêm resolvidos o item 1 (Nós temos um apartamento. → É o nosso apartamento.) e o 2 (Ele comprou uma máquina fotográfica. → É a máquina fotográfica dele.).",
        type: "blank",
        items: [
          { n: 3, prompt: "Você tem um carro. É ___.", answers: ["o seu carro"] },
          { n: 4, prompt: "Eu ando numa escola. É ___.", answers: ["a minha escola"] },
          { n: 5, prompt: "Eu e tu dormimos no mesmo quarto. É ___.", answers: ["o nosso quarto"] },
          { n: 6, prompt: "Ela comprou uma mala. É ___.", answers: ["a mala dela"] },
          { n: 7, prompt: "Tu e o Pedro têm muitos amigos. São ___.", answers: ["os vossos amigos"] },
          { n: 8, prompt: "A Ana e a Paula já têm namorados. São ___.", answers: ["os namorados delas"] },
          { n: 9, prompt: "Você tem muitas canetas. São ___.", answers: ["as suas canetas"] },
          { n: 10, prompt: "O sr. Marques está no escritório. É ___.", answers: ["o escritório dele"] },
          { n: 11, prompt: "Vocês têm muitos livros. São ___.", answers: ["os vossos livros"] },
          { n: 12, prompt: "Eu e o meu irmão ainda temos avós. São ___.", answers: ["os nossos avós"] },
          { n: 13, prompt: "Tu tens uma casa nova. É ___.", answers: ["a tua casa"] },
          { n: 14, prompt: "Eles têm dois filhos. São ___.", answers: ["os filhos deles"] },
          { n: 15, prompt: "Tu e a tua irmã têm um dicionário. É ___.", answers: ["o vosso dicionário"] },
          { n: 16, prompt: "Nós temos uma filha. É ___.", answers: ["a nossa filha"] },
        ],
      },
    ],
  },
  {
    n: 29,
    title: "discurso direto e indireto",
    subtitle: "contar o que outra pessoa disse",
    theory: {
      intro: [
        "O João disse que estava doente e que não ia à escola.",
        "Eles disseram que já tinham visto o filme.",
        "Ele disse que teria muito gosto em trabalhar com eles.",
      ],
      table: null,
      sections: [
        {
          heading: "Tempos verbais — direto → indireto",
          examples: [
            "presente → imperfeito",
            "pretérito perfeito simples → pretérito mais-que-perfeito composto",
            "pretérito perfeito composto → pretérito mais-que-perfeito composto",
            "futuro imperfeito → condicional presente",
          ],
        },
        {
          heading: "Advérbios",
          examples: [
            { text: "aqui → ali; cá → lá", tag: "lugar" },
            {
              text: "ontem → no dia anterior; hoje → nesse dia / naquele dia; amanhã → no dia seguinte; na próxima semana → na semana seguinte",
              tag: "tempo",
            },
          ],
        },
        {
          heading: "Pessoais, possessivos e demonstrativos",
          examples: [
            "pessoais e possessivos: 1.ª e 2.ª pessoa → 3.ª pessoa",
            "demonstrativos: este/esse — isto/isso → aquele — aquilo",
          ],
          note: "Verbos introdutórios para o discurso indireto: dizer / contar / perguntar / responder / querer saber.",
        },
        {
          heading: "No fim de semana passado a Ana encontrou o João numa festa",
          examples: [
            "— Tomas uma bebida? → O João perguntou à Ana se ela tomava uma bebida.",
            "— A festa está muito animada. → O João disse à Ana que a festa estava muito animada.",
            "— Queres dançar? → O João perguntou à Ana se ela queria dançar.",
            "— Tens visto o Pedro? → O João perguntou à Ana se tinha visto o Pedro.",
            "— Na próxima semana vou de férias para o Algarve. → O João contou à Ana que na semana seguinte ia de férias para o Algarve.",
            "— Como vão as tuas aulas? → O João perguntou à Ana como iam as aulas dela.",
            "— Entrei para a universidade e gosto muito do meu curso. → O João disse à Ana que tinha entrado para a universidade e que gostava muito do curso dele.",
          ],
        },
      ],
    },
    exercises: [
      {
        id: "29.1",
        instructions:
          "Ontem à tarde você encontrou a Paula, uma amiga sua, que lhe contou muitas coisas. À noite conta a outra amiga tudo o que a Paula disse.",
        note: "Escreve só a parte que continua a frase começada. O exemplo do livro é: Estou morando em casa dos meus pais. → A Paula disse-me que estava morando em casa dos pais dela.",
        type: "construct",
        items: [
          {
            n: 2,
            cue: "No próximo mês vou mudar para um apartamento novo. — Ela disse que…",
            answer: "no mês seguinte ia mudar para um apartamento novo.",
          },
          {
            n: 3,
            cue: "Vou casar-me na próxima semana. — Ela disse que…",
            answer: "se ia casar na semana seguinte.",
          },
          {
            n: 4,
            cue: "Não tenho tempo para preparar nada. — Ela queixou-se que…",
            answer: "não tinha tempo para preparar nada.",
          },
          {
            n: 5,
            cue: "Tirei uns dias de férias para tratar de tudo o que é necessário. — Ela contou-me que…",
            answer: "tinha tirado uns dias de férias para tratar de tudo o que era necessário.",
          },
          {
            n: 6,
            cue: "Queres vir jantar a minha casa? — Ela perguntou-me se…",
            answer: "eu queria ir jantar a casa dela.",
          },
          {
            n: 7,
            cue: "O meu futuro marido também irá ao jantar. — Ela disse-me que…",
            answer: "o futuro marido dela também iria ao jantar.",
          },
          {
            n: 8,
            cue: "Ele trabalha com computadores. — Ela contou-me que…",
            // A chave aceita as duas: "ele trabalha (trabalhava) com computadores".
            answer: "ele trabalhava com computadores./ele trabalha com computadores.",
          },
          {
            n: 9,
            cue: "Já fizemos os planos para a lua de mel. — Ela disse-me que…",
            answer: "já tinham feito os planos para a lua de mel.",
          },
          {
            n: 10,
            cue: "Vamos fazer um cruzeiro pelo Mediterrâneo. — Ela disse-me que…",
            answer: "iam fazer um cruzeiro pelo Mediterrâneo.",
          },
          {
            n: 11,
            cue: "Partiremos logo a seguir ao casamento. — Ela contou-me que…",
            answer: "partiriam logo a seguir ao casamento.",
          },
          {
            n: 12,
            cue: "Claro que estás convidada para a festa! — Ela disse-me que…",
            answer: "eu estava convidada para a festa.",
          },
        ],
      },
      {
        id: "29.2",
        instructions:
          "Imagine que um amigo seu lhe diz uma coisa e que depois diz exatamente o contrário. Use verbos de opinião como pensar que e julgar que.",
        note: "O exemplo do livro é: — Este restaurante é caro. — Pensei que tinhas dito que não era caro.",
        type: "construct",
        items: [
          { n: 2, cue: "— Não vou ao cinema. — Julguei que…", answer: "tinhas dito que ias ao cinema." },
          {
            n: 3,
            cue: "— O filme foi bom.",
            answer: "Pensei que tinhas dito que o filme não tinha sido bom.",
          },
          {
            n: 4,
            cue: "— A Ana gosta do João.",
            answer: "Julguei que tinhas dito que a Ana não gostava do João.",
          },
          {
            n: 5,
            cue: "— Eles vão casar-se.",
            answer: "Pensei que tinhas dito que eles não se iam casar.",
          },
          {
            n: 6,
            cue: "— Nunca tomo café.",
            answer: "Julguei que tinhas dito que tomavas (sempre) café.",
          },
          {
            n: 7,
            cue: "— Não quero falar com eles.",
            answer: "Pensei que tinhas dito que querias falar com eles.",
          },
          {
            n: 8,
            cue: "— Não posso ir à festa.",
            answer: "Julguei que tinhas dito que podias ir à festa.",
          },
          {
            n: 9,
            cue: "— Hoje à noite fico em casa.",
            answer: "Pensei que tinhas dito que hoje à noite não ficavas em casa.",
          },
          {
            n: 10,
            cue: "— Reprovei no exame.",
            answer: "Julguei que tinhas dito que não tinhas reprovado no exame.",
          },
          {
            n: 11,
            cue: "— O empregado é simpático.",
            answer: "Pensei que tinhas dito que o empregado não era simpático.",
          },
          {
            n: 12,
            cue: "— Paguei o almoço.",
            answer: "Julguei que tinhas dito que não tinhas pago o almoço.",
          },
          {
            n: 13,
            cue: "— Gastei o dinheiro todo.",
            answer: "Pensei que tinhas dito que não tinhas gasto o dinheiro todo.",
          },
        ],
      },
    ],
  },
  {
    n: 30,
    title: "infinitivo pessoal",
    subtitle: "o infinitivo que muda com a pessoa",
    theory: {
      intro: [
        "Ele comprou um livro para o filho ler.",
        "Comprei um livro para tu leres.",
        "É melhor levarem os casacos. Está muito frio.",
      ],
      table: {
        verb: "Infinitivo pessoal",
        rows: [
          ["eu", "chegar"],
          ["tu", "falares"],
          ["você / ele / ela", "ler"],
          ["nós", "irmos"],
          ["vocês / eles / elas", "serem"],
        ],
      },
      sections: [
        {
          heading: "Como se forma",
          examples: [
            "infinitivo + -es (2.ª pessoa do singular)",
            "infinitivo + -mos (1.ª pessoa do plural)",
            "infinitivo + -em (3.ª pessoa do plural)",
          ],
          note: "A 1.ª e a 3.ª pessoa do singular são iguais ao infinitivo normal.",
        },
        {
          heading: "Usa-se depois de expressões impessoais:",
          examples: [
            "É melhor vocês levarem os casacos.",
            "É preciso ires ao supermercado.",
            "É agradável estarmos na esplanada.",
          ],
        },
        {
          heading: "Usa-se depois de preposições:",
          examples: [
            "Ao ouvir as notícias, o Pedro ficou preocupado. (= Quando o Pedro ouviu as notícias, …)",
            "Comprei ingressos para irmos ao cinema.",
            "Não te convidei, João, por estares doente.",
            "Não saiam de casa sem eu chegar.",
            "Eu espero até vocês acabarem o trabalho.",
          ],
        },
        {
          heading: "Usa-se depois de locuções prepositivas:",
          examples: [
            "Li o livro antes de ver o filme.",
            "Apesar de serem muito ricos, não gostam de gastar dinheiro.",
            "No caso de querer mais informações, sr. Marques, telefone-me.",
            "Depois de estudares tudo, podes sair.",
          ],
        },
      ],
    },
    exercises: [
      {
        id: "30.1",
        instructions: "Complete com os verbos no infinitivo pessoal.",
        note: "O exemplo do livro é: Fomos visitar a Ana por ela estar (estar) doente.",
        type: "blank",
        items: [
          { n: 2, prompt: "Depois de ___ (pensar), decidimos não fechar o negócio.", answers: ["pensarmos"] },
          {
            n: 3,
            prompt: "Quero acabar o bolo antes de ___ (chegar) os convidados.",
            answers: ["chegarem"],
          },
          { n: 4, prompt: "Depois de vocês ___ (partir), arrumo a casa.", answers: ["partirem"] },
          {
            n: 5,
            prompt: "Apesar de ___ (estar) com sono, não conseguiram dormir.",
            answers: ["estarem"],
          },
          { n: 6, prompt: "Não é muito provável eles ___ (aceitar) o trabalho.", answers: ["aceitarem"] },
          {
            n: 7,
            prompt: "Até nós ___ (encontrar) o dinheiro, ninguém sai da sala.",
            answers: ["encontrarmos"],
          },
          { n: 8, prompt: "É perigoso ___ (tomar) banho neste rio, meninos.", answers: ["tomarem"] },
          { n: 9, prompt: "Fui de táxi para não ___ (chegar) tarde.", answers: ["chegar"] },
          {
            n: 10,
            prompt: "O Pedro e a Ana estão aprendendo inglês para ___ (ir) para os Estados Unidos.",
            answers: ["irem"],
          },
          { n: 11, prompt: "Sem ___ (saber) línguas, não podem concorrer ao lugar.", answers: ["saberem"] },
          { n: 12, prompt: "Esperem aqui até eu ___ (voltar).", answers: ["voltar"] },
          { n: 13, prompt: "Depois de ___ (comer), sentes-te melhor.", answers: ["comeres"] },
          {
            n: 14,
            prompt: "Sem ___ (provar) o bolo, não podes dizer se é bom ou mau.",
            answers: ["provares"],
          },
          { n: 15, prompt: "A Joana ficou muito contente ao ___ (receber) o presente.", answers: ["receber"] },
        ],
      },
      {
        id: "30.2",
        instructions: "Ligue as frases com as palavras entre parênteses. Faça as alterações necessárias.",
        note: "O exemplo do livro é: Ele vai ao cinema. Primeiro acaba o trabalho. (depois de) → Ele vai ao cinema depois de acabar o trabalho.",
        type: "construct",
        items: [
          {
            n: 2,
            cue: "Não posso ir. Telefono-lhe. (no caso de)",
            answer: "No caso de não poder ir, telefono-lhe.",
          },
          {
            n: 3,
            cue: "Não me sinto bem, mas vou trabalhar. (apesar de)",
            answer: "Apesar de não me sentir bem, vou trabalhar.",
          },
          {
            n: 4,
            cue: "Vais às compras. Depois vens logo para casa. (depois de)",
            answer: "Depois de ires às compras, vens logo para casa.",
          },
          {
            n: 5,
            cue: "Primeiro têm que lavar as mãos. Depois comem o bolo. (antes de)",
            answer: "Antes de comerem o bolo, têm que lavar as mãos.",
          },
          {
            n: 6,
            cue: "Acabas o trabalho. Depois apagas a luz. (depois de)",
            answer: "Depois de acabares o trabalho, apagas a luz.",
          },
          {
            n: 7,
            cue: "Ele tem um bom emprego, mas não está satisfeito. (apesar de)",
            answer: "Apesar de ter um bom emprego, não está satisfeito.",
          },
          {
            n: 8,
            cue: "Vocês veem o filme. Primeiro deviam ler o livro. (antes de)",
            answer: "Antes de verem o filme, deviam ler o livro.",
          },
          {
            n: 9,
            cue: "Não temos aulas. Vamos ao museu. (no caso de)",
            answer: "No caso de não termos aulas, vamos ao museu.",
          },
          {
            n: 10,
            cue: "Eles saem. Eu arrumo a casa. (depois de)",
            answer: "Depois de eles saírem, arrumo a casa.",
          },
        ],
      },
      {
        id: "30.3",
        instructions:
          "Complete as frases com as preposições ao / até / para / por / sem e com os verbos no infinitivo pessoal.",
        note: "O exemplo do livro é: Ao entrarem (entrar) em casa, viram que estava tudo desarrumado.",
        type: "blank",
        items: [
          {
            n: 2,
            prompt: "Não falem com o professor ___ eu ___ (chegar).",
            answers: ["até/sem", "chegar"],
          },
          { n: 3, prompt: "Comprei ingressos ___ nós ___ (ir) ao concerto.", answers: ["para", "irmos"] },
          { n: 4, prompt: "Ela não foi trabalhar ___ ___ (estar) doente.", answers: ["por", "estar"] },
          {
            n: 5,
            prompt: "___ vocês ___ (ver) o filme, não podem fazer críticas.",
            answers: ["Sem", "verem"],
          },
          {
            n: 6,
            prompt: "As crianças ficaram contentíssimas ___ ___ (abrir) os presentes.",
            answers: ["ao", "abrirem"],
          },
        ],
      },
    ],
  },
];
