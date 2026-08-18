// Unidades 36-40 da "Gramática Ativa 1" (Lidel).
// O formato de cada unidade está documentado em ../units.js.

export const UNIDADES_36_40 = [
  {
    n: 36,
    title: "me, te, o, a, etc.",
    subtitle: "pronomes pessoais complemento direto",
    theory: {
      intro: [
        "— Convidaste a Ana? — Convidei-a e vou buscá-la agora.",
        "— Levas-me até à escola? — Claro que te levo. Entra.",
        "— Guardem os ingressos. Guardem-nos no bolso.",
      ],
      table: null,
      sections: [
        {
          heading: "Complemento direto",
          examples: [
            "eu — me",
            "tu — te",
            "você / ele / ela — o, a",
            "nós — nos",
            "vocês — vos",
            "eles / elas — os, as",
          ],
        },
        {
          examples: [
            "— A Ana vai à festa? — Vai. Eu convidei-a.",
            "— Podes levar as revistas. Já as li.",
            "— Não consigo levantar o caixote. Ajudas-me? — Ajudo-te já. É só um minuto.",
            "— Encontraste o Pedro? — Não. Já não o encontrei.",
            "— Onde é que tens os ingressos? Perdeste-os? — Não. Guardei-os na mala.",
            "— Podes levar-nos a casa? — Está bem. Eu levo-vos.",
          ],
        },
        {
          heading: "Formas verbais terminadas em -r, -s, -z: o pronome fica -lo, -la, -los, -las",
          examples: [
            "Vou convidar os meus amigos. → Vou convidá-los.",
            "Vou ver esse filme. → Vou vê-lo.",
            "Pagas a conta? → Paga-la?",
            "Bebes o leite todo. → Bebe-lo todo.",
            "Ele faz os exercícios em casa. → Ele fá-los em casa.",
            "Traz a tua irmã à festa. → Trá-la à festa.",
          ],
          note: "Exceções: Ele quer os chocolates. → Ele quere-os. / Tu tens a minha caneta. → Tu tem-la.",
        },
        {
          heading: "Formas verbais terminadas em -ão, -õe, -m: o pronome fica -no, -na, -nos, -nas",
          examples: [
            "Eles dão o dinheiro ao empregado. → Eles dão-no ao empregado.",
            "Ela põe a mesa. → Ela põe-na.",
            "Comam os bolos. → Comam-nos.",
          ],
        },
      ],
    },
    exercises: [
      {
        id: "36.1",
        instructions: "Complete com as formas corretas dos pronomes.",
        note: "O exemplo do livro é: Eu conheço a Ana e a Ana conhece-me.",
        type: "blank",
        items: [
          { n: 2, prompt: "Tu conheces a Ana e a Ana conhece-___.", answers: ["te"] },
          { n: 3, prompt: "Ela conhece a Ana e a Ana conhece-___.", answers: ["a"] },
          { n: 4, prompt: "Ele conhece a Ana e a Ana conhece-___.", answers: ["o"] },
          { n: 5, prompt: "Nós conhecemos a Ana e a Ana conhece-___.", answers: ["nos"] },
          { n: 6, prompt: "Vocês conhecem a Ana e a Ana conhece-___.", answers: ["vos"] },
          { n: 7, prompt: "Eles conhecem a Ana e a Ana conhece-___.", answers: ["os"] },
          { n: 8, prompt: "Elas conhecem a Ana e a Ana conhece-___.", answers: ["as"] },
        ],
      },
      {
        id: "36.2",
        instructions:
          "Substitua o complemento direto pelo pronome correspondente e faça as alterações necessárias.",
        note: "O exemplo do livro é: Fomos buscar os nossos amigos à estação. → Fomos buscá-los à estação.",
        type: "construct",
        items: [
          { n: 2, cue: "Tens visto a Inês?", answer: "Tem-la visto?" },
          { n: 3, cue: "Não comam o bolo todo.", answer: "Não o comam todo." },
          { n: 4, cue: "Podes guardar a revista. Já li a revista.", answer: "Podes guardá-la. Já a li." },
          { n: 5, cue: "Puseram os casacos e saíram.", answer: "Puseram-nos e saíram." },
          { n: 6, cue: "Vês o filme conosco?", answer: "Vê-lo conosco?" },
          { n: 7, cue: "Fechem a porta à chave.", answer: "Fechem-na à chave." },
          { n: 8, cue: "Ajuda-me a levantar o caixote.", answer: "Ajuda-me a levantá-lo." },
          { n: 9, cue: "Façam bem as camas.", answer: "Façam-nas bem." },
          { n: 10, cue: "Põe os livros na mochila.", answer: "Põe-nos na mochila." },
          { n: 11, cue: "Também convidámos os professores.", answer: "Também os convidámos." },
          { n: 12, cue: "Levem o João e a Ana no carro.", answer: "Levem-nos no carro." },
          { n: 13, cue: "Encontraste o meu irmão?", answer: "Encontraste-o?" },
          { n: 14, cue: "Deixei a carteira e os documentos na escola.", answer: "Deixei-os na escola." },
          { n: 15, cue: "Faz os exercícios em casa.", answer: "Fá-los em casa." },
          { n: 16, cue: "Gostei de ouvir o Primeiro Ministro.", answer: "Gostei de ouvi-lo." },
          { n: 17, cue: "Aqueçam o leite.", answer: "Aqueçam-no." },
          { n: 18, cue: "Tenho que ler os relatórios.", answer: "Tenho que lê-los." },
          { n: 19, cue: "Tem as fotografias consigo?", answer: "Tem-nas consigo?" },
          { n: 20, cue: "Dão a lembrança à Ana?", answer: "Dão-na à Ana?" },
        ],
      },
      {
        id: "36.3",
        instructions: "Complete com a forma correta do pronome.",
        note: "O exemplo do livro é: Ajudas-me a fazer o exercício? Sozinho não consigo.",
        type: "blank",
        items: [
          { n: 2, prompt: "Nós também vamos à festa. O Paulo convidou-___.", answers: ["nos"] },
          { n: 3, prompt: "Se não tens carona, levo-___ a casa.", answers: ["te"] },
          {
            n: 4,
            prompt: "Ele não falou com vocês?! Então é porque não ___ conhece.",
            answers: ["vos"],
          },
          { n: 5, prompt: "Quando estive no hospital, eles foram lá ver-___.", answers: ["me"] },
          { n: 6, prompt: "Já assinei o contrato. Assinei-___ hoje de manhã.", answers: ["o"] },
          { n: 7, prompt: "Li a poesia, mas achei-___ difícil.", answers: ["a"] },
          { n: 8, prompt: "Queria umas bananas, mas não ___ quero muito maduras.", answers: ["as"] },
          { n: 9, prompt: "Vocês não me viram, mas eu vi-___ à porta do cinema.", answers: ["vos"] },
          { n: 10, prompt: "Não encontro os meus óculos. Não sei onde ___ pus.", answers: ["os"] },
        ],
      },
    ],
  },
  {
    n: 37,
    title: "me, te, lhe; mo, ma, lho, lha",
    subtitle: "pronomes complemento indireto e contrações",
    theory: {
      intro: [
        "Escrevi-lhes uma carta, mas eles ainda não me escreveram.",
        "— Já deste a lembrança ao Pedro? Ele faz anos. — Dei-lha hoje de manhã.",
      ],
      table: null,
      sections: [
        {
          heading: "Complemento indireto",
          examples: [
            "eu — me",
            "tu — te",
            "você / ele / ela — lhe",
            "nós — nos",
            "vocês — vos",
            "eles / elas — lhes",
          ],
        },
        {
          examples: [
            "— Os meus amigos mandaram-me um postal.",
            "— Eu escrevi-lhes uma carta.",
            "— Apetece-te alguma coisa? — Apetece-me um gelado.",
            "— O que é que nos perguntaste? — Perguntei-vos se vocês estão em casa hoje à noite.",
            "— Ofereci-lhe um ramo de flores e ela gostou muito.",
            "— Posso fazer-lhe uma pergunta, sr. Ramos?",
            "— O João não foi à festa, porque não lhe disseram nada.",
          ],
        },
        {
          heading: "Contrações — complemento indireto + complemento direto",
          examples: [
            "me + o = mo · me + a = ma · me + os = mos · me + as = mas",
            "te + o = to · te + a = ta · te + os = tos · te + as = tas",
            "lhe + o = lho · lhe + a = lha · lhe + os = lhos · lhe + as = lhas",
          ],
        },
        {
          examples: [
            "Dá-me esse livro. → Dá-mo.",
            "Dá-me essa borracha. → Dá-ma.",
            "Dá-me esses óculos. → Dá-mos.",
            "Dá-me essas canetas. → Dá-mas.",
            "Já te emprestei o caderno. → Emprestei-to ontem.",
            "Já te emprestei a cassete. → Emprestei-ta ontem.",
            "Já te emprestei os livros. → Emprestei-tos ontem.",
            "Já te emprestei as revistas. → Emprestei-tas ontem.",
            "Mandei-lhe o dinheiro. → Mandei-lho ontem.",
            "Mandei-lhe a encomenda. → Mandei-lha ontem.",
            "Mandei-lhe os catálogos. → Mandei-lhos ontem.",
            "Mandei-lhe as informações. → Mandei-lhas ontem.",
          ],
        },
      ],
    },
    exercises: [
      {
        id: "37.1",
        instructions: "Complete com as formas corretas dos pronomes.",
        note: "O exemplo do livro é: (Eu preciso do dicionário). Podes emprestar-me o dicionário?",
        type: "blank",
        items: [
          {
            n: 2,
            prompt: "(Tu precisas de 1.000$00). Vou emprestar-___ 1.000$00.",
            answers: ["te"],
          },
          { n: 3, prompt: "(Você quer informações). Vou enviar-___ informações.", answers: ["lhe"] },
          { n: 4, prompt: "(O Rui quer a bicicleta). Podes emprestar-___ a bicicleta?", answers: ["lhe"] },
          {
            n: 5,
            prompt: "(A Joana precisa duma blusa). Vou comprar-___ uma blusa.",
            answers: ["lhe"],
          },
          { n: 6, prompt: "(Nós recebemos a carta). Ela escreveu-___ uma carta.", answers: ["nos"] },
          { n: 7, prompt: "(Vocês querem ver a casa). Vou mostrar-___ a casa.", answers: ["vos"] },
          { n: 8, prompt: "(Eles querem conhecer a Ana). Vou apresentar-___ a Ana.", answers: ["lhes"] },
          {
            n: 9,
            prompt: "(A Ana e o Pedro precisam do carro). Vou emprestar-___ o carro.",
            answers: ["lhes"],
          },
          { n: 10, prompt: "(Elas gostaram do bolo). Vou servir-___ mais bolo.", answers: ["lhes"] },
        ],
      },
      {
        id: "37.2",
        instructions: "Complete com as formas contraídas dos pronomes.",
        note: "O exemplo do livro é: Esse livro é meu. Dá-mo.",
        type: "blank",
        items: [
          { n: 2, prompt: "Esses lápis são meus. Dá-___.", answers: ["mos"] },
          { n: 3, prompt: "Aqueles óculos são dele. Dá-___.", answers: ["lhos"] },
          { n: 4, prompt: "Essas canetas são dela. Dá-___.", answers: ["lhas"] },
          { n: 5, prompt: "Essas chaves são minhas. Dá-___.", answers: ["mas"] },
          { n: 6, prompt: "Aquela carteira é dela. Dá-___.", answers: ["lha"] },
          { n: 7, prompt: "Aquele caderno é dela. Dá-___.", answers: ["lho"] },
          { n: 8, prompt: "Essa mala é minha. Dá-___.", answers: ["ma"] },
        ],
      },
      {
        id: "37.3",
        instructions:
          "Substitua o complemento direto e o indireto pelo pronome correspondente. Depois faça a contração.",
        note: "São três passos: primeiro só o complemento direto, depois só o indireto e por fim os dois contraídos. O exemplo do livro é: O Pedro emprestou as cassetes à Ana. → O Pedro emprestou-as à Ana. / O Pedro emprestou-lhe as cassetes. / O Pedro emprestou-lhas.",
        type: "construct",
        items: [
          { n: "2a", cue: "Vou mostrar o quarto a ti. — só o direto", answer: "Vou mostrá-lo a ti." },
          { n: "2b", cue: "— só o indireto", answer: "Vou mostrar-te o quarto." },
          { n: "2c", cue: "— os dois contraídos", answer: "Vou mostrar-to." },
          {
            n: "3a",
            cue: "Ele ofereceu os ingressos a mim. — só o direto",
            answer: "Ele ofereceu-os a mim.",
          },
          { n: "3b", cue: "— só o indireto", answer: "Ele ofereceu-me os ingressos." },
          { n: "3c", cue: "— os dois contraídos", answer: "Ele ofereceu-mos." },
          {
            n: "4a",
            cue: "Já dei as informações ao sr. Oliveira. — só o direto",
            answer: "Já as dei ao sr. Oliveira.",
          },
          { n: "4b", cue: "— só o indireto", answer: "Já lhe dei as informações." },
          { n: "4c", cue: "— os dois contraídos", answer: "Já lhas dei." },
          {
            n: "5a",
            cue: "Eles contaram a história ao João. — só o direto",
            answer: "Eles contaram-na ao João.",
          },
          { n: "5b", cue: "— só o indireto", answer: "Eles contaram-lhe a história." },
          { n: "5c", cue: "— os dois contraídos", answer: "Eles contaram-lha." },
          {
            n: "6a",
            cue: "Mandei a encomenda à D. Maria. — só o direto",
            answer: "Mandei-a à D. Maria.",
          },
          { n: "6b", cue: "— só o indireto", answer: "Mandei-lhe a encomenda." },
          { n: "6c", cue: "— os dois contraídos", answer: "Mandei-lha." },
          { n: "7a", cue: "Demos a lembrança ao professor. — só o direto", answer: "Demo-la ao professor." },
          { n: "7b", cue: "— só o indireto", answer: "Demos-lhe a lembrança." },
          { n: "7c", cue: "— os dois contraídos", answer: "Demos-lha." },
          {
            n: "8a",
            cue: "Entregaste os livros ao aluno? — só o direto",
            answer: "Entregaste-os ao aluno?",
          },
          { n: "8b", cue: "— só o indireto", answer: "Entregaste-lhe os livros?" },
          { n: "8c", cue: "— os dois contraídos", answer: "Entregaste-lhos?" },
          {
            n: "9a",
            cue: "Já pagaste a renda ao senhorio? — só o direto",
            answer: "Já a pagaste ao senhorio?",
          },
          { n: "9b", cue: "— só o indireto", answer: "Já lhe pagaste a renda?" },
          { n: "9c", cue: "— os dois contraídos", answer: "Já lha pagaste?" },
          {
            n: "10a",
            cue: "Mostrámos o apartamento à Ana. — só o direto",
            answer: "Mostrámo-lo à Ana.",
          },
          { n: "10b", cue: "— só o indireto", answer: "Mostrámos-lhe o apartamento." },
          { n: "10c", cue: "— os dois contraídos", answer: "Mostrámos-lho." },
          {
            n: "11a",
            cue: "Emprestei o dicionário ao teu irmão. — só o direto",
            answer: "Emprestei-o ao teu irmão.",
          },
          { n: "11b", cue: "— só o indireto", answer: "Emprestei-lhe o dicionário." },
          { n: "11c", cue: "— os dois contraídos", answer: "Emprestei-lho." },
          { n: "12a", cue: "Só contei a conversa a ti. — só o direto", answer: "Só a contei a ti." },
          { n: "12b", cue: "— só o indireto", answer: "Só te contei a conversa." },
          { n: "12c", cue: "— os dois contraídos", answer: "Só ta contei." },
        ],
      },
    ],
  },
  {
    n: 38,
    title: "voz passiva",
    subtitle: "ser + particípio passado",
    theory: {
      intro: [
        "ativa: Camões escreveu «Os Lusíadas».",
        "passiva: «Os Lusíadas» foram escritos por Camões.",
      ],
      table: null,
      sections: [
        {
          heading: "Na voz passiva usamos:",
          examples: [
            "o complemento direto da ativa, que passa a sujeito na passiva;",
            "o verbo auxiliar ser no mesmo tempo do verbo principal da ativa, seguido do particípio passado;",
            "o particípio passado, que concorda em gênero e número com o novo sujeito;",
            "o agente precedido de por: por + o = pelo · por + a = pela · por + os = pelos · por + as = pelas.",
          ],
        },
        {
          heading: "Presente",
          examples: [
            "A empregada limpa as salas todos os dias. → As salas são limpas todos os dias pela empregada.",
            "O mecânico está arranjando o carro. → O carro está sendo arranjado pelo mecânico.",
          ],
        },
        {
          heading: "Passado",
          examples: [
            "A Ana comprou essas flores. → Essas flores foram compradas pela Ana.",
            "O sr. Ramos alugava a casa no verão. → A casa era alugada no verão pelo sr. Ramos.",
            "O sr. Ramos tinha alugado o apartamento. → O apartamento tinha sido alugado pelo sr. Ramos.",
          ],
        },
        {
          heading: "Futuro",
          examples: [
            "A Câmara vai construir mais prédios. → Mais prédios vão ser construídos pela Câmara.",
            "A televisão independente gravará o espetáculo. → O espetáculo será gravado pela televisão independente.",
          ],
        },
        {
          heading: "Omissão do agente da passiva",
          examples: [
            "Assaltaram o banco ontem à noite. → O banco foi assaltado ontem à noite.",
            "Vão construir novas estradas. → Novas estradas vão ser construídas.",
          ],
          note: "Quando na ativa o sujeito é indeterminado e não está expresso, omite-se o agente da passiva.",
        },
      ],
    },
    exercises: [
      {
        id: "38.1",
        instructions: "Faça frases na passiva.",
        note: "O exemplo do livro é: O jornalista Rui Silva escreveu o artigo. → O artigo foi escrito pelo jornalista Rui Silva.",
        type: "construct",
        items: [
          {
            n: 2,
            cue: "O Presidente vai inaugurar a exposição. — A exposição…",
            answer: "vai ser inaugurada pelo Presidente.",
          },
          { n: 3, cue: "A Companhia oferece o almoço.", answer: "O almoço é oferecido pela Companhia." },
          {
            n: 4,
            cue: "O canal 6 transmitirá o jogo para toda a Europa.",
            answer: "O jogo será transmitido para toda a Europa pelo canal 6.",
          },
          {
            n: 5,
            cue: "A empregada já tinha limpo os quartos.",
            answer: "Os quartos já tinham sido limpos pela empregada.",
          },
          {
            n: 6,
            cue: "O clima da região atrai muitos turistas.",
            answer: "Muitos turistas são atraídos pelo clima da região.",
          },
          { n: 7, cue: "O barulho acordou as crianças.", answer: "As crianças foram acordadas pelo barulho." },
          {
            n: 8,
            cue: "Essa empresa tem contratado muitos jovens.",
            answer: "Muitos jovens têm sido contratados por essa empresa.",
          },
          {
            n: 9,
            cue: "A nossa equipe ganhou o 1.º prêmio.",
            answer: "O 1.º prêmio foi ganho pela nossa equipe.",
          },
          {
            n: 10,
            cue: "As crianças da primária fizeram os desenhos.",
            answer: "Os desenhos foram feitos pelas crianças da primária.",
          },
        ],
      },
      {
        id: "38.2",
        instructions: "Ponha as frases na passiva.",
        note: "Aqui o agente não se diz, porque na ativa o sujeito é indeterminado. O exemplo do livro é: Chamaram a ambulância imediatamente. → A ambulância foi chamada imediatamente.",
        type: "construct",
        items: [
          {
            n: 2,
            cue: "Viram o criminoso perto da fronteira. — O criminoso…",
            answer: "foi visto perto da fronteira.",
          },
          {
            n: 3,
            cue: "Assaltaram o banco na noite passada.",
            answer: "O banco foi assaltado na noite passada.",
          },
          { n: 4, cue: "Aumentaram os impostos.", answer: "Os impostos foram aumentados." },
          { n: 5, cue: "Vão construir mais escolas.", answer: "Mais escolas vão ser construídas." },
          {
            n: 6,
            cue: "Vão abrir o hotel no próximo verão.",
            answer: "O hotel vai ser aberto no próximo verão.",
          },
        ],
      },
      {
        id: "38.3",
        instructions: "Complete com o verbo na passiva.",
        note: "O exemplo do livro é: Onde está a minha bicicleta? (roubar) → Foi roubada?!",
        type: "blank",
        items: [
          { n: 2, prompt: "O que é que aconteceu à ponte? (destruir) — ___?!", answers: ["Foi destruída"] },
          { n: 3, prompt: "Onde está o meu carro? (rebocar) — ___?!", answers: ["Foi rebocado"] },
          {
            n: 4,
            prompt: "Porque é que há tantos policiais no banco? (assaltar) — ___?!",
            answers: ["Foi assaltado"],
          },
          { n: 5, prompt: "Onde estão os documentos? (roubar) — ___?!", answers: ["Foram roubados"] },
          {
            n: 6,
            prompt: "O que é que aconteceu àquela senhora? (atacar) — ___?!",
            answers: ["Foi atacada"],
          },
        ],
      },
      {
        id: "38.4",
        instructions: "Responda com uma frase na passiva.",
        note: "O exemplo do livro é: — Foste tu que pagaste o jantar? — Sim, sim. O jantar foi pago por mim.",
        type: "construct",
        items: [
          {
            n: 2,
            cue: "— Foi a Ana que ganhou o jogo? — Sim, sim. O jogo…",
            answer: "foi ganho pela Ana.",
          },
          {
            n: 3,
            cue: "— Foi o Pedro que encontrou os documentos? — Sim, sim.",
            answer: "Os documentos foram encontrados pelo Pedro.",
          },
          {
            n: 4,
            cue: "— Foi a agência que ofereceu a viagem? — Sim, sim.",
            answer: "A viagem foi oferecida pela agência.",
          },
          {
            n: 5,
            cue: "— Foram vocês que encomendaram as flores? — Sim, sim.",
            answer: "As flores foram encomendadas por nós.",
          },
          {
            n: 6,
            cue: "— Foi ele que fez os exercícios? — Sim, sim.",
            answer: "Os exercícios foram feitos por ele.",
          },
          {
            n: 7,
            cue: "— Foram eles que escreveram o artigo? — Sim, sim.",
            answer: "O artigo foi escrito por eles.",
          },
          { n: 8, cue: "— Fui eu que parti o vidro? — Sim, sim.", answer: "O vidro foi partido por ti." },
        ],
      },
    ],
  },
  {
    n: 39,
    title: "estar + particípio passado",
    subtitle: "passiva de resultado e particípios duplos",
    theory: {
      intro: [
        "Os sapatos estavam sujos. Ele limpou os sapatos. Agora os sapatos estão limpos.",
        "A janela estava fechada. Ela abriu a janela. Agora a janela está aberta.",
      ],
      table: null,
      sections: [
        {
          heading: "Passiva de resultado — estar + particípio passado",
          examples: [
            "Já fizeram os exercícios. = Os exercícios já foram feitos. → Os exercícios estão feitos.",
            "O João pagou o almoço. = O almoço foi pago pelo João. → O almoço está pago.",
            "Já marcaram a reunião. = A reunião já foi marcada. → A reunião está marcada.",
            "Assinaram ontem o contrato. = O contrato foi assinado ontem. → O contrato está assinado.",
          ],
        },
        {
          heading: "Particípios duplos — regular (com ter) · irregular (com ser e estar)",
          examples: [
            "aceitar — aceitado · aceito",
            "acender — acendido · aceso",
            "entregar — entregado · entregue",
            "matar — matado · morto",
            "prender — prendido · preso",
            "romper — rompido · roto",
            "salvar — salvado · salvo",
            "secar — secado · seco",
          ],
          note: "Com ter usa-se o particípio regular, que é invariável; com ser e estar usa-se o irregular, que concorda em gênero e número com o sujeito. O livro (português europeu) dá aceite onde no Brasil se diz aceito.",
        },
        {
          examples: [
            "Os bombeiros tinham salvado as crianças. = As crianças tinham sido salvas pelos bombeiros. → As crianças estavam salvas.",
            "Quando cheguei a casa, alguém já tinha acendido as luzes. = as luzes já tinham sido acesas. → as luzes já estavam acesas.",
            "A polícia tem prendido vários membros da quadrilha. = Vários membros da quadrilha têm sido presos. → Vários membros da quadrilha estão presos.",
          ],
        },
      ],
    },
    exercises: [
      {
        id: "39.1",
        instructions: "Complete as frases com estar + particípio passado, exprimindo o resultado da ação.",
        note: "O exemplo do livro é: Já foi tudo combinado. Portanto, está tudo combinado.",
        type: "blank",
        items: [
          { n: 2, prompt: "A janela foi fechada. Portanto, a janela ___.", answers: ["está fechada"] },
          {
            n: 3,
            prompt: "Os sapatos foram limpos. Portanto, ___.",
            answers: ["os sapatos estão limpos"],
          },
          {
            n: 4,
            prompt: "Os alunos foram informados. Portanto, ___.",
            answers: ["os alunos estão informados"],
          },
          { n: 5, prompt: "O quarto já foi arrumado. Portanto, ___.", answers: ["o quarto está arrumado"] },
          {
            n: 6,
            prompt: "O contrato foi assinado. Portanto, ___.",
            answers: ["o contrato está assinado"],
          },
          {
            n: 7,
            prompt: "A encomenda foi entregue. Portanto, ___.",
            answers: ["a encomenda está entregue"],
          },
          { n: 8, prompt: "A resposta foi dada. Portanto, ___.", answers: ["a resposta está dada"] },
          { n: 9, prompt: "O carro foi arranjado. Portanto, ___.", answers: ["o carro está arranjado"] },
          { n: 10, prompt: "As contas já foram feitas. Portanto, ___.", answers: ["as contas estão feitas"] },
        ],
      },
      {
        id: "39.2",
        instructions: "Faça frases com estar + particípio passado.",
        note: "O exemplo do livro é: Já paguei a conta. → A conta está paga.",
        type: "blank",
        items: [
          { n: 2, prompt: "A empregada fez as camas. As camas ___.", answers: ["estão feitas"] },
          { n: 3, prompt: "Alguém acendeu as luzes. — ___.", answers: ["As luzes estão acesas"] },
          {
            n: 4,
            prompt: "O professor já corrigiu os testes. — ___.",
            answers: ["Os testes estão corrigidos"],
          },
          { n: 5, prompt: "A Ana pôs a mesa. — ___.", answers: ["A mesa está posta"] },
          { n: 6, prompt: "Ele abriu a porta. — ___.", answers: ["A porta está aberta"] },
          {
            n: 7,
            prompt: "Já informei as pessoas. — ___.",
            answers: ["As pessoas estão informadas"],
          },
          { n: 8, prompt: "Ela rompeu o vestido. — ___.", answers: ["O vestido está roto"] },
          {
            n: 9,
            prompt: "Ele entregou os documentos. — ___.",
            answers: ["Os documentos estão entregues"],
          },
          { n: 10, prompt: "Já sequei o cabelo. — ___.", answers: ["O cabelo está seco"] },
        ],
      },
      {
        id: "39.3",
        instructions:
          "Transforme as frases destacadas em frases passivas com o auxiliar estar + particípio passado.",
        note: "No livro já vêm resolvidos o item 1 (Quando me sentei, vi que tinha rompido a saia. → …vi que a saia estava rota.) e o 2 (A minha blusa de lã já foi lavada? → A minha blusa de lã já está lavada?).",
        type: "blank",
        items: [
          {
            n: 3,
            prompt: "A máquina de lavar louça não funcionava. ___? (Já foi arranjada?)",
            answers: ["Já está arranjada"],
          },
          {
            n: 4,
            prompt: "___. Agora já não lhe doem. (O dentista arranjou-lhe os dentes.)",
            answers: ["Os dentes estão arranjados"],
          },
          {
            n: 5,
            prompt: "Podem sair depois de ___. (fazerem os exercícios)",
            answers: ["os exercícios estarem feitos"],
          },
          {
            n: 6,
            prompt: "A polícia anunciou que ___. (tinham matado o chefe da quadrilha)",
            answers: ["O chefe da quadrilha estava morto"],
          },
          { n: 7, prompt: "___. Venham jantar, meninos. (Já pus a mesa.)", answers: ["A mesa já está posta"] },
          {
            n: 8,
            prompt:
              "Quando os bombeiros chegaram ao local do incêndio, ___. (todas as pessoas já tinham sido salvas)",
            answers: ["Todas as pessoas já estavam salvas"],
          },
        ],
      },
    ],
  },
  {
    n: 40,
    title: "vendem-se apartamentos",
    subtitle: "palavra apassivante se",
    theory: {
      intro: ["Fala-se inglês.", "Vendem-se apartamentos."],
      table: null,
      sections: [
        {
          heading: "Usamos a palavra apassivante se:",
          examples: [
            "quando o sujeito da ativa é completamente desconhecido, indeterminado ou irrelevante para a informação;",
            "a partícula se coloca-se antes ou depois do verbo, conforme a regra de colocação dos pronomes (Unidade 14);",
            "o verbo — sempre na forma ativa — concorda com o sujeito: 3.ª pessoa do singular se o sujeito é singular, 3.ª pessoa do plural se é plural.",
          ],
        },
        {
          examples: [
            "Em Portugal as pessoas veem muito televisão. → Em Portugal vê-se muito televisão.",
            "Marcaram a reunião para amanhã às 9h. → Marcou-se a reunião para amanhã às 9h.",
            "Nessa loja aceitam cartões de crédito. → Aceitam-se cartões de crédito.",
            "Os gritos foram ouvidos na rua. → Ouviram-se os gritos na rua.",
            "Foram feitos três testes durante o ano. → Fizeram-se três testes durante o ano.",
          ],
        },
      ],
    },
    exercises: [
      {
        id: "40.1",
        instructions: "Faça frases com a palavra apassivante se.",
        note: "O exemplo do livro é: alugar / quartos → Alugam-se quartos.",
        type: "construct",
        items: [
          { n: 2, cue: "precisar de / motorista", answer: "Precisa-se de motorista." },
          { n: 3, cue: "vender / apartamentos", answer: "Vendem-se apartamentos." },
          { n: 4, cue: "comprar / roupas usadas", answer: "Compram-se roupas usadas." },
          { n: 5, cue: "falar / francês", answer: "Fala-se francês." },
          { n: 6, cue: "dar / explicações", answer: "Dão-se explicações." },
          { n: 7, cue: "alugar / sala para congressos", answer: "Aluga-se sala para congressos." },
          { n: 8, cue: "servir / cafés da manhã", answer: "Servem-se cafés da manhã." },
          { n: 9, cue: "admitir / cozinheiras", answer: "Admitem-se cozinheiras." },
          { n: 10, cue: "aceitar / cheques", answer: "Aceitam-se cheques." },
        ],
      },
      {
        id: "40.2",
        instructions: "Transforme as frases na ativa em frases com a palavra apassivante se.",
        note: "Escreve só a parte que continua a frase começada. O exemplo do livro é: Em Portugal as pessoas veem muito televisão. → Em Portugal vê-se muito televisão.",
        type: "construct",
        items: [
          {
            n: 2,
            cue: "No Norte as pessoas bebem muito vinho. — No Norte…",
            answer: "bebe-se muito vinho.",
          },
          {
            n: 3,
            cue: "No Natal as pessoas comem bacalhau à consoada. — No Natal…",
            answer: "come-se bacalhau à consoada.",
          },
          {
            n: 4,
            cue: "Com o calor as pessoas trabalham menos. — Com o calor…",
            answer: "trabalha-se menos.",
          },
          {
            n: 5,
            cue: "Em junho as pessoas festejam os Santos Populares. — Em junho…",
            answer: "festejam-se os Santos Populares.",
          },
          {
            n: 6,
            cue: "Para atravessar o rio as pessoas pegam o barco. — Para atravessar o rio…",
            answer: "pega-se o barco.",
          },
        ],
      },
      {
        id: "40.3",
        instructions: "Transforme as frases na ativa em frases passivas com a palavra apassivante se.",
        note: "O exemplo do livro é: Inauguraram ontem a ponte. → Inaugurou-se ontem a ponte.",
        type: "construct",
        items: [
          {
            n: 2,
            cue: "Alugaram dois ônibus para o passeio.",
            answer: "Alugaram-se dois ônibus para o passeio.",
          },
          {
            n: 3,
            cue: "Antigamente compravam mais livros.",
            answer: "Antigamente compravam-se mais livros.",
          },
          {
            n: 4,
            cue: "Ultimamente têm construído muitas escolas.",
            answer: "Ultimamente têm-se construído muitas escolas.",
          },
          { n: 5, cue: "Já marcaram a viagem.", answer: "Já se marcou a viagem." },
          { n: 6, cue: "Fizeram obras no museu.", answer: "Fizeram-se obras no museu." },
        ],
      },
      {
        id: "40.4",
        instructions:
          "Transforme as frases na passiva (ser + particípio passado) em frases com a palavra apassivante se.",
        note: "O exemplo do livro é: A alface é lavada e temperada em seguida. → Lava-se a alface e tempera-se em seguida.",
        type: "construct",
        items: [
          {
            n: 2,
            cue: "As batatas são cozidas e depois descascadas.",
            answer: "Cozem-se as batatas e depois descascam-se.",
          },
          { n: 3, cue: "Os ovos são batidos com o açúcar.", answer: "Batem-se os ovos com o açúcar." },
          {
            n: 4,
            cue: "A carne é picada e depois misturada com o molho.",
            answer: "Pica-se a carne e depois mistura-se com o molho.",
          },
          {
            n: 5,
            cue: "O peixe é arranjado e passado por farinha.",
            answer: "Arranja-se o peixe e passa-se por farinha.",
          },
          {
            n: 6,
            cue: "O queijo é cortado e posto no pão.",
            answer: "Corta-se o queijo e põe-se no pão.",
          },
        ],
      },
    ],
  },
];
