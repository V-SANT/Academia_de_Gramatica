// Unidades 16-20 da "Gramática Ativa 1" (Lidel).
// O formato de cada unidade está documentado em ../units.js.

export const UNIDADES_16_20 = [
  {
    n: 16,
    title: "costumar (imperfeito) + infinitivo",
    subtitle: "ação habitual no passado",
    theory: {
      intro: [
        "Ele costumava ir a pé para o trabalho; agora vai de carro.",
        "Eu costumava usar óculos; agora uso lentes de contato.",
      ],
      table: {
        verb: "costumar (imp.) + infinitivo — ler / trabalhar / viajar",
        rows: [
          ["eu", "costumava"],
          ["tu", "costumavas"],
          ["você / ele / ela", "costumava"],
          ["nós", "costumávamos"],
          ["vocês / eles / elas", "costumavam"],
        ],
      },
      sections: [
        {
          heading: "Ação habitual: no passado / no presente",
          examples: [
            "Costumávamos viajar muito; agora viajamos pouco.",
            "Quando era nova, costumava viver em casa dos pais; agora vive sozinha.",
            "À sexta-feira à noite costumava ficar em casa; agora saio sempre.",
            "Naquele tempo costumava haver pouco trânsito; agora há mais.",
            "Quando morava na cidade, costumava andar de carro; agora moro no campo e ando a pé.",
          ],
        },
      ],
    },
    exercises: [
      {
        id: "16.1",
        instructions: "Faça frases com o verbo no imperfeito e no presente do indicativo.",
        note: "O exemplo do livro é: (eles) / levantar-se / cedo — agora / tarde → Costumavam levantar-se cedo; agora levantam-se tarde.",
        type: "construct",
        items: [
          {
            n: 2,
            cue: "(eu) / trabalhar / num escritório — agora / num banco",
            answer: "(Eu) costumava trabalhar num escritório; agora trabalho num banco.",
          },
          {
            n: 3,
            cue: "Ao domingo / (eles) / ficar / em casa — agora / ir / ao cinema",
            answer: "Ao domingo (eles) costumavam ficar em casa; agora vão ao cinema.",
          },
          {
            n: 4,
            cue: "(nós) / ter férias / em julho — agora / em agosto",
            answer: "(Nós) costumávamos ter férias em julho; agora temos férias em agosto.",
          },
          {
            n: 5,
            cue: "(ele) / ser / muito gordo — agora / magro",
            answer: "(Ele) costumava ser muito gordo; agora é magro.",
          },
          {
            n: 6,
            cue: "A Ana / estudar / pouco — agora / muito",
            answer: "A Ana costumava estudar pouco; agora estuda muito.",
          },
          {
            n: 7,
            cue: "O sr. Machado / chegar atrasado — agora / a horas",
            answer: "O sr. Machado costumava chegar atrasado; agora chega a horas.",
          },
          {
            n: 8,
            cue: "(eu) / praticar esporte — agora / não fazer nada",
            answer: "(Eu) costumava praticar esporte; agora não faço nada.",
          },
          {
            n: 9,
            cue: "Aos sábados / (ela) / ir à praça — agora / ao supermercado",
            answer: "Aos sábados (ela) costumava ir à praça; agora vai ao supermercado.",
          },
          {
            n: 10,
            cue: "As crianças / brincar em casa — agora / no jardim",
            answer: "As crianças costumavam brincar em casa; agora brincam no jardim.",
          },
          {
            n: 11,
            cue: "O João / viver com os pais — agora / sozinho",
            answer: "O João costumava viver com os pais; agora vive sozinho.",
          },
        ],
      },
      {
        id: "16.2",
        instructions: "Faça frases com os verbos no imperfeito.",
        note: "Cada situação leva duas frases: primeiro o que não havia, depois o que as pessoas costumavam fazer. O exemplo do livro é: máquinas de lavar // lavar tudo à mão → Antigamente não havia máquinas de lavar. As pessoas costumavam lavar tudo à mão.",
        type: "construct",
        items: [
          { n: "2a", cue: "aviões // viajar de trem — Antigamente…", answer: "Antigamente não havia aviões." },
          { n: "2b", cue: "— As pessoas…", answer: "As pessoas costumavam viajar de trem." },
          { n: "3a", cue: "carros // andar mais a pé — Antigamente…", answer: "Antigamente não havia carros." },
          { n: "3b", cue: "— As pessoas…", answer: "As pessoas costumavam andar mais a pé." },
          { n: "4a", cue: "telefones // escrever cartas — Antigamente…", answer: "Antigamente não havia telefones." },
          { n: "4b", cue: "— As pessoas…", answer: "As pessoas costumavam escrever cartas." },
          { n: "5a", cue: "televisão // conversar mais — Antigamente…", answer: "Antigamente não havia televisão." },
          { n: "5b", cue: "— As pessoas…", answer: "As pessoas costumavam conversar mais." },
          { n: "6a", cue: "cinema // ir ao teatro — Antigamente…", answer: "Antigamente não havia cinema." },
          { n: "6b", cue: "— As pessoas…", answer: "As pessoas costumavam ir ao teatro." },
        ],
      },
      {
        id: "16.3",
        instructions: "O que é que eles costumavam fazer, quando viviam no campo?",
        note: "O exemplo do livro é: (levantar-se cedo) → Costumavam levantar-se cedo.",
        type: "construct",
        items: [
          {
            n: 2,
            cue: "a mãe / fazer compras / na mercearia local",
            answer: "A mãe costumava fazer compras na mercearia local.",
          },
          { n: 3, cue: "as crianças / brincar / na rua", answer: "As crianças costumavam brincar na rua." },
          {
            n: 4,
            cue: "à tarde / (eles) / dar passeios de bicicleta",
            answer: "À tarde costumavam dar passeios de bicicleta.",
          },
          {
            n: 5,
            cue: "aos domingos / (eles) / fazer um piquenique",
            answer: "Aos domingos costumavam fazer um piquenique.",
          },
        ],
      },
    ],
  },
  {
    n: 17,
    title: "idade e horas no passado; ações simultâneas no passado",
    subtitle: "pretérito imperfeito do indicativo",
    theory: {
      intro: [
        "Tinha 4 anos quando fui ao cinema pela primeira vez.",
        "Era meia-noite quando a festa acabou.",
      ],
      table: null,
      sections: [
        {
          heading: "Usa-se o pretérito imperfeito para:",
          examples: [
            { text: "Tinha 4 anos.", tag: "idade no passado" },
            { text: "Era meia-noite.", tag: "horas no passado" },
          ],
        },
        {
          heading: "Ações simultâneas no passado",
          examples: [
            {
              text: "Hoje de manhã, enquanto a Ana tomava banho, a irmã fazia as camas.",
              tag: "as duas ações decorrem ao mesmo tempo",
            },
          ],
          note: "Quando duas ações decorrem ao mesmo tempo no passado, as duas vão para o imperfeito e ligam-se com enquanto.",
        },
      ],
    },
    exercises: [
      {
        id: "17.1",
        instructions: "Complete as frases com os verbos ser ou ter no imperfeito.",
        type: "blank",
        items: [
          {
            n: 1,
            prompt: "— Quantos anos ___ quando foste para a escola? — ___ 6 anos. Mas o meu irmão ___ 5 anos.",
            answers: ["tinhas", "Tinha", "tinha"],
          },
          { n: 2, prompt: "___ 7 horas quando me levantei.", answers: ["Eram"] },
          { n: 3, prompt: "Chegaram muito tarde ontem à noite. Já ___ meia-noite.", answers: ["era"] },
          {
            n: 4,
            prompt: "A minha mãe ___ 18 anos e o meu pai ___ 20 quando se conheceram. ___ muito jovens.",
            answers: ["tinha", "tinha", "Eram"],
          },
          { n: 5, prompt: "Ainda não ___ 8 horas quando saímos de casa.", answers: ["eram"] },
        ],
      },
      {
        id: "17.2",
        instructions: "Faça frases com os verbos no imperfeito.",
        note: "O exemplo do livro é: (ele / vestir-se // ela / arranjar o café da manhã) → Enquanto ele se vestia, ela arranjava o café da manhã.",
        type: "construct",
        items: [
          {
            n: 2,
            cue: "os filhos / tomar banho // a mãe / arrumar os quartos",
            answer: "Enquanto os filhos tomavam banho, a mãe arrumava os quartos.",
          },
          {
            n: 3,
            cue: "eu / ver televisão // ele / ler o jornal",
            answer: "Enquanto eu via televisão, ele lia o jornal.",
          },
          {
            n: 4,
            cue: "eles / preparar as bebidas // nós / pôr a mesa",
            answer: "Enquanto eles preparavam as bebidas, nós púnhamos a mesa.",
          },
          {
            n: 5,
            cue: "ela / estar ao telefone // tomar notas",
            answer: "Enquanto ela estava ao telefone, tomava notas.",
          },
          {
            n: 6,
            cue: "a Ana e o João / estudar // ouvir música",
            answer: "Enquanto a Ana e o João estudavam, ouviam música.",
          },
          {
            n: 7,
            cue: "a orquestra / tocar // o sr. Ramos / dormir",
            answer: "Enquanto a orquestra tocava, o sr. Ramos dormia.",
          },
          {
            n: 8,
            cue: "as crianças / brincar // nós / conversar",
            answer: "Enquanto as crianças brincavam, nós conversávamos.",
          },
          {
            n: 9,
            cue: "o professor / ditar // nós / escrever os exercícios",
            answer: "Enquanto o professor ditava, nós escrevíamos os exercícios.",
          },
          {
            n: 10,
            cue: "a empregada / limpar a casa // eu / tratar das crianças",
            answer: "Enquanto a empregada limpava a casa, eu tratava das crianças.",
          },
        ],
      },
    ],
  },
  {
    n: 18,
    title: "estava fazendo / fiz",
    subtitle: "ação em curso no passado e ação pontual (p.p.s.)",
    theory: {
      intro: [
        "A Joana estava lendo um livro.",
        "O telefone tocou.",
        "A Joana estava lendo um livro quando o telefone tocou.",
      ],
      table: null,
      sections: [
        {
          heading: "Imperfeito vs. p.p.s.",
          examples: [
            { text: "A Joana estava lendo…", tag: "imperfeito — ação em curso (~)" },
            { text: "…quando o telefone tocou.", tag: "p.p.s. — ação pontual (•)" },
          ],
        },
        {
          heading: "Ontem à noite, das 21h às 23h",
          examples: [
            { text: "Começámos a ver o filme às 21h e acabámos às 23h.", tag: "p.p.s. — ação completa" },
            {
              text: "— O que é que estavam fazendo às 22h30? — Estávamos vendo o filme.",
              tag: "imperfeito — ação em curso",
            },
          ],
        },
        {
          examples: [
            "Estava vendo televisão quando me telefonaste.",
            "Quando saímos de casa, estava chovendo.",
            "Ontem choveu o dia todo.",
            "Os alunos estavam trabalhando quando o professor entrou.",
            "Hoje de manhã vi a Ana. Estava no café tomando o café da manhã.",
          ],
        },
      ],
    },
    exercises: [
      {
        id: "18.1",
        instructions: "Faça frases, usando o imperfeito ou o p.p.s.",
        note: "Cada situação leva três frases: a ação que estava em curso e as duas que aconteceram. O exemplo do livro é: (ela / ler o jornal) → Ela estava lendo o jornal. (o telefone / tocar) → O telefone tocou. (ela / atender o telefone) → Ela atendeu o telefone.",
        type: "construct",
        items: [
          { n: "2a", cue: "o João / dormir", answer: "O João estava dormindo." },
          { n: "2b", cue: "a mãe / entrar", answer: "A mãe entrou." },
          { n: "2c", cue: "ele / levantar-se", answer: "Ele levantou-se." },
          { n: "3a", cue: "o sr. Pinto / pintar a sala", answer: "O sr. Pinto estava pintando a sala." },
          { n: "3b", cue: "ele / cair da escada", answer: "Ele caiu da escada." },
          { n: "3c", cue: "ele / partir o braço", answer: "Ele partiu o braço." },
          { n: "4a", cue: "eles / estar no jardim", answer: "Eles estavam no jardim." },
          { n: "4b", cue: "começar a chover", answer: "Começou a chover." },
          { n: "4c", cue: "eles / ir para casa", answer: "Eles foram para casa." },
          { n: "5a", cue: "eu / ouvir música", answer: "Eu estava ouvindo música." },
          { n: "5b", cue: "o chefe / chegar", answer: "O chefe chegou." },
          { n: "5c", cue: "eu / desligar o rádio", answer: "Eu desliguei o rádio." },
        ],
      },
      {
        id: "18.2",
        instructions: "Faça frases com os verbos no imperfeito e p.p.s.",
        note: "O exemplo do livro é: (eles / chegar // a empregada / arrumar a casa) → A empregada estava arrumando a casa quando eles chegaram.",
        type: "construct",
        items: [
          {
            n: 2,
            cue: "o João / tomar banho // o telefone / tocar",
            answer: "O João estava tomando banho quando o telefone tocou.",
          },
          { n: 3, cue: "chover // nós / sair de casa", answer: "Estava chovendo quando nós saímos de casa." },
          {
            n: 4,
            cue: "os alunos / trabalhar // o professor / entrar",
            answer: "Os alunos estavam trabalhando quando o professor entrou.",
          },
          {
            n: 5,
            cue: "eu / ver televisão // os meus amigos / tocar à porta",
            answer: "Eu estava vendo televisão quando os meus amigos tocaram à porta.",
          },
          {
            n: 6,
            cue: "eles / jogar futebol // começar a chover",
            answer: "Eles estavam jogando futebol quando começou a chover.",
          },
          {
            n: 7,
            cue: "nós / trabalhar // o computador / avariar-se",
            answer: "Nós estávamos trabalhando quando o computador se avariou.",
          },
        ],
      },
      {
        id: "18.3",
        instructions: "Complete com o imperfeito ou p.p.s.",
        note: "Os dois primeiros itens vêm já resolvidos no livro: Estava chovendo (chover) quando (eu) saí (sair) de casa. / O que é que estavas fazendo (fazer) quando te telefonei (telefonar)?",
        type: "blank",
        items: [
          {
            n: 3,
            prompt: "Ontem à noite (eu) não ___ (ter) fome. Por isso, não ___ (comer) nada.",
            answers: ["tinha", "comi"],
          },
          { n: 4, prompt: "A Joana não ___ (estar) em casa quando eu lá ___ (ir).", answers: ["estava", "fui"] },
          {
            n: 5,
            prompt: "O carteiro ___ (chegar) enquanto nós ___ (tomar) o café da manhã.",
            answers: ["chegou", "tomávamos"],
          },
          {
            n: 6,
            prompt: "Eu ___ (estar) atrasado, mas os meus amigos ___ (estar) à espera quando (eu) ___ (chegar).",
            answers: ["estava", "estavam", "cheguei"],
          },
          { n: 7, prompt: "Ele não ___ (ir) à festa. ___ (estar) doente.", answers: ["foi", "Estava"] },
          {
            n: 8,
            prompt: "O que é que vocês ___ (fazer) no fim de semana passado? (Nós) ___ (ir) ao cinema.",
            answers: ["fizeram", "fomos"],
          },
          {
            n: 9,
            prompt: "Ontem às 20h (eu) ainda ___ (trabalhar). (Eu) ___ (sair) do escritório às 22h.",
            answers: ["estava trabalhando/trabalhava", "saí"],
          },
          {
            n: 10,
            prompt: "Quando (nós) ___ (encontrar) a Ana, ela ___ (trazer) um vestido preto.",
            answers: ["encontrámos", "trazia"],
          },
          {
            n: 11,
            prompt:
              "Enquanto (eu) ___ (tomar) café na esplanada, (eu) ___ (ouvir) um grande barulho. (Eu) ___ (levantar-se), ___ (olhar) à volta, mas não ___ (ver) nada.",
            answers: ["estava tomando/tomava", "ouvi", "levantei-me", "olhei", "vi"],
          },
          {
            n: 12,
            prompt: "Quando o João ___ (ser) pequeno, (ele) ___ (ser) gordo e ___ (usar) óculos.",
            answers: ["era", "era", "usava"],
          },
          {
            n: 13,
            prompt: "A irmã dele, ao contrário, ___ (ser) muito magra e não ___ (ter) óculos.",
            answers: ["era", "tinha"],
          },
          {
            n: 14,
            prompt: "Ele ___ (estar) com pressa quando (nós) ___ (falar) com ele.",
            answers: ["estava", "falámos"],
          },
          {
            n: 15,
            prompt: "Quando (eles) ___ (vir) para Lisboa, (eles) ___ (ver) um acidente na autoestrada.",
            answers: ["vinham", "viram"],
          },
        ],
      },
    ],
  },
  {
    n: 19,
    title: "queria / podia / gostava",
    subtitle: "imperfeito de cortesia; imperfeito com valor de condicional",
    theory: {
      intro: [
        "Queria um café, por favor.",
        "Podia dizer-me as horas, por favor?",
        "Gostava de viver num castelo.",
      ],
      table: null,
      sections: [
        {
          heading: "Usamos o imperfeito, forma de cortesia, para fazer delicadamente uma afirmação:",
          examples: [
            "— Queria falar com o Dr. Nunes, por favor.",
            "— Vamos ao cinema? — Preferia ir ao teatro.",
            "— Queria um cafezinho e um bolo, por favor.",
          ],
        },
        {
          heading: "Usamos o imperfeito, forma de cortesia, para fazer delicadamente um pedido:",
          examples: [
            "— Podia dizer-me onde é a Av. da República?",
            "— Trazia-me um copo de água, por favor?",
            "— Dizia-me as horas, por favor?",
          ],
        },
        {
          heading: "Usamos o imperfeito (= condicional) para expressar um desejo:",
          examples: ["— O meu filho queria ser médico.", "— Gostava de fazer uma grande viagem."],
        },
        {
          heading:
            "Usamos o imperfeito (= condicional) para falar de ações pouco prováveis de acontecerem, porque a condição de que dependem não se realiza no presente:",
          examples: [
            "— Eu ia com vocês, mas infelizmente não tenho tempo.",
            "— Sem a tua ajuda, João, eu não podia acabar o trabalho a tempo.",
          ],
        },
      ],
    },
    exercises: [
      {
        id: "19.1",
        instructions: "Complete as perguntas com o verbo no imperfeito (3.ª pessoa singular).",
        note: "O pronome fica colado ao verbo, como no exemplo do livro: Podia (poder) dizer-me onde ficam os Correios, por favor?",
        type: "blank",
        items: [
          { n: 2, prompt: "___-nos (trazer) a lista, por favor?", answers: ["Trazia"] },
          { n: 3, prompt: "___-me (passar) o açúcar, por favor?", answers: ["Passava"] },
          { n: 4, prompt: "___-me (dizer) as horas, por favor?", answers: ["Dizia"] },
          { n: 5, prompt: "___-me (dar) uma informação, por favor?", answers: ["Dava"] },
        ],
      },
      {
        id: "19.2",
        instructions: "Complete com os verbos no imperfeito.",
        note: "O exemplo do livro é: A Ana gostava (gostar) de tirar um curso nos Estados Unidos.",
        type: "blank",
        items: [
          { n: 2, prompt: "A minha irmã mais nova ___ (querer) ser professora.", answers: ["queria"] },
          { n: 3, prompt: "Eu ___ (ir) com vocês, mas tenho que estudar.", answers: ["ia"] },
          { n: 4, prompt: "Nós não ___ (conseguir) encontrar a rua sem o mapa.", answers: ["conseguíamos"] },
          { n: 5, prompt: "Hoje à noite (eu) ___ (preferir) ficar em casa.", answers: ["preferia"] },
          { n: 6, prompt: "De metrô (tu) ___ (chegar) mais depressa.", answers: ["chegavas"] },
          { n: 7, prompt: "Os meus filhos ___ (adorar) ir à Eurodisney!", answers: ["adoravam"] },
          { n: 8, prompt: "Já são 19h. (Eu) ___ (querer) acabar o trabalho às 18h!", answers: ["queria"] },
          { n: 9, prompt: "Ele ___ (ficar) muito contente com o teu telefonema.", answers: ["ficava"] },
          {
            n: 10,
            prompt: "Com a ajuda do professor ___ (ser) mais fácil resolver o exercício.",
            answers: ["era"],
          },
          { n: 11, prompt: "Com tanto calor ___-me (apetecer) uma cerveja!", answers: ["apetecia"] },
          {
            n: 12,
            prompt: "O João ___ (gostar) de ir à festa no próximo sábado, mas provavelmente não pode.",
            answers: ["gostava"],
          },
        ],
      },
      {
        id: "19.3",
        instructions: "Faça frases com os verbos no imperfeito (= condicional) e no presente do indicativo.",
        note: "O exemplo do livro é: Não tenho tempo. Por isso não vou com vocês. → Ia com vocês, mas não tenho tempo.",
        type: "construct",
        items: [
          {
            n: 2,
            cue: "Tenho que estudar. Por isso não vou ao cinema.",
            answer: "Ia ao cinema, mas tenho que estudar.",
          },
          {
            n: 3,
            cue: "Estou fazendo dieta. Por isso não como o bolo.",
            answer: "Comia o bolo, mas estou fazendo dieta.",
          },
          {
            n: 4,
            cue: "Eles não podem sair. Por isso não vão à festa.",
            answer: "Eles iam à festa, mas não podem sair.",
          },
          {
            n: 5,
            cue: "Não tenho dinheiro. Por isso não faço a viagem.",
            answer: "Fazia a viagem, mas não tenho dinheiro.",
          },
          { n: 6, cue: "O café faz mal. Por isso não tomo um café.", answer: "Tomava um café, mas o café faz mal." },
        ],
      },
    ],
  },
  {
    n: 20,
    title: "tinha feito",
    subtitle: "pretérito mais-que-perfeito composto do indicativo",
    theory: {
      intro: [
        "O trem partiu.",
        "Nós chegámos à estação.",
        "O trem já tinha partido quando nós chegámos à estação.",
      ],
      table: {
        verb: "ter (imperfeito) + particípio passado — chegado / estado / ido",
        rows: [
          ["eu", "tinha"],
          ["tu", "tinhas"],
          ["você / ele / ela", "tinha"],
          ["nós", "tínhamos"],
          ["vocês / eles / elas", "tinham"],
        ],
      },
      sections: [
        {
          heading:
            "Usamos o pretérito mais-que-perfeito composto do indicativo para falar de ações passadas que aconteceram antes de outras também passadas:",
          examples: [
            "— Ontem telefonei-te, mas tu já tinhas saído.",
            "— Quando eu cheguei à festa, o João já tinha ido para casa.",
          ],
        },
        {
          heading: "Particípio passado regular",
          examples: ["-ar falar — falado", "-er comer — comido", "-ir partir — partido"],
        },
        {
          heading: "Particípio passado irregular",
          examples: [
            "abrir — aberto",
            "dizer — dito",
            "escrever — escrito",
            "fazer — feito",
            "ganhar — ganho",
            "gastar — gasto",
            "limpar — limpo",
            "pagar — pago",
            "pôr — posto",
            "ver — visto",
            "vir — vindo",
          ],
        },
      ],
    },
    exercises: [
      {
        id: "20.1",
        instructions: "Complete com os verbos no pretérito mais-que-perfeito composto.",
        note: "O exemplo do livro é: Não estavas em casa. (sair) → Já tinhas saído.",
        type: "construct",
        items: [
          { n: 2, cue: "O bebê não estava com fome. (comer) — Já…", answer: "(Já) tinha comido." },
          {
            n: 3,
            cue: "Eles já não estavam em Portugal. (voltar para França) — Já…",
            answer: "(Já) tinham voltado para França.",
          },
          { n: 4, cue: "A Ana estava no hospital. (ter um acidente)", answer: "Tinha tido um acidente." },
          { n: 5, cue: "Ele não estava cansado. (dormir 12 horas)", answer: "Tinha dormido 12 horas." },
          {
            n: 6,
            cue: "Não fui à festa. (combinar ir ao concerto) — Já…",
            answer: "(Já) tinha combinado ir ao concerto.",
          },
          { n: 7, cue: "O sr. Silva não sabia inglês. (aprender) — Nunca…", answer: "(Nunca) tinha aprendido." },
          { n: 8, cue: "Não fomos ao cinema. (ver o filme) — Já…", answer: "(Já) tínhamos visto o filme." },
          {
            n: 9,
            cue: "Ela estava muito nervosa. (andar de avião) — Nunca…",
            answer: "(Nunca) tinha andado de avião.",
          },
          {
            n: 10,
            cue: "Já não havia barulho. (as crianças ir para a cama)",
            answer: "As crianças tinham ido para a cama.",
          },
        ],
      },
      {
        id: "20.2",
        instructions: "Complete com os verbos no pretérito mais-que-perfeito composto e no p.p.s.",
        note: "O exemplo do livro é: Quando eu cheguei (chegar) a casa, a minha mãe já tinha saído (sair).",
        type: "blank",
        items: [
          {
            n: 2,
            prompt: "O filme já ___ (começar) quando nós ___ (entrar) na sala.",
            answers: ["tinha começado", "entrámos"],
          },
          {
            n: 3,
            prompt: "Quando eu me ___ (levantar), a empregada ___ (arrumar) tudo.",
            answers: ["levantei", "tinha arrumado"],
          },
          {
            n: 4,
            prompt: "Nós já ___ (acabar) de jantar quando tu ___ (telefonar).",
            answers: ["tínhamos acabado", "telefonaste"],
          },
          {
            n: 5,
            prompt: "Quando nós ___ (encontrar) o João, ele já ___ (falar) com a Ana.",
            answers: ["encontrámos", "tinha falado"],
          },
        ],
      },
      {
        id: "20.3",
        instructions: "Complete com os verbos no pretérito mais-que-perfeito composto ou no p.p.s.",
        note: "Os dois primeiros itens vêm já resolvidos no livro: Não tenho fome. Já almocei (almoçar). / Ele não tinha fome. Já tinha almoçado (almoçar).",
        type: "blank",
        items: [
          { n: 3, prompt: "Eles estavam muito cansados. Não ___ (dormir) nada.", answers: ["tinham dormido"] },
          { n: 4, prompt: "Porque é que estás cansado? Não ___ (dormir)?", answers: ["dormiste"] },
          {
            n: 5,
            prompt: "Peço desculpas pelo atraso, mas ___ (ter) um acidente com o carro.",
            answers: ["tive"],
          },
          {
            n: 6,
            prompt: "Encontrei a Ana no hospital. Ela ___ (ter) um acidente com o carro.",
            answers: ["tinha tido"],
          },
          { n: 7, prompt: "Estou muito nervoso. Nunca ___ (andar) de avião.", answers: ["andei"] },
          { n: 8, prompt: "Ele estava muito nervoso. Nunca ___ (andar) de avião.", answers: ["tinha andado"] },
        ],
      },
    ],
  },
];
