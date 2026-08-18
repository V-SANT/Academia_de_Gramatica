// Unidades 41-45 da "Gramática Ativa 1" (Lidel).
// O formato de cada unidade está documentado em ../units.js.

export const UNIDADES_41_45 = [
  {
    n: 41,
    title: "a, de, em, para, por",
    subtitle: "preposições de movimento",
    theory: {
      intro: [
        "Ontem fui ao cinema. Vou a casa almoçar.",
        "São 6 horas. Vou para casa e fico em casa.",
        "Esse ônibus passa pelo hospital.",
      ],
      table: null,
      sections: [
        {
          heading: "a — ir / vir / voltar a… (curta permanência)",
          examples: [
            "Ontem fui ao cinema.",
            "É meio-dia. Eles vão a casa almoçar.",
            "Ele vai à escola todos os dias.",
            "Vou aos Correios comprar selos.",
            "a pé / de carona: Gosto muito de andar a pé. Foram de carona para a praia.",
          ],
          note: "Combinações: a + a = à · a + o = ao · a + as = às · a + os = aos.",
        },
        {
          heading: "para — ir / vir / voltar para… (longa permanência), direção e destino",
          examples: [
            "Eles vão viver para o Canadá.",
            "Ela vai estudar para Inglaterra.",
            "Volta para Portugal dois anos depois.",
            "São 6 horas da tarde. Vou para casa.",
            "Este ônibus vai para Lisboa.",
            "O trem para Braga parte às 20 horas.",
          ],
        },
        {
          heading: "por — através de, perto de",
          examples: [
            "Eles foram pela ponte.",
            "O senhor vai por esta rua, pelo passeio do lado direito.",
            "Andámos passeando pelo parque.",
            "Mandei a carta por avião.",
            "Esse ônibus passa pelo hospital.",
            "A estrada nova passa por minha casa.",
          ],
          note: "Combinações: por + a = pela · por + o = pelo · por + as = pelas · por + os = pelos.",
        },
        {
          heading: "de — origem ou proveniência; meios de transporte",
          examples: [
            "Saí de casa às 8 horas.",
            "Voltaram da festa cansadíssimos.",
            "O meu marido vem hoje do Porto.",
            "Para a Baixa vou de metrô.",
            "De táxi é mais rápido.",
            "Eles vão de ônibus para o trabalho.",
            "Gosto muito de viajar de avião.",
          ],
          note: "Combinações: de + a = da · de + o = do · de + as = das · de + os = dos.",
        },
        {
          heading: "em + artigo — meio de transporte determinado",
          examples: [
            "O sr. Oliveira vai no trem das 7h30.",
            "Prefiro voltar no avião da TAP.",
            "Querem ir no meu carro?",
            "Posso andar na tua bicicleta?",
          ],
          note: "Combinações: em + a = na · em + o = no · em + as = nas · em + os = nos.",
        },
      ],
    },
    exercises: [
      {
        id: "41.1",
        instructions: "Complete com a (contraído ou não com o artigo) ou para.",
        type: "blank",
        items: [
          { n: 1, prompt: "Vou ___ casa buscar o casaco e já volto.", answers: ["a"] },
          { n: 2, prompt: "Quem é que vai ___ supermercado?", answers: ["ao"] },
          { n: 3, prompt: "Eles vão viver ___ o Algarve.", answers: ["para"] },
          { n: 4, prompt: "Já não há pão. É preciso ir ___ padaria.", answers: ["à"] },
          { n: 5, prompt: "Depois das aulas vou ___ casa.", answers: ["para"] },
          { n: 6, prompt: "Vamos ___ cinema?", answers: ["ao"] },
          { n: 7, prompt: "O John volta ___ Inglaterra no próximo mês.", answers: ["para"] },
          { n: 8, prompt: "Prefiro ir ___ pé ___ a praia.", answers: ["a", "para"] },
          { n: 9, prompt: "A minha mãe foi ___ Porto visitar uns amigos.", answers: ["ao"] },
          { n: 10, prompt: "O Pedro vai trabalhar ___ os Estados Unidos.", answers: ["para"] },
        ],
      },
      {
        id: "41.2",
        instructions: "Complete com para ou por (contraído ou não com o artigo).",
        type: "blank",
        items: [
          { n: 1, prompt: "O ônibus ___ Faro vai ___ autoestrada.", answers: ["para", "pela"] },
          { n: 2, prompt: "Eles vieram ___ ponte, porque é mais rápido.", answers: ["pela"] },
          { n: 3, prompt: "Esse ônibus passa ___ minha escola.", answers: ["pela"] },
          { n: 4, prompt: "Andaram ___ museu a ver tudo.", answers: ["pelo"] },
          {
            n: 5,
            prompt: "Ela vai estudar ___ França e volta ___ Portugal dois anos depois.",
            answers: ["para", "para"],
          },
          {
            n: 6,
            prompt:
              "— Como é que se vai ___ o Instituto Português? — Vai ___ esta rua, ___ passeio do lado esquerdo e vê logo o Instituto.",
            answers: ["para", "por", "pelo"],
          },
          {
            n: 7,
            prompt: "Quando vou ___ casa, vou sempre ___ Av. da República.",
            answers: ["para", "pela"],
          },
          { n: 8, prompt: "Os carros passam ___ túnel.", answers: ["pelo"] },
          {
            n: 9,
            prompt: "Eles já foram ___ o aeroporto, mas antes passavam ___ hotel.",
            answers: ["para", "pelo"],
          },
          { n: 10, prompt: "Todos os anos vamos de férias ___ o Algarve.", answers: ["para"] },
        ],
      },
      {
        id: "41.3",
        instructions: "Complete com de (contraído ou não com o artigo) ou em (contraído com o artigo).",
        type: "blank",
        items: [
          { n: 1, prompt: "Fomos ___ avião e voltámos ___ trem.", answers: ["de", "de"] },
          { n: 2, prompt: "Queres andar ___ minha mota nova?", answers: ["na"] },
          { n: 3, prompt: "Os turistas gostam de passear ___ bonde.", answers: ["de"] },
          {
            n: 4,
            prompt: "Nós vamos ___ carro do João e vocês vão ___ táxi.",
            answers: ["no", "de"],
          },
          { n: 5, prompt: "Ontem saí ___ escritório muito tarde.", answers: ["do"] },
          {
            n: 6,
            prompt: "Eles chegam hoje ___ Brasil. Vêm ___ avião das 7h00.",
            answers: ["do", "no"],
          },
          { n: 7, prompt: "Daqui para a Estrela tem de ir ___ ônibus n.º 27.", answers: ["no"] },
          { n: 8, prompt: "Voltámos ___ Porto ___ trem das 10h00.", answers: ["do", "no"] },
          { n: 9, prompt: "Estás muito bronzeada. Vens ___ praia?", answers: ["de"] },
          { n: 10, prompt: "Saiu ___ ônibus e apanhou um táxi.", answers: ["do"] },
        ],
      },
      {
        id: "41.4",
        instructions:
          "Faça frases, conjugando os verbos e usando as preposições contraídas ou não com o artigo.",
        note: "O exemplo do livro é: (eu / ir / carro / emprego) → Eu vou de carro para o emprego.",
        type: "construct",
        items: [
          { n: 2, cue: "o João / ir / escola / pé", answer: "O João vai para a escola a pé." },
          { n: 3, cue: "nós / ir / carro dele", answer: "Nós vamos no carro dele." },
          {
            n: 4,
            cue: "eles / voltar / Madrid / trem das 20h30",
            answer: "Eles voltam para Madrid no trem das 20h30.",
          },
          { n: 5, cue: "eu / sair / casa / às 8h00", answer: "Eu saio de casa às 8h00." },
          { n: 6, cue: "eles / ir / praia / ônibus", answer: "Eles vão à praia de ônibus." },
        ],
      },
    ],
  },
  {
    n: 42,
    title: "a, em cima de, dentro de, etc.",
    subtitle: "preposições e locuções de lugar",
    theory: {
      intro: [
        "— O banheiro é à direita ou à esquerda? — É ao fundo do corredor à direita.",
        "O gato está debaixo da mesa.",
        "A livraria fica ao lado da escola.",
      ],
      table: null,
      sections: [
        {
          heading: "a — à(s), ao(s)",
          examples: [
            "Ela está sentada à janela.",
            "É ao fundo do corredor à direita.",
            "À sombra está-se bem, ao sol está muito calor.",
          ],
        },
        {
          heading: "em — na(s), no(s)",
          examples: [
            { text: "Moro em Lisboa, na Av. da República. À noite fico sempre em casa.", tag: "local" },
            { text: "Os livros estão na mesa. Há muito pó no chão.", tag: "em cima de" },
            {
              text: "Pus o dinheiro no bolso. Não fiquem muito tempo na água. Ele está no quarto, deitado na cama.",
              tag: "dentro de",
            },
          ],
        },
        {
          heading: "em cima de · dentro de · debaixo de",
          examples: [
            "Arrumei os sacos em cima do armário. A tua mala está em cima da cadeira.",
            "Os livros estão dentro da pasta. Está muito calor dentro do ônibus.",
            "O gato está debaixo da mesa. Debaixo das árvores está mais fresco.",
          ],
        },
        {
          heading: "ao lado de · em frente de · à frente de · atrás de",
          examples: [
            "A livraria fica ao lado da escola. A Ana senta-se sempre ao lado do João.",
            "O supermercado fica em frente do restaurante.",
            "O Pedro está à frente do Rui.",
            "O Rui está atrás do Pedro. O quadro está atrás da professora.",
          ],
        },
        {
          heading: "entre · perto de · ao pé de",
          examples: [
            "O João está entre a Ana e o Pedro.",
            "Encontrei uma camisa lindíssima entre as roupas velhas da avó.",
            "A escola fica perto de casa.",
            "O jarro de água está ao pé dos copos.",
          ],
        },
      ],
    },
    exercises: [
      {
        id: "42.1",
        instructions:
          "Complete com: à, à frente de, ao lado de, debaixo de, dentro de, em, em frente de, entre (contraídas ou não com o artigo).",
        note: "No livro cada frase tem um desenho; aqui a frase já diz o suficiente para escolher a preposição.",
        type: "blank",
        items: [
          { n: 1, prompt: "Ela está sentada ___ bebê.", answers: ["em frente do"] },
          { n: 2, prompt: "O táxi vai ___ ônibus.", answers: ["à frente do"] },
          { n: 3, prompt: "O pássaro está ___ gaiola.", answers: ["dentro da/na"] },
          { n: 4, prompt: "Ele está ___ carro.", answers: ["debaixo do"] },
          { n: 5, prompt: "Coimbra fica ___ Lisboa e o Porto.", answers: ["entre"] },
          { n: 6, prompt: "Ela está tomando banho ___ piscina.", answers: ["na"] },
          { n: 7, prompt: "Eles encontraram-se ___ porta do cinema.", answers: ["à"] },
          { n: 8, prompt: "A cadeira está ___ sofá.", answers: ["ao lado do"] },
        ],
      },
      {
        id: "42.2",
        instructions:
          "Observe a gravura e complete as frases com preposições e locuções (contraídas ou não com o artigo).",
        note: "A gravura do livro é uma sala de estar: o sofá em frente da televisão, o gato debaixo da mesa, os quadros na parede, a avó com o cão atrás dela.",
        type: "blank",
        items: [
          { n: 1, prompt: "O Pedro e a Ana estão ___ sala de estar.", answers: ["na"] },
          { n: 2, prompt: "A televisão está ___ sofá.", answers: ["em frente do"] },
          { n: 3, prompt: "O Pedro está sentado ___ sofá.", answers: ["no"] },
          { n: 4, prompt: "O gato está ___ mesa.", answers: ["debaixo da"] },
          {
            n: 5,
            prompt: "O cesto das revistas está ___ chão, ___ sofá.",
            answers: ["no", "ao lado do"],
          },
          { n: 6, prompt: "O Pedro tem os pés ___ cadeira.", answers: ["em cima da"] },
          { n: 7, prompt: "Os quadros estão ___ parede.", answers: ["na"] },
          { n: 8, prompt: "A Ana está de pé ___ janela.", answers: ["à"] },
          { n: 9, prompt: "O jornal está ___ mão do Pedro.", answers: ["na"] },
          { n: 10, prompt: "Os livros estão ___ estante.", answers: ["na"] },
          { n: 11, prompt: "As cassetes vídeo estão ___ armário.", answers: ["no"] },
          { n: 12, prompt: "O sofá está ___ as cadeiras.", answers: ["entre"] },
          { n: 13, prompt: "O abajur está ___ Ana.", answers: ["ao pé da"] },
          { n: 14, prompt: "O bebê está sentado ___ mesa.", answers: ["à"] },
          { n: 15, prompt: "O cão está ___ avó.", answers: ["atrás da"] },
          { n: 16, prompt: "A jarra está ___ mesa.", answers: ["em cima da"] },
        ],
      },
      {
        id: "42.3",
        instructions:
          "Observe a fotografia e complete as frases com preposições e locuções (contraídas ou não com o artigo).",
        note: "Na fotografia do livro estão de pé, da esquerda para a direita, o avô António, a D. Helena e o Afonso; sentados no sofá, o João, a Ana e o Pedro.",
        type: "blank",
        items: [
          { n: 1, prompt: "O avô António está de pé ___ esquerda.", answers: ["à"] },
          {
            n: 2,
            prompt: "A D. Helena está de pé ___ o avô e o marido, o Afonso.",
            answers: ["entre"],
          },
          { n: 3, prompt: "O Afonso está de pé ___ direita.", answers: ["à"] },
          {
            n: 4,
            prompt: "O João está sentado ___ esquerda, ___ avô.",
            answers: ["à", "à frente do"],
          },
          { n: 5, prompt: "A Ana está sentada ___ o João e o Pedro.", answers: ["entre"] },
          {
            n: 6,
            prompt: "O Pedro está sentado ___ direita, ___ pai, o Afonso.",
            answers: ["à", "à frente do"],
          },
          { n: 7, prompt: "O avô António está ___ João.", answers: ["atrás do"] },
          {
            n: 8,
            prompt: "O Afonso está de pé ___ mulher, a D. Helena.",
            answers: ["ao lado da"],
          },
          { n: 9, prompt: "A D. Helena está de pé ___ Ana.", answers: ["atrás da"] },
          { n: 10, prompt: "O João está sentado ___ irmã, a Ana.", answers: ["ao lado da"] },
        ],
      },
    ],
  },
  {
    n: 43,
    title: "a, de, em, para, por",
    subtitle: "preposições de tempo",
    theory: {
      intro: [
        "O Natal é a 25 de dezembro.",
        "As aulas começam às 9h00 e acabamos ao meio-dia.",
        "Vou de férias no dia 1 de agosto.",
      ],
      table: null,
      sections: [
        {
          heading: "a",
          examples: [
            { text: "O Natal é a 25 de dezembro.", tag: "datas (com dia do mês)" },
            { text: "Ao(s) sábado(s) jantam sempre fora.", tag: "dias da semana (ação habitual)" },
            {
              text: "As aulas começam às 9h00. Almoçamos ao meio-dia (12h00). A festa acabou à meia-noite (24h00).",
              tag: "horas",
            },
            { text: "Telefona-me à noite. À tarde nunca estou em casa.", tag: "partes do dia" },
          ],
        },
        {
          heading: "de",
          examples: [
            { text: "Ele nasceu a 20 de fevereiro de 1980. Faço anos a 15 de janeiro.", tag: "datas" },
            {
              text: "O ano letivo é de setembro a junho. Têm aulas das 8h00 ao meio-dia.",
              tag: "de … a",
            },
            {
              text: "De manhã estão na escola. São 10h00 da manhã. Almoçamos à 1h00 da tarde e jantamos às 8h00 da noite.",
              tag: "partes do dia",
            },
          ],
        },
        {
          heading: "em",
          examples: [
            { text: "Vou de férias no dia 1 de agosto.", tag: "datas (com dia)" },
            { text: "No sábado vamos a uma festa de anos.", tag: "dias da semana (ação pontual)" },
            { text: "No Natal e na Páscoa vêm sempre a Portugal.", tag: "épocas festivas" },
            { text: "No inverno chove muito.", tag: "estações do ano" },
            { text: "Os exames são em julho.", tag: "meses" },
            { text: "Vasco da Gama chegou à Índia em 1498.", tag: "anos" },
            { text: "A Madeira foi descoberta no século XV.", tag: "séculos" },
          ],
        },
        {
          heading: "para",
          examples: [
            {
              text: "Preciso das cartas prontas para as 18h00. Para o ano que vem vou aos Estados Unidos. Eles chegam para a semana.",
              tag: "localização temporal",
            },
            { text: "São dez para as cinco (16h50).", tag: "horas" },
          ],
        },
        {
          heading: "por",
          examples: [
            {
              text: "O concerto deve acabar pelas 10h00 da noite. Eles vêm a Portugal pelo Natal.",
              tag: "tempo aproximado",
            },
            {
              text: "Podes ficar com o livro por uma semana. Empresto-te o dinheiro por uns dias.",
              tag: "período de tempo",
            },
          ],
        },
      ],
    },
    exercises: [
      {
        id: "43.1",
        instructions: "Preencha com a, de ou em, contraídos ou não com o artigo.",
        type: "blank",
        items: [
          { n: 1, prompt: "___ 10 ___ agosto.", answers: ["a", "de"] },
          { n: 2, prompt: "___ nove ___ noite (21h00).", answers: ["às", "da"] },
          { n: 3, prompt: "___ próxima semana.", answers: ["na"] },
          { n: 4, prompt: "___ fim de semana passado.", answers: ["no"] },
          { n: 5, prompt: "___ véspera de Natal.", answers: ["na"] },
          { n: 6, prompt: "___ férias ___ verão.", answers: ["nas", "de"] },
          { n: 7, prompt: "___ tarde.", answers: ["à"] },
          { n: 8, prompt: "___ meio-dia (12h00).", answers: ["ao"] },
          { n: 9, prompt: "___ julho ___ 1990.", answers: ["em", "de"] },
          { n: 10, prompt: "___ fim ___ ano.", answers: ["no", "do"] },
          { n: 11, prompt: "___ uma hora ___ tarde (13h00).", answers: ["à", "da"] },
          { n: 12, prompt: "___ dia 5 ___ março.", answers: ["no", "de"] },
          { n: 13, prompt: "___ primavera.", answers: ["na"] },
          { n: 14, prompt: "___ maio.", answers: ["em"] },
          { n: 15, prompt: "___ manhã.", answers: ["de"] },
          { n: 16, prompt: "___ cinco ___ tarde.", answers: ["às", "da"] },
          { n: 17, prompt: "___ meia-noite (24h00).", answers: ["à"] },
          { n: 18, prompt: "___ Páscoa.", answers: ["na"] },
          { n: 19, prompt: "___ 1994.", answers: ["em"] },
          { n: 20, prompt: "___ oito ___ manhã (8h00).", answers: ["às", "da"] },
          { n: 21, prompt: "___ quatro e meia (16h30).", answers: ["às"] },
        ],
      },
      {
        id: "43.2",
        instructions: "Complete com para ou por (contraído ou não com o artigo).",
        type: "blank",
        items: [
          { n: 1, prompt: "Alugámos a casa ___ dois meses.", answers: ["por"] },
          { n: 2, prompt: "A chegada do avião está prevista ___ as 14h35.", answers: ["para"] },
          { n: 3, prompt: "As férias começam ___ a semana.", answers: ["para"] },
          { n: 4, prompt: "A reunião foi adiada ___ sábado.", answers: ["para"] },
          { n: 5, prompt: "Podes ficar em minha casa ___ uns dias.", answers: ["por"] },
          { n: 6, prompt: "São cinco ___ as seis (17h55).", answers: ["para"] },
          {
            n: 7,
            prompt: "Eles disseram que voltavam ___ sete da tarde (19h00).",
            answers: ["pelas"],
          },
          {
            n: 8,
            prompt: "O carro está na garagem. Vou ficar sem ele ___ umas semanas.",
            answers: ["por"],
          },
          { n: 9, prompt: "___ o ano acabo o curso na Universidade.", answers: ["Para"] },
          { n: 10, prompt: "Foi eleito presidente do clube ___ 2 anos.", answers: ["por"] },
        ],
      },
      {
        id: "43.3",
        instructions: "Complete com a ou em contraídos com o artigo.",
        type: "blank",
        items: [
          { n: 1, prompt: "___ domingo almoçamos sempre fora.", answers: ["Ao"] },
          { n: 2, prompt: "___ domingo passado almoçámos em casa.", answers: ["No"] },
          {
            n: 3,
            prompt: "___ sexta-feira ___ noite costumamos ir ao cinema.",
            answers: ["À", "à"],
          },
          { n: 4, prompt: "___ próxima sexta-feira temos uma festa de anos.", answers: ["Na"] },
          { n: 5, prompt: "Temos aula de História ___ segundas-feiras.", answers: ["às"] },
          {
            n: 6,
            prompt: "___ segunda que vem não temos, porque vamos visitar um museu.",
            answers: ["Na"],
          },
          { n: 7, prompt: "Têm jogo de futebol ___ sábados.", answers: ["aos"] },
          { n: 8, prompt: "___ próximo sábado é feriado. Por isso não há jogo.", answers: ["No"] },
        ],
      },
      {
        id: "43.4",
        instructions: "Complete com a, de ou em (contraídos ou não com o artigo).",
        type: "blank",
        items: [
          {
            n: 1,
            prompt: "O concerto começou ___ dez ___ noite (22h00) e acabou ___ meia-noite (24h00).",
            answers: ["às", "da", "à"],
          },
          {
            n: 2,
            prompt: "Ela trabalha muito durante a semana. Por isso, ___ fins de semana gosta de descansar.",
            answers: ["aos"],
          },
          { n: 3, prompt: "O 25 de Abril foi ___ 1974.", answers: ["em"] },
          {
            n: 4,
            prompt: "Almoçamos ___ uma hora (13h00) e jantamos ___ oito (20h00).",
            answers: ["à", "às"],
          },
          {
            n: 5,
            prompt: "Costumo fazer as compras ___ sábados ___ manhã.",
            answers: ["aos", "de"],
          },
          {
            n: 6,
            prompt: "O curso começa ___ 5 ___ janeiro e termina ___ dia 30 ___ março.",
            answers: ["a", "de", "no", "de"],
          },
          {
            n: 7,
            prompt: "___ dia ___ Natal a família reúne-se em casa da avó.",
            answers: ["No", "de"],
          },
          {
            n: 8,
            prompt: "A maioria das pessoas faz férias ___ verão, mais precisamente ___ agosto.",
            answers: ["no", "em"],
          },
          { n: 9, prompt: "Tenho aulas todos os dias: ___ segunda ___ sexta.", answers: ["de", "a"] },
          {
            n: 10,
            prompt:
              "O caminho marítimo para a Índia foi descoberto pelos portugueses ___ século XV.",
            answers: ["no"],
          },
        ],
      },
    ],
  },
  {
    n: 44,
    title: "interrogativos",
    subtitle: "quem, o que, qual, quando, onde, como, quanto, porquê",
    theory: {
      intro: [
        "— Como é que se chama? — Ana Ramos.",
        "— Onde está a minha caneta? — Está em cima da mesa.",
        "— Quantos anos tens? — Tenho 15.",
      ],
      table: null,
      sections: [
        {
          heading: "como…?",
          examples: [
            "— Como é que se chama? — Ana Ramos.",
            "— Como é que está o tempo no Algarve? — Está muito calor.",
            "— Como está o senhor? — Bem, obrigado.",
            "— Como é a nova secretária? — É alta, morena e muito simpática.",
            "— Como é a vossa casa? — É grande. Tem 6 cômodos.",
            "— Como é que vais para a escola? — Vou de ônibus.",
          ],
        },
        {
          heading: "quem…? (pessoas)",
          examples: [
            "— Quem é aquela senhora? — É a nova professora.",
            "— De quem são esses livros? — São meus.",
            "— A quem é que emprestaste o dicionário? — Ao João.",
            "— Para quem é essa lembrança? — É para a minha namorada.",
            "— Com quem é que vieste? — Com os meus pais.",
          ],
        },
        {
          heading: "quando…? (tempo) · onde…? (local)",
          examples: [
            "— Quando é que vocês chegaram? — Chegámos ontem à noite.",
            "— Onde está a minha caneta? — Está em cima da mesa.",
            "— De onde és? — Sou de Lisboa.",
            "— Aonde vais? — Vou ao supermercado.",
            "— Para onde vão? — Vamos para casa.",
            "— Por onde vieram? — Viemos pela ponte.",
          ],
        },
        {
          heading: "quanto(s) / quanta(s)…?",
          examples: [
            "— Quanto é um bilhete de ida e volta? — São 1 500$00.",
            "— Quanto tempo demora a viagem? — 3 horas.",
            "— Há quanto tempo estás no ponto de ônibus? — Há meia hora (30 m).",
            "— Quantos anos tens? — Tenho 15.",
            "— Quantas cadeiras há na sala? — Há 6 cadeiras.",
          ],
        },
        {
          heading: "qual / quais…? · o que…? · que…?",
          examples: [
            "— Qual é a profissão dele? — É médico.",
            "— Quais são os teus livros? Estes ou aqueles? — São estes.",
            "— O que é que fizeste no sábado? — Fui à praia.",
            "— Que horas são? — É meio-dia.",
            "— Que dia é hoje? — Hoje é sexta-feira.",
            "— A que horas chega o avião? — Às 9h40.",
            "— Em que ano nasceste? — Em 1970.",
            "— De que cor é o teu carro? — É preto.",
            "— Porque é que faltaste às aulas? — Porque estive doente.",
          ],
        },
        {
          heading: "A expressão de realce é que",
          examples: [
            "Onde é que moras?",
            "Qual é que é a tua caneta?",
            "Quanto tempo é que demora a operação?",
          ],
          note: "É que vem depois do interrogativo (antes do verbo) ou depois do substantivo que o acompanha.",
        },
      ],
    },
    exercises: [
      {
        id: "44.1",
        instructions:
          "Complete com: quantos / quantas / como / onde / qual / o que / de que cor / quanto tempo / quem / a que horas.",
        type: "blank",
        items: [
          { n: 1, prompt: "— ___ é aquele rapaz? — É o meu irmão.", answers: ["Quem"] },
          { n: 2, prompt: "— ___ começam as aulas? — Às 8 horas.", answers: ["A que horas"] },
          {
            n: 3,
            prompt: "— ___ é a bandeira portuguesa? — É verde e vermelha.",
            answers: ["De que cor"],
          },
          { n: 4, prompt: "— ___ é que estás lendo? — Um romance.", answers: ["O que"] },
          { n: 5, prompt: "— ___ é o teu guarda-chuva? — É aquele.", answers: ["Qual"] },
          {
            n: 6,
            prompt: "— ___ demorou a viagem? — Demorou cerca de quatro horas.",
            answers: ["Quanto tempo"],
          },
          { n: 7, prompt: "— ___ anos tem a Joana? — 18 anos.", answers: ["Quantos"] },
          { n: 8, prompt: "— ___ vezes tomas o remédio? — 3 vezes por dia.", answers: ["Quantas"] },
          { n: 9, prompt: "— ___ foi a festa? — Foi ótima.", answers: ["Como"] },
          { n: 10, prompt: "— ___ é que vives? — Em Lisboa.", answers: ["Onde"] },
        ],
      },
      {
        id: "44.2",
        instructions: "Faça perguntas para obter como resposta a parte destacada da frase.",
        note: "O exemplo do livro é: A viagem foi cansativa. → Como foi a viagem?",
        type: "construct",
        items: [
          {
            n: 2,
            cue: "Demorámos seis horas.",
            answer: "Quanto tempo demoraram?/Quantas horas demoraram?",
          },
          { n: 3, cue: "Chegámos por volta das 19h00.", answer: "A que horas chegaram?" },
          { n: 4, cue: "Fomos diretos para o hotel.", answer: "Para onde foram?" },
          { n: 5, cue: "Desfizemos as malas.", answer: "O que é que fizeram?" },
          { n: 6, cue: "Jantámos num pequeno restaurante.", answer: "Onde é que jantaram?" },
          { n: 7, cue: "Comemos bife com batatas fritas.", answer: "O que é que comeram?" },
          { n: 8, cue: "Voltámos a pé para o hotel.", answer: "Como é que voltaram para o hotel?" },
          { n: 9, cue: "A noite estava quente.", answer: "Como estava a noite?" },
          {
            n: 10,
            cue: "Deitámo-nos cedo porque estávamos cansados.",
            answer: "Porque é que se deitaram cedo?",
          },
        ],
      },
      {
        id: "44.3a",
        instructions: "Complete com onde ou preposição + onde.",
        type: "blank",
        items: [
          { n: 1, prompt: "— ___ fica o supermercado? — Na Av. da República.", answers: ["Onde"] },
          { n: 2, prompt: "— ___ vão nas férias? — Para Cabo Verde.", answers: ["Para onde"] },
          { n: 3, prompt: "— ___ vieram? — Pela autoestrada.", answers: ["Por onde"] },
          { n: 4, prompt: "— ___ és? — De Lisboa.", answers: ["De onde"] },
        ],
      },
      {
        id: "44.3b",
        instructions: "Complete com quem ou preposição + quem.",
        type: "blank",
        items: [
          { n: 1, prompt: "— ___ é que encontraste? — O João e a Ana.", answers: ["Quem"] },
          { n: 2, prompt: "— ___ deste o recado? — À empregada.", answers: ["A quem"] },
          { n: 3, prompt: "— ___ são as flores? — Para a minha mãe.", answers: ["Para quem"] },
          { n: 4, prompt: "— ___ estão falando? — Da nova professora.", answers: ["De quem"] },
        ],
      },
      {
        id: "44.3c",
        instructions: "Complete com o que, que ou preposição + que.",
        type: "blank",
        items: [
          { n: 1, prompt: "— ___ é isso? — São postais.", answers: ["O que"] },
          { n: 2, prompt: "— ___ horas são? — É meio-dia.", answers: ["Que"] },
          { n: 3, prompt: "— ___ horas chega o trem? — Às 19h30.", answers: ["A que"] },
          { n: 4, prompt: "— ___ ano foi a revolução? — Em 1974.", answers: ["Em que"] },
        ],
      },
      {
        id: "44.3d",
        instructions: "Complete com quanto, quantos ou quantas.",
        type: "blank",
        items: [
          { n: 1, prompt: "— ___ é que ganhas? — 200 000$00.", answers: ["Quanto"] },
          { n: 2, prompt: "— ___ alunos há na turma? — 30.", answers: ["Quantos"] },
          { n: 3, prompt: "— ___ pessoas morreram? — 6.", answers: ["Quantas"] },
          { n: 4, prompt: "— ___ é? — São 350$00.", answers: ["Quanto"] },
        ],
      },
    ],
  },
  {
    n: 45,
    title: "indefinidos",
    subtitle: "algum, nenhum, todo, outro; alguém, ninguém, tudo, nada",
    theory: {
      intro: [
        "— Há algum lugar livre? — Não, não há nenhum.",
        "— Está alguém no escritório? — A esta hora não está lá ninguém.",
      ],
      table: null,
      sections: [
        {
          heading: "Indefinidos variáveis — pessoas ou coisas",
          examples: [
            "algum, alguma — alguns, algumas",
            "nenhum, nenhuma — nenhuns, nenhumas",
            "muito, muita — muitos, muitas",
            "pouco, pouca — poucos, poucas",
            "tanto, tanta — tantos, tantas",
            "todo, toda — todos, todas",
            "outro, outra — outros, outras",
          ],
        },
        {
          heading: "algum… / nenhum…",
          examples: [
            "— Há algum lugar livre? — Não, não há nenhum.",
            "Alguns alunos não puderam vir.",
            "Não vieram nenhuns (alunos) do 10.º ano.",
          ],
        },
        {
          heading: "muito… / pouco… / tanto…",
          examples: [
            "A avó tem muita paciência para as crianças. Ela tem pouca paciência.",
            "A Ana dá poucos erros a escrever. O irmão dá muitos.",
            "Podem pegar laranjas. Há tantas na árvore.",
            "Estão tantos policiais à porta do banco.",
          ],
        },
        {
          heading: "todo… / outro…",
          examples: [
            "Vou todos os dias à escola.",
            "Todos os meus amigos vieram à festa.",
            "Vamos jantar. Está toda a gente com fome.",
            "Este bolo está ótimo. Dê-me outro.",
            "A secretária despediu-se. Vamos contratar outra.",
          ],
        },
        {
          heading: "Indefinidos invariáveis",
          examples: ["pessoas — alguém, ninguém", "coisas — tudo, nada"],
        },
        {
          examples: [
            "— Está alguém no escritório? — A esta hora não está lá ninguém.",
            "Alguém partiu o vidro.",
            "Ninguém me disse o que se passava.",
            "Ele comeu tudo: a sopa, o bife com arroz e a fruta.",
            "Sem os óculos não vejo nada.",
          ],
        },
      ],
    },
    exercises: [
      {
        id: "45.1",
        instructions: "Complete com os indefinidos variáveis e invariáveis.",
        note: "O exemplo do livro é: — Encontraste alguém no café? — Não, não encontrei ninguém.",
        type: "blank",
        items: [
          {
            n: 2,
            prompt: "— Está ali ___ chamando-nos. — Onde? Não vejo ___.",
            answers: ["alguém", "ninguém"],
          },
          {
            n: 3,
            prompt: "— Bebeste o leite ___? — Já bebi ___. Não quero mais ___.",
            answers: ["todo", "tudo", "nada"],
          },
          {
            n: 4,
            prompt: "— Percebeste ___ coisa? — Não, não percebi ___.",
            answers: ["alguma", "nada"],
          },
          {
            n: 5,
            prompt: "— Fizeste os exercícios ___? — Fiz ___ sozinho.",
            answers: ["todos", "tudo"],
          },
          {
            n: 6,
            prompt: "— Tens ___ amigo no Canadá? — Não, não tenho lá ___ amigo.",
            answers: ["algum", "nenhum"],
          },
        ],
      },
      {
        id: "45.2",
        instructions: "Complete com os indefinidos variáveis e invariáveis.",
        type: "blank",
        items: [
          { n: 1, prompt: "Saiu sem dizer absolutamente ___.", answers: ["nada"] },
          { n: 2, prompt: "Depois da festa estivemos arrumando ___.", answers: ["tudo"] },
          { n: 3, prompt: "Ela vai à escola ___ os dias.", answers: ["todos"] },
          { n: 4, prompt: "Fiquei o dia ___ em casa.", answers: ["todo"] },
          { n: 5, prompt: "As crianças desarrumaram o quarto ___.", answers: ["todo"] },
          {
            n: 6,
            prompt: "A Mary está estudando em Portugal e já tem ___ amigas portuguesas.",
            answers: ["muitas"],
          },
          { n: 7, prompt: "___ os anos trocam de carro.", answers: ["Todos"] },
          { n: 8, prompt: "Tenho ___ dinheiro. Por isso, não vou de férias.", answers: ["pouco"] },
          { n: 9, prompt: "___ me roubou a carteira.", answers: ["Alguém"] },
          {
            n: 10,
            prompt: "Perdi o dinheiro ___. Procurei em ___ a parte, mas não encontrei ___.",
            answers: ["todo", "toda", "nada"],
          },
          { n: 11, prompt: "Não tenho ___ em casa. Tenho que ir às compras.", answers: ["nada"] },
          { n: 12, prompt: "Esta caneta não escreve. Preciso de ___.", answers: ["outra"] },
          { n: 13, prompt: "Esse cineasta é desconhecido. ___ o conhece.", answers: ["Ninguém"] },
          { n: 14, prompt: "Ela é famosíssima. ___ a gente a conhece.", answers: ["Toda"] },
          {
            n: 15,
            prompt: "___ empregados não vieram. Da fábrica não veio ___.",
            answers: ["Alguns", "ninguém"],
          },
        ],
      },
      {
        id: "45.3",
        instructions:
          "Complete com os antônimos dos indefinidos destacados, fazendo as alterações necessárias.",
        note: "No livro já vêm resolvidos os itens 1 (Está alguém à nossa espera? → Não está ninguém à nossa espera?), 2 (Ele comeu tudo. → Ele não comeu nada.) e 3 (Encontrámos muitas pessoas conhecidas. → Encontrámos poucas pessoas conhecidas.).",
        type: "construct",
        items: [
          { n: 4, cue: "Há alguma sala livre?", answer: "Não há nenhuma sala livre." },
          { n: 5, cue: "Está alguém no escritório?", answer: "Não está ninguém no escritório." },
          { n: 6, cue: "Ela arrumou tudo.", answer: "Ela não arrumou nada." },
          {
            n: 7,
            cue: "Deram-lhe algumas informações?",
            answer: "Não lhe deram nenhumas informações.",
          },
          { n: 8, cue: "Ele bebe muito leite.", answer: "Ele bebe pouco leite." },
          { n: 9, cue: "Há algum feriado este mês?", answer: "Não há nenhum feriado este mês." },
          {
            n: 10,
            cue: "As crianças desarrumaram tudo.",
            answer: "As crianças não desarrumaram nada.",
          },
          {
            n: 11,
            cue: "Amanhã tenho algum tempo livre.",
            answer: "Amanhã não tenho nenhum tempo livre.",
          },
          { n: 12, cue: "Muita gente os conhece.", answer: "Pouca gente os conhece." },
          {
            n: 13,
            cue: "Visitámos alguns locais de interesse.",
            answer: "Não visitámos nenhuns locais de interesse.",
          },
          { n: 14, cue: "Hoje tive muito trabalho.", answer: "Hoje tive pouco trabalho." },
          {
            n: 15,
            cue: "Alguém telefonou enquanto estive fora?",
            answer: "Ninguém telefonou enquanto estive fora.",
          },
          { n: 16, cue: "O João acha que sabe tudo.", answer: "O João acha que não sabe nada." },
        ],
      },
    ],
  },
];
