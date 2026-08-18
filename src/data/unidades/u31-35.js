// Unidades 31-35 da "Gramática Ativa 1" (Lidel).
// O formato de cada unidade está documentado em ../units.js.

export const UNIDADES_31_35 = [
  {
    n: 31,
    title: "imperativo",
    subtitle: "verbos regulares e irregulares",
    theory: {
      intro: [
        "Levanta-te! Faz a cama! Arruma o quarto!",
        "Veste-te! Bebe o leite! Vai para a escola!",
      ],
      table: null,
      sections: [
        {
          heading: "Imperativo afirmativo — regulares",
          examples: [
            "-ar falar — Fala baixo! (tu) · Fale baixo! (você) · Falem baixo! (vocês)",
            "-er comer — Come a sopa! (tu) · Coma a sopa! (você) · Comam a sopa! (vocês)",
            "-ir abrir — Abre a janela! (tu) · Abra a janela! (você) · Abram a janela! (vocês)",
          ],
          note: "A forma de tu tira-se do presente (ele fala → fala); as de você e vocês tiram-se da 1.ª pessoa sem o -o (eu falo → fale, falem).",
        },
        {
          heading: "Imperativo negativo — regulares",
          examples: [
            "-ar falar — Não fales alto! (tu) · Não fale alto! (você) · Não falem alto! (vocês)",
            "-er comer — Não comas doces! (tu) · Não coma doces! (você) · Não comam doces! (vocês)",
            "-ir abrir — Não abras a janela! (tu) · Não abra a janela! (você) · Não abram a janela! (vocês)",
          ],
          note: "No imperativo negativo só é diferente a forma de tu (é a formal do singular + s). Todas as outras são iguais na afirmativa e na negativa.",
        },
        {
          heading: "Irregulares",
          examples: [
            "ser — sê / não sejas (tu) · (não) seja (você) · (não) sejam (vocês)",
            "estar — está / não estejas (tu) · (não) esteja (você) · (não) estejam (vocês)",
            "dar — dá / não dês (tu) · (não) dê (você) · (não) deem (vocês)",
            "ir — vai / não vás (tu) · (não) vá (você) · (não) vão (vocês)",
          ],
        },
        {
          heading: "Usamos as formas do imperativo para:",
          examples: [
            { text: "— Feche a porta, por favor.", tag: "dar ordens" },
            { text: "— Não fumes tanto.", tag: "dar conselhos" },
            { text: "— Vão de táxi. É mais rápido.", tag: "dar sugestões" },
          ],
        },
      ],
    },
    exercises: [
      {
        id: "31.1",
        instructions: "Complete com as formas corretas dos verbos no imperativo.",
        note: "No livro já vem resolvido o verbo vestir: (tu) Veste o casaco. (você) Vista a blusa. (vocês) Vistam os casacos.",
        type: "blank",
        items: [
          { n: 4, prompt: "ler — (tu) ___ o jornal.", answers: ["Lê"] },
          { n: 5, prompt: "ler — (você) ___ o livro.", answers: ["Leia"] },
          { n: 6, prompt: "ler — (vocês) ___ as instruções.", answers: ["Leiam"] },
          { n: 7, prompt: "pôr — (tu) ___ a mesa.", answers: ["Põe"] },
          { n: 8, prompt: "pôr — (você) ___ a blusa.", answers: ["Ponha"] },
          { n: 9, prompt: "pôr — (vocês) ___ as blusas.", answers: ["Ponham"] },
          { n: 10, prompt: "fazer — (tu) ___ o trabalho.", answers: ["Faz"] },
          { n: 11, prompt: "fazer — (você) ___ o almoço.", answers: ["Faça"] },
          { n: 12, prompt: "fazer — (vocês) ___ os exercícios.", answers: ["Façam"] },
          { n: 13, prompt: "trazer — (tu) ___ o livro.", answers: ["Traz"] },
          { n: 14, prompt: "trazer — (você) ___ o dicionário.", answers: ["Traga"] },
          { n: 15, prompt: "trazer — (vocês) ___ os documentos.", answers: ["Tragam"] },
          { n: 16, prompt: "despir — (tu) ___ a blusa.", answers: ["Despe"] },
          { n: 17, prompt: "despir — (você) ___ a capa de chuva.", answers: ["Dispa"] },
          { n: 18, prompt: "despir — (vocês) ___ os casacos.", answers: ["Dispam"] },
          { n: 19, prompt: "ir — (tu) ___ ao supermercado.", answers: ["Vai"] },
          { n: 20, prompt: "ir — (você) ___ aos correios.", answers: ["Vá"] },
          { n: 21, prompt: "ir — (vocês) ___ falar com o professor.", answers: ["Vão"] },
          { n: 22, prompt: "vir — (tu) ___ a minha casa.", answers: ["Vem"] },
          { n: 23, prompt: "vir — (você) ___ a Lisboa.", answers: ["Venha"] },
          { n: 24, prompt: "vir — (vocês) ___ cá a casa.", answers: ["Venham"] },
        ],
      },
      {
        id: "31.2",
        instructions: "O Miguel tem 5 anos e faz muitos disparates. A mãe está dando-lhe algumas ordens:",
        note: "O exemplo do livro é: Miguel, não dispas (despir) a blusa. Está muito frio.",
        type: "blank",
        items: [
          { n: 2, prompt: "Não ___ (falar) alto. Os teus irmãos estão estudando.", answers: ["fales"] },
          { n: 3, prompt: "Não ___ (comer) tantos chocolates!", answers: ["comas"] },
          { n: 4, prompt: "Não ___ (tirar) os sapatos.", answers: ["tires"] },
          { n: 5, prompt: "Não ___ (sujar) o chão.", answers: ["sujes"] },
          { n: 6, prompt: "Não ___ (partir) o copo.", answers: ["partas"] },
          { n: 7, prompt: "Não ___ (escrever) na parede.", answers: ["escrevas"] },
          { n: 8, prompt: "Não ___ (dizer) asneiras.", answers: ["digas"] },
          { n: 9, prompt: "Não ___ (fazer) barulho.", answers: ["faças"] },
          { n: 10, prompt: "Não ___ (entornar) o leite.", answers: ["entornes"] },
          { n: 11, prompt: "Não ___ (dar) chutes à tua irmã.", answers: ["dês"] },
        ],
      },
      {
        id: "31.3",
        instructions: "Complete as frases com os verbos no imperativo.",
        note: "O exemplo do livro é: — Está muito calor aqui. (tu/abrir a janela) → Abre a janela.",
        type: "construct",
        items: [
          {
            n: 2,
            cue: "— Onde ficam os Correios, por favor? (o senhor/virar à esquerda)",
            answer: "Vire à esquerda.",
          },
          { n: 3, cue: "— Estou com fome. (tu/comer um sanduíche)", answer: "Come um sanduíche." },
          { n: 4, cue: "— Precisas de ajuda? (tu/pôr a mesa) — …, por favor.", answer: "Põe a mesa." },
          { n: 5, cue: "— Tenho frio. (você/vestir o casaco)", answer: "Vista o casaco." },
          { n: 6, cue: "— Temos sede. (vocês/beber um suco)", answer: "Bebam um suco." },
          {
            n: 7,
            cue: "— Não compreendo este texto. (tu/ver as palavras no dicionário)",
            answer: "Vê as palavras no dicionário.",
          },
          {
            n: 8,
            cue: "— Como é que o vídeo funciona? (você/ler as instruções)",
            answer: "Leia as instruções.",
          },
        ],
      },
    ],
  },
  {
    n: 32,
    title: "comparativos",
    subtitle: "mais … do que, tão … como, menos … do que",
    theory: {
      intro: [
        "O Paulo é tão alto como o João.",
        "O Pedro é mais alto do que os amigos.",
        "O Paulo e o João são menos altos do que o Pedro.",
      ],
      table: null,
      sections: [
        {
          heading: "Superioridade · igualdade · inferioridade",
          examples: [
            "alto — mais alto do que · tão alto como · menos alto do que",
            "longe — mais longe do que · tão longe como · menos longe do que",
            "bom / bem — melhor do que · tão bom (bem) como · menos bom (bem) do que",
            "grande — maior do que · tão grande como · menos grande do que",
            "mau / mal — pior do que · tão mau (mal) como · menos mau (mal) do que",
          ],
          note: "O comparativo de inferioridade (menos … do que) é pouco usado.",
        },
        {
          examples: [
            "— Ontem o tempo estava mau. Hoje ainda está pior.",
            "— Levanto-me sempre cedo, mas anteontem ainda me levantei mais cedo do que habitualmente.",
            "— Sentes-te bem? — Hoje sinto-me melhor.",
            "— Eles têm muitos filhos. Vão comprar um carro maior.",
            "— O inverno em Portugal é menos frio do que na Alemanha.",
            "— A minha mala está mais pesada do que a tua.",
            "— Estes sapatos são mais caros do que aqueles.",
            "— Neste prédio os andares do lado direito são maiores do que os do lado esquerdo.",
            "— O concurso foi tão bom como o da semana passada.",
            "— O concerto não foi tão bom como diziam.",
            "— A vida no campo não é tão agitada como na cidade.",
            "— Ele está tão alto como o pai.",
          ],
        },
      ],
    },
    exercises: [
      {
        id: "32.1",
        instructions: "Complete as frases com os adjetivos/advérbios na forma correta.",
        note: "O exemplo do livro é: Se eu tenho 20 anos e tu tens 21, então tu és mais velho do que eu (velho).",
        type: "blank",
        items: [
          {
            n: 2,
            prompt: "Se a igreja foi construída em 1570 e o museu em 1870, então a igreja é ___ (antigo).",
            answers: ["mais antiga do que o museu"],
          },
          {
            n: 3,
            prompt:
              "Se as minhas calças custaram 10.000$00 e as tuas 15.000$00, então as tuas foram ___ (caro).",
            answers: ["mais caras do que as minhas"],
          },
          {
            n: 4,
            prompt: "Se hoje estão 7 graus e ontem estiveram 10, então hoje está ___ (frio).",
            answers: ["mais frio do que ontem"],
          },
          {
            n: 5,
            prompt: "Se o Pedro nasceu em 1965 e o irmão nasceu em 1960, então o Pedro é ___ (novo).",
            answers: ["mais novo do que o irmão"],
          },
          {
            n: 6,
            prompt: "Se este jardim tem 100 m² e aquele tem 150 m², então aquele é ___ (grande).",
            answers: ["maior do que este"],
          },
          {
            n: 7,
            prompt:
              "Se de metrô demoro 10 minutos até à escola e de ônibus demoro 30 minutos, então o metrô é ___ (rápido).",
            answers: ["mais rápido do que o ônibus"],
          },
          {
            n: 8,
            prompt:
              "Se aqueles sapatos custam 12.000$00 e estes custam 9.000$00, então estes sapatos são ___ (barato).",
            answers: ["mais baratos do que aqueles"],
          },
          {
            n: 9,
            prompt: "Se a Ana tem 1,65m e a Joana tem 1,70m, então a Ana é ___ (baixo).",
            answers: ["mais baixa do que a Joana"],
          },
          {
            n: 10,
            prompt: "Se eu me levanto às 7 horas e tu te levantas às 8 horas, então eu levanto-me ___ (cedo).",
            answers: ["mais cedo do que tu"],
          },
        ],
      },
      {
        id: "32.2",
        instructions: "Complete as frases com os adjetivos/advérbios contrários na forma correta.",
        note: "O exemplo do livro é: Este restaurante é muito caro. Vamos a outro mais barato.",
        type: "blank",
        items: [
          { n: 2, prompt: "Estes sapatos estão muito pequenos. Não tem outros ___?", answers: ["maiores"] },
          { n: 3, prompt: "Este texto é muito difícil. Não há outro ___?", answers: ["mais fácil"] },
          { n: 4, prompt: "Ontem senti-me mal. Hoje já estou ___.", answers: ["melhor"] },
          {
            n: 5,
            prompt: "O supermercado fica muito longe. Não há uma mercearia ___?",
            answers: ["mais perto"],
          },
          {
            n: 6,
            prompt: "O exame de matemática não me correu bem. O exame de física ainda foi ___.",
            answers: ["pior"],
          },
          { n: 7, prompt: "Esta régua é muito curta. Preciso de uma ___.", answers: ["mais comprida"] },
          { n: 8, prompt: "Esta caixa é muito pesada para ti. Leva aquela que é ___.", answers: ["mais leve"] },
          { n: 9, prompt: "No ano passado a Ana estava muito gorda. Agora está ___.", answers: ["mais magra"] },
          {
            n: 10,
            prompt: "Ele é muito baixo para jogar basquete. Precisamos de um jogador ___.",
            answers: ["mais alto"],
          },
        ],
      },
      {
        id: "32.3",
        instructions: "Complete as frases com os adjetivos/advérbios na forma correta.",
        note: "O exemplo do livro é: O teu irmão não é muito alto. Tu és mais alto.",
        type: "blank",
        items: [
          {
            n: 2,
            prompt: "A casa deles não é muito grande. Eles querem comprar uma casa ___.",
            answers: ["maior"],
          },
          { n: 3, prompt: "Este vinho não sabe muito bem. Aquele é ___.", answers: ["melhor"] },
          {
            n: 4,
            prompt: "No fim de semana não se levantam muito cedo. Durante a semana levantam-se ___.",
            answers: ["mais cedo"],
          },
          { n: 5, prompt: "O inglês dele é mau. O da Ana é ___.", answers: ["pior"] },
          {
            n: 6,
            prompt: "Este empregado não é muito simpático. Aquele é ___.",
            answers: ["mais simpático"],
          },
        ],
      },
      {
        id: "32.4",
        instructions: "Complete as frases com tão … como.",
        note: "O exemplo do livro é: A igreja é mais antiga do que o museu. → O museu não é tão antigo como a igreja.",
        type: "blank",
        items: [
          {
            n: 2,
            prompt: "Espanha é maior do que Portugal. Portugal ___.",
            answers: ["não é tão grande como Espanha"],
          },
          {
            n: 3,
            prompt: "Ele joga melhor do que o João. O João ___.",
            answers: ["não joga tão bem como ele"],
          },
          {
            n: 4,
            prompt: "O leite está mais quente do que o café. O café ___.",
            answers: ["não está tão quente como o leite"],
          },
          {
            n: 5,
            prompt: "Ele come mais depressa do que a irmã. A irmã ___.",
            answers: ["não come tão depressa como ele"],
          },
          {
            n: 6,
            prompt: "A Ana é mais alta do que o Rui. O Rui ___.",
            answers: ["não é tão alto como a Ana"],
          },
        ],
      },
    ],
  },
  {
    n: 33,
    title: "superlativos",
    subtitle: "relativo e absoluto (muito … / -íssimo)",
    theory: {
      intro: [
        "Eles são todos muito altos. De fato, eles são altíssimos.",
        "Mas o Pedro é o mais alto de todos.",
      ],
      table: null,
      sections: [
        {
          heading: "Superlativo relativo",
          examples: [
            "baixo — o mais baixo · o menos baixo",
            "cedo — o mais cedo · o menos cedo",
            "bom — o melhor · o menos bom",
            "grande — o maior · o menos grande",
            "mau — o pior · o menos mau",
          ],
          note: "A forma de inferioridade (o menos …) é muito pouco usada.",
        },
        {
          heading: "Superlativo absoluto — analítico e sintético",
          examples: [
            "baixo — muito baixo · baixíssimo",
            "cedo — muito cedo · cedíssimo",
            "fácil — muito fácil · facílimo",
            "difícil — muito difícil · dificílimo",
            "bom / bem — muito bom · ótimo",
            "grande — muito grande · enorme",
            // Na tabela digitalizada o sintético de "mau" aparece como "pior", que é
            // a forma do comparativo. O próprio livro usa "péssimo" nos exemplos logo
            // abaixo, por isso é essa a forma que fica aqui.
            "mau / mal — muito mau · péssimo",
          ],
        },
        {
          examples: [
            "— Lisboa é a maior cidade de Portugal.",
            "— O filme foi péssimo. Foi mesmo o pior filme que eu vi.",
            "— Ele joga bem futebol, mas não é o melhor jogador da equipe.",
            "— Chegaste tardíssimo. O filme já começou.",
            "— Dentro da cidade, o metrô é o meio de transporte mais rápido.",
            "— A Ana e a Joana são as melhores alunas da turma.",
            "— O Pedro, o Paulo e o Miguel são todos muito altos. O mais alto é o Pedro que tem 1,90m e o menos alto é o Miguel que tem 1,87m.",
          ],
        },
      ],
    },
    exercises: [
      {
        id: "33.1",
        instructions: "Complete as frases com os adjetivos/advérbios na forma correta.",
        note: "O exemplo do livro é: Eu estou muito cheio. De fato, estou cheiíssimo.",
        type: "blank",
        items: [
          { n: 2, prompt: "Ainda é muito cedo. De fato, é ___.", answers: ["cedíssimo"] },
          { n: 3, prompt: "Ele está muito gordo. De fato, é ___.", answers: ["gordíssimo"] },
          { n: 4, prompt: "Esta bebida é muito forte. De fato, é ___.", answers: ["fortíssima"] },
          { n: 5, prompt: "Eles estão muito atrasados. De fato, estão ___.", answers: ["atrasadíssimos"] },
          { n: 6, prompt: "A tua mala está muito pesada. De fato, está ___.", answers: ["pesadíssima"] },
          { n: 7, prompt: "Este bife está muito duro. De fato, está ___.", answers: ["duríssimo"] },
          { n: 8, prompt: "A sopa está muito quente. De fato, está ___.", answers: ["quentíssima"] },
          { n: 9, prompt: "O exame foi muito difícil. De fato, foi ___.", answers: ["dificílimo"] },
          { n: 10, prompt: "O bolo de chocolate está muito bom. De fato, está ___.", answers: ["ótimo"] },
          { n: 11, prompt: "O acidente foi muito grave. De fato, foi ___.", answers: ["gravíssimo"] },
          { n: 12, prompt: "Estes sapatos foram muito caros. De fato, foram ___.", answers: ["caríssimos"] },
        ],
      },
      {
        id: "33.2",
        instructions: "Complete com os adjetivos na forma correta.",
        note: "O exemplo do livro é: O Miguel é mais velho do que o Paulo e a Ana. É o mais velho dos irmãos.",
        type: "blank",
        items: [
          {
            n: 2,
            prompt: "Este ano as férias foram melhores do que no ano passado. Foram ___ de sempre.",
            answers: ["as melhores"],
          },
          { n: 3, prompt: "Esta igreja é muito antiga. É ___ do país.", answers: ["a mais antiga"] },
          { n: 4, prompt: "Esta sala é muito grande. É ___ de todas.", answers: ["a maior"] },
          { n: 5, prompt: "O jogo de domingo foi péssimo. Foi ___ de todos.", answers: ["o pior"] },
          { n: 6, prompt: "Ela é muito bonita. É ___ das irmãs.", answers: ["a mais bonita"] },
          {
            n: 7,
            prompt: "Ele é mais alto do que os colegas. É ___ da turma.",
            answers: ["o mais alto"],
          },
          { n: 8, prompt: "Estas uvas são muito doces. São ___ de todas.", answers: ["as mais doces"] },
          {
            n: 9,
            prompt: "Este romance é muito interessante. É ___ deste escritor.",
            answers: ["o mais interessante"],
          },
          { n: 10, prompt: "Ele é um cantor muito popular. É ___ de todos.", answers: ["o mais popular"] },
        ],
      },
      {
        id: "33.3",
        instructions: "Complete as frases.",
        note: "No livro já vêm resolvidos o item 1 (Este é o restaurante mais caro de Lisboa.) e o 2 (Esse foi o melhor filme do ano.).",
        type: "blank",
        items: [
          { n: 3, prompt: "Ele é ___ do país. (homem / rico)", answers: ["o homem mais rico"] },
          { n: 4, prompt: "Hoje foi ___ da minha vida. (dia / feliz)", answers: ["o dia mais feliz"] },
          {
            n: 5,
            prompt: "Ela é ___ que eu conheci. (garota / bonito)",
            answers: ["a garota mais bonita"],
          },
          { n: 6, prompt: "O Tejo é ___ de Portugal. (grande / rio)", answers: ["o maior rio"] },
          {
            n: 7,
            prompt: "A Ana e o Pedro são ___ da turma. (bom / alunos)",
            answers: ["os melhores alunos"],
          },
          {
            n: 8,
            prompt: "Ele é ___ da atualidade. (político / popular)",
            answers: ["o político mais popular"],
          },
          { n: 9, prompt: "Este foi ___ que eu ouvi. (mau / discurso)", answers: ["o pior discurso"] },
          {
            n: 10,
            prompt: "Ela foi ___ dos anos 50. (atriz / famoso)",
            answers: ["a atriz mais famosa"],
          },
        ],
      },
    ],
  },
  {
    n: 34,
    title: "tão e tanto",
    subtitle: "exclamativas e consecutivas (tão … que, tanto … que)",
    theory: {
      intro: [
        "Ele dirige tão depressa!",
        "Ele come tantos chocolates!",
        "Que cara tão feia!",
        "Ela fala tanto ao telefone!",
      ],
      table: null,
      sections: [
        {
          heading: "tão + adjetivo (invariável)",
          examples: ["Ela é tão bonita!", "Que garota tão bonita!"],
        },
        {
          heading: "tão + advérbio (invariável)",
          examples: [
            "Falas tão depressa! Não compreendo nada.",
            "A praia é tão longe! É melhor irmos de carro.",
          ],
        },
        {
          heading: "verbo + tanto (invariável)",
          examples: ["Ele come tanto! Por isso está tão gordo."],
        },
        {
          heading: "tanto(s) / tanta(s) + substantivo (variável)",
          examples: [
            "Gastei tanto dinheiro nas compras!",
            "Não comas tantos chocolates!",
            "Tanta gente na rua!",
            "Nunca vi tantas pessoas num concerto!",
          ],
        },
        {
          heading: "tão … que",
          examples: [
            "Falas tão depressa que eu não compreendo.",
            "Ele estava tão cansado que foi logo dormir.",
          ],
        },
        {
          heading: "tanto que · tanto(s) … que · tanta(s) … que",
          examples: [
            "Ele estudou tanto que ficou com dores de cabeça.",
            "Tive tanto trabalho que não pude sair com vocês.",
            "Ele tinha tantas dores de cabeça que foi tomar um comprimido.",
          ],
        },
      ],
    },
    exercises: [
      {
        id: "34.1",
        instructions: "Complete as frases exclamativas com tão ou tanto.",
        note: "No livro já vêm resolvidos o item 1 (Está tanto calor!) e o 2 (O bebê tem uns olhos tão azuis!).",
        type: "blank",
        items: [
          { n: 3, prompt: "Que festa ___ animada!", answers: ["tão"] },
          { n: 4, prompt: "___ carros!", answers: ["Tantos"] },
          { n: 5, prompt: "Não bebas ___ cerveja!", answers: ["tanta"] },
          { n: 6, prompt: "Que vestido ___ bonito!", answers: ["tão"] },
          { n: 7, prompt: "A sopa está ___ quente!", answers: ["tão"] },
          { n: 8, prompt: "Há ___ pessoas no ponto de ônibus!", answers: ["tantas"] },
          { n: 9, prompt: "Não fales ___ depressa!", answers: ["tão"] },
          { n: 10, prompt: "Ele ganha ___ dinheiro!", answers: ["tanto"] },
          { n: 11, prompt: "A casa deles fica ___ longe!", answers: ["tão"] },
          { n: 12, prompt: "Não comas ___!", answers: ["tanto"] },
        ],
      },
      {
        id: "34.2",
        instructions: "Faça frases exclamativas com tão.",
        note: "O exemplo do livro é: Estas flores são muito bonitas. → Que flores tão bonitas!",
        type: "blank",
        items: [
          { n: 2, prompt: "Aquele cão é muito mau. — Que cão ___!", answers: ["tão mau"] },
          {
            n: 3,
            prompt: "O empregado foi muito antipático. — Que ___!",
            answers: ["empregado tão antipático"],
          },
          { n: 4, prompt: "O bolo estava muito bom. — ___!", answers: ["Que bolo tão bom"] },
          { n: 5, prompt: "O jantar foi muito caro. — ___!", answers: ["Que jantar tão caro"] },
          { n: 6, prompt: "A festa foi muito divertida. — ___!", answers: ["Que festa tão divertida"] },
          {
            n: 7,
            prompt: "Os teus amigos foram muito simpáticos. — ___!",
            answers: ["Que amigos tão simpáticos"],
          },
          { n: 8, prompt: "Este sofá é muito confortável. — ___!", answers: ["Que sofá tão confortável"] },
        ],
      },
      {
        id: "34.3",
        instructions: "Complete com tão ou tanto(s), tanta(s).",
        note: "O exemplo do livro é: Estou tão atrasada. Vou pegar um táxi.",
        type: "blank",
        items: [
          {
            n: 2,
            prompt: "Ultimamente tem havido ___ trabalho no escritório.",
            answers: ["tanto"],
          },
          { n: 3, prompt: "Ele sente-se ___ cansado.", answers: ["tão"] },
          {
            n: 4,
            prompt: "A mãe dela está ___ doente e tudo lhe faz ___ confusão.",
            answers: ["tão", "tanta"],
          },
          { n: 5, prompt: "Tive ___ sorte em encontrar os documentos.", answers: ["tanta"] },
          { n: 6, prompt: "Não precisas de trabalhar ___ horas.", answers: ["tantas"] },
        ],
      },
      {
        id: "34.4",
        instructions: "Ligue as frases com tão … que ou tanto … que.",
        note: "O exemplo do livro é: Hoje andei muito. Doem-me os pés. → Hoje andei tanto que me doem os pés.",
        type: "construct",
        items: [
          {
            n: 2,
            cue: "Estou com muitas dores. Vou tomar um comprimido.",
            answer: "Estou com tantas dores que vou tomar um comprimido.",
          },
          {
            n: 3,
            cue: "O professor fala muito depressa. Não compreendo nada.",
            answer: "O professor fala tão depressa que não compreendo nada.",
          },
          {
            n: 4,
            cue: "O dia ontem esteve muito quente. Fomos até à praia.",
            answer: "O dia ontem esteve tão quente que fomos até à praia.",
          },
          {
            n: 5,
            cue: "A Ana estudou muito. Ficou com dores de cabeça.",
            answer: "A Ana estudou tanto que ficou com dores de cabeça.",
          },
          {
            n: 6,
            cue: "Fizeste muito barulho. Acordaste o bebê.",
            answer: "Fizeste tanto barulho que acordaste o bebê.",
          },
          {
            n: 7,
            cue: "Ele comeu muito. Não consegue levantar-se.",
            answer: "Ele comeu tanto que não consegue levantar-se.",
          },
          {
            n: 8,
            cue: "Ela sentiu-se muito mal. O marido chamou o médico.",
            answer: "Ela sentiu-se tão mal que o marido chamou o médico.",
          },
        ],
      },
    ],
  },
  {
    n: 35,
    title: "comigo, contigo; para mim, para ti",
    subtitle: "preposições + pronomes pessoais",
    theory: {
      intro: [
        "— Isto é para ti. — Para mim?",
        "— Queres casar comigo? — Sim, quero casar contigo.",
      ],
      table: null,
      sections: [
        {
          heading: "com + pronome",
          examples: [
            "eu — comigo",
            "tu — contigo",
            "você — consigo",
            "ele / ela — com ele, com ela",
            "nós — conosco",
            "vocês — com vocês / convosco",
            "eles / elas — com eles, com elas",
          ],
          note: "A forma convosco (= com os senhores / as senhoras) é formal.",
        },
        {
          heading: "outras preposições (de, a, sem, até, por, para…) + pronome",
          examples: [
            "eu — mim",
            "tu — ti",
            "você — si",
            "ele / ela — ele, ela",
            "nós — nós",
            "vocês — vocês",
            "eles / elas — eles, elas",
          ],
        },
        {
          examples: [
            "— Vais comigo à festa? — Sim, vou contigo.",
            "— Espere por mim. Desço consigo no elevador.",
            "— Meus senhores, posso contar convosco para a inauguração? — Claro. Conte conosco.",
            "— Trouxe esta lembrança para ti. — Para mim? Muito obrigado.",
            "— Estivemos falando de si esta manhã, D. Fátima.",
            "— Tens visto a Joana? — Falei com ela na semana passada.",
            "— Eles moram perto de nós.",
          ],
        },
      ],
    },
    exercises: [
      {
        id: "35.1",
        instructions: "Complete com a forma correta do pronome.",
        note: "No livro é uma lista só, com o mesmo começo para as seis respostas.",
        type: "blank",
        items: [
          {
            n: 1,
            prompt:
              "Isto é para ___ (eu), ___ (tu), ___ (você), ___ (eu + tu), ___ (tu + você), ___ (ele + ela).",
            answers: ["mim", "ti", "si", "nós", "vocês", "eles"],
          },
        ],
      },
      {
        id: "35.2",
        instructions: "Complete com a forma correta do pronome contraído ou não com a preposição com.",
        note: "No livro é uma lista só, com o mesmo começo para as seis respostas.",
        type: "blank",
        items: [
          {
            n: 1,
            prompt:
              "O João quer falar ___ (eu), ___ (tu), ___ (você), ___ (Ana), ___ (eu + o Pedro), ___ (ele + ela).",
            answers: ["comigo", "contigo", "consigo", "com a Ana", "conosco", "com eles"],
          },
        ],
      },
      {
        id: "35.3",
        instructions: "Complete com o pronome contraído ou não com a preposição com.",
        note: "O exemplo do livro é: — Também vens conosco? (nós) — Vou. Vou com vocês. (vocês)",
        type: "blank",
        items: [
          {
            n: 2,
            prompt: "— O chefe quer falar ___ (você), Sr. Rocha. — Vou já falar ___ (ele).",
            answers: ["consigo", "com ele"],
          },
          {
            n: 3,
            prompt: "Hoje não vou sair ___ (eles). Podem contar ___ (eu) para o jantar.",
            answers: ["com eles", "comigo"],
          },
          {
            n: 4,
            prompt: "Meus senhores, precisava de conversar ___ (os senhores).",
            answers: ["convosco"],
          },
          { n: 5, prompt: "Ninguém falou ___ (eu) sobre esse assunto.", answers: ["comigo"] },
          {
            n: 6,
            prompt:
              "— Quem é que vai ___ (vocês) no carro? — A Ana vai ___ (nós) e o João tem de ir ___ (tu).",
            answers: ["com vocês", "conosco", "contigo"],
          },
          { n: 7, prompt: "Ontem à noite sonhei ___ (tu).", answers: ["contigo"] },
          { n: 8, prompt: "Ficámos ___ (ele) até à meia-noite.", answers: ["com ele"] },
          {
            n: 9,
            prompt: "— Posso contar ___ (você) para a inauguração? — Claro. Conte ___ (eu).",
            answers: ["consigo", "comigo"],
          },
          {
            n: 10,
            prompt:
              "Gostaria de encontrar-me ___ (o senhor e a senhora) para discutir a vossa proposta.",
            answers: ["convosco"],
          },
        ],
      },
      {
        id: "35.4",
        instructions: "Complete com a forma correta do pronome.",
        note: "O exemplo do livro é: — Esperem por mim. Estou quase pronto. — Só esperamos por ti mais cinco minutos, João.",
        type: "blank",
        items: [
          { n: 2, prompt: "Não posso começar a reunião sem ___. Por isso não te atrases.", answers: ["ti"] },
          {
            n: 3,
            prompt: "— Trouxe estas flores para ___, D. Margarida. — Para ___?! Muito obrigada.",
            answers: ["si", "mim"],
          },
          {
            n: 4,
            prompt: "Estiveram falando sobre ___ e a minha situação na companhia.",
            answers: ["mim"],
          },
          { n: 5, prompt: "Chegou esta encomenda para ___, sr. Oliveira.", answers: ["si"] },
          // A chave dá "mim (nós)": as duas servem, consoante se lê "moras perto
          // de mim" ou "de nós".
          { n: 6, prompt: "Moras perto de ___. Agora somos vizinhos.", answers: ["mim/nós"] },
          {
            n: 7,
            prompt: "Ultimamente tenho pensado em ___ e no que me disseste.",
            answers: ["ti"],
          },
          { n: 8, prompt: "Lembra-se de ___? Andámos juntos na escola.", answers: ["mim"] },
          { n: 9, prompt: "Ele conheceu a Rita e apaixonou-se logo por ___.", answers: ["ela"] },
          { n: 10, prompt: "Mentiste-me. Já não acredito em ___.", answers: ["ti"] },
        ],
      },
    ],
  },
];
