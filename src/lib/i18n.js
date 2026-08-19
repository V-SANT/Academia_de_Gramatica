// Idioma da interface: português (pt) ou espanhol (es).
//
// Duas camadas de tradução, de propósito separadas:
//
//   t(chave)   -> textos da própria app (menus, botões, mensagens). Sempre
//                 traduzidos.
//   tc(texto)  -> texto que vem do livro (instruções dos exercícios, notas,
//                 etiquetas dos exemplos). Procura-se a frase portuguesa no
//                 dicionário CONTEUDO_ES; se não houver tradução, fica em
//                 português — assim acrescentar unidades novas nunca parte nada.
//
// O material de estudo em si (frases dos exercícios, respostas, exemplos de
// gramática, banco de palavras) fica SEMPRE em português: é o que se está a
// aprender, traduzi-lo tirava-lhe o sentido.
//
// Como o tema, o idioma é uma preferência do dispositivo e não do perfil.

import { createContext, useContext } from "react";

export const IDIOMAS = [
  { valor: "pt", rotulo: "Português", nativo: "Português (PT)" },
  { valor: "es", rotulo: "Español", nativo: "Español" },
];

const IDIOMA_KEY = "ga_idioma";

export function getIdioma() {
  const guardado = localStorage.getItem(IDIOMA_KEY);
  if (IDIOMAS.some((i) => i.valor === guardado)) return guardado;
  // Sem preferência guardada, segue o idioma do navegador (só distingue es de pt).
  return typeof navigator !== "undefined" && navigator.language?.toLowerCase().startsWith("es") ? "es" : "pt";
}

export function setIdioma(valor) {
  localStorage.setItem(IDIOMA_KEY, valor);
}

const UI = {
  pt: {
    "app.subtitulo": "Português · nível 1",
    "app.nome": "Academia de Gramática",

    "nav.inicio": "Início",
    "nav.unidades": "Unidades",
    "nav.definicoes": "Definições",
    "nav.niveis": "Níveis",
    "nav.abrirMenu": "Abrir menu",
    "nav.fecharMenu": "Fechar menu",
    "nav.progressoLocal": "Progresso neste navegador",
    "nav.trocarUtilizador": "Trocar de utilizador",

    "comum.unidade": "Unidade {n}",
    "comum.verTodas": "Ver todas",
    "comum.verTodasUnidades": "Ver todas as unidades",
    "comum.comecar": "Começar",
    "comum.continuar": "Continuar",
    "comum.bloqueadaTitulo": "Bloqueada — precisas de {pct}% na Unidade {n}",

    "estado.bloqueada": "Bloqueada",
    "estado.concluida": "Concluída",
    "estado.emCurso": "Em curso",
    "estado.disponivel": "Disponível",

    "cartao.respostasCertas": "{certas}/{total} respostas certas",
    "cartao.respostas": "{total} respostas",
    "cartao.precisasDe": "Precisas de {pct}% na ",
    "cartao.paraAbrir": " para abrir esta.",

    "home.ola": "Olá, {nome} 👋",
    "home.titulo": "Bem-vindo a Academia de Gramática",
    "home.tituloCompleto": "Percurso completo!",
    "home.intro":
      "Cada unidade tem a teoria e os exercícios do livro. Precisas de {pct}% de respostas certas numa unidade para abrir a seguinte.",
    "home.introCompleto":
      "Concluíste todas as unidades disponíveis. Podes voltar a qualquer uma para rever a teoria ou melhorar a pontuação.",
    "home.progressoCurso": "Progresso do curso",
    "home.concluidas": "Concluídas",
    "home.desbloqueadas": "Desbloqueadas",
    "home.certas": "Respostas certas",
    "home.precisao": "Precisão",
    "home.proximaEtapa": "A tua próxima etapa",
    "home.proximaEtapaNota": "Continua por aqui — as unidades seguintes abrem à medida que avanças.",

    "unidades.titulo": "Unidades",
    "unidades.resumo": "{concluidas} de {total} concluídas · {desbloqueadas} desbloqueadas",
    "unidades.avisoAntes": "O percurso é sequencial: para abrir uma unidade tens de ter pelo menos ",
    "unidades.avisoForte": "{pct}% de respostas certas",
    "unidades.avisoDepois":
      " em todas as anteriores. Podes voltar a qualquer unidade já aberta para corrigir respostas e subir a percentagem.",

    "unidade.certasDeTotal": "{certas} de {total} respostas certas",
    "unidade.totalPorCorrigir": "{total} respostas para corrigir",
    "unidade.concluidaSufixo": "· concluída",
    "unidade.faltamPontos": "· faltam {pontos} p.p.",
    "unidade.seguinteAberta": "Unidade {n} desbloqueada.",
    "unidade.chegaA": "Chega a {pct}% para desbloqueares a Unidade {n}.",
    "unidade.teoria": "Teoria",
    "unidade.esconder": "Esconder",
    "unidade.mostrar": "Mostrar",
    "unidade.corrigir": "Corrigir unidade",
    "unidade.limpar": "Limpar respostas",
    "unidade.precisasNesta": "Precisas de {pct}% nesta unidade",
    "unidade.resultado": "{certas}/{total} certas ({pct}%).",
    "unidade.resultadoAbriu": "Unidade {n} desbloqueada — bom trabalho!",
    "unidade.resultadoFim": "Chegaste ao fim das unidades disponíveis.",
    "unidade.resultadoFalta":
      "Precisas de {pct}% para avançar. Corrige as respostas erradas (a resposta certa está ao lado) e volta a corrigir. As respostas em branco contam como erradas.",
    "unidade.bloqueadaTitulo": "Unidade {n} ainda bloqueada",
    "unidade.bloqueadaTexto":
      "Para abrir esta unidade precisas de pelo menos {pct}% de respostas certas na Unidade {n} —",
    "unidade.irPara": "Ir para a Unidade {n}",
    "unidade.naoEncontrada": "Unidade não encontrada",
    "unidade.voltarMenu": "Voltar ao menu das unidades",

    "ex.respostaAria": "Resposta {i} do item {n}",
    "ex.fraseAria": "Frase do item {n}",
    "ex.respostaLivro": "Resposta do livro:",
    "ex.dicaBanco": "Clica nas palavras para as riscares à medida que as usas.",
    "ex.riscar": "Riscar {palavra}",
    "ex.desriscar": "Desriscar {palavra}",
    "ex.corrigir": "Corrigir este exercício",
    "ex.resumo": "{certas}/{total} certas",
    "ex.verResposta": "ver resposta",
    "ex.esconderResposta": "Clica para esconder outra vez",

    "def.titulo": "Definições",
    "def.subtitulo": "Idioma, aparência, perfil e cópias de segurança do teu progresso.",
    "def.idioma": "Idioma da interface",
    "def.idiomaNota":
      "Muda os menus e as instruções dos exercícios. As frases, as respostas e os exemplos de gramática ficam sempre em português — é a matéria que estás estudando.",
    "def.aparencia": "Aparência",
    "def.aparenciaNota":
      "O tema fica guardado neste navegador e aplica-se a todos os perfis do dispositivo.",
    "def.perfil": "Perfil",
    "def.perfilNota": "Não há palavra-passe nem servidor — o perfil é só um nome.",
    "def.desde": "A praticar desde {data}",
    "def.perfilNovo": "Perfil novo",
    "def.resumoPerfil": "{concluidas}/{total} unidades concluídas · {pct}% de precisão",
    "def.dados": "Os teus dados",
    "def.dadosNota":
      "O progresso vive só no localStorage deste navegador. Se limpares os dados de navegação, perde-se — por isso convém exportar de vez em quando.",
    "def.exportar": "Exportar progresso",
    "def.importar": "Importar progresso",
    "def.importado": 'Progresso de "{nome}" importado.',
    "def.erroImportar": "Não consegui importar esse ficheiro: {erro}",
    "def.apagarTitulo": "Apagar o progresso deste perfil",
    "def.apagarNota":
      "Volta tudo a zero: as respostas guardadas desaparecem e só a Unidade 1 fica desbloqueada.",
    "def.apagar": "Apagar progresso",
    "def.apagarConfirmar": "Sim, apagar tudo",
    "def.cancelar": "Cancelar",
    "def.apagado": "Progresso apagado. Só a Unidade 1 fica desbloqueada.",
    "def.eliminarTitulo": "Eliminar este perfil",
    "def.eliminarNota":
      'Apaga o perfil "{nome}" e todo o progresso associado — não há forma de voltar atrás. Voltas ao ecrã de entrada; os outros perfis deste navegador não são afectados.',
    "def.eliminar": "Eliminar perfil",
    "def.eliminarConfirmar": 'Sim, eliminar "{nome}"',
    "def.eliminarDica": "Se só queres começar de novo, usa antes «{apagar}» — mantém o perfil.",
    "def.comoFunciona": "Como funciona o percurso",
    "def.regra1":
      "Uma unidade só abre quando todas as anteriores tiverem pelo menos {pct}% de respostas certas.",
    "def.regra2":
      "A percentagem é respostas certas ÷ respostas corrigíveis. Os exercícios livres (sem resposta única) não contam.",
    "def.regra3":
      'Podes voltar a qualquer unidade já aberta, corrigir o que estava errado e carregar outra vez em "Corrigir unidade" para subir a percentagem.',

    "tema.grupo": "Tema",
    "tema.claro": "Claro",
    "tema.escuro": "Escuro",
    "tema.sistema": "Sistema",
    "tema.sistemaNota": "Segue o dispositivo",

    "login.subtitulo": "Prática de português",
    "login.nome": "Nome de utilizador",
    "login.placeholder": "ex.: Valentín",
    "login.erroVazio": "Escreve um nome de utilizador para continuar.",
    "login.entrar": "Entrar",
    "login.perfis": "Perfis neste navegador",
    "login.gerir": "Gerir",
    "login.gerirTerminar": "Concluído",
    "login.eliminarAria": "Eliminar o perfil {nome}",
    "login.confirmarEliminar": 'Eliminar "{nome}" e todo o seu progresso?',
    "login.eliminar": "Eliminar",
    "login.cancelar": "Cancelar",
    "login.importar": "Já tenho um progresso exportado — importar ficheiro",
    "login.erroImportar": "Não consegui importar esse ficheiro: {erro}",
    "login.rodape":
      "Não há palavra-passe nem servidor: o teu progresso fica guardado só neste navegador, associado ao nome que escolheres.",
  },

  es: {
    "app.subtitulo": "Portugués · nivel 1",
    "app.nome": "Academia de Gramática",

    "nav.inicio": "Inicio",
    "nav.unidades": "Unidades",
    "nav.definicoes": "Ajustes",
    "nav.niveis": "Niveles",
    "nav.abrirMenu": "Abrir menú",
    "nav.fecharMenu": "Cerrar menú",
    "nav.progressoLocal": "Progreso en este navegador",
    "nav.trocarUtilizador": "Cambiar de usuario",

    "comum.unidade": "Unidad {n}",
    "comum.verTodas": "Ver todas",
    "comum.verTodasUnidades": "Ver todas las unidades",
    "comum.comecar": "Empezar",
    "comum.continuar": "Continuar",
    "comum.bloqueadaTitulo": "Bloqueada — necesitas un {pct}% en la Unidad {n}",

    "estado.bloqueada": "Bloqueada",
    "estado.concluida": "Completada",
    "estado.emCurso": "En curso",
    "estado.disponivel": "Disponible",

    "cartao.respostasCertas": "{certas}/{total} respuestas correctas",
    "cartao.respostas": "{total} respuestas",
    "cartao.precisasDe": "Necesitas un {pct}% en la ",
    "cartao.paraAbrir": " para abrir esta.",

    "home.ola": "Hola, {nome} 👋",
    "home.titulo": "Bienvenido a Academia de Gramática",
    "home.tituloCompleto": "¡Recorrido completo!",
    "home.intro":
      "Cada unidad tiene la teoría y los ejercicios del libro. Necesitas un {pct}% de respuestas correctas en una unidad para abrir la siguiente.",
    "home.introCompleto":
      "Has completado todas las unidades disponibles. Puedes volver a cualquiera para repasar la teoría o mejorar la puntuación.",
    "home.progressoCurso": "Progreso del curso",
    "home.concluidas": "Completadas",
    "home.desbloqueadas": "Desbloqueadas",
    "home.certas": "Respuestas correctas",
    "home.precisao": "Precisión",
    "home.proximaEtapa": "Tu próxima etapa",
    "home.proximaEtapaNota": "Sigue por aquí — las unidades siguientes se abren a medida que avanzas.",

    "unidades.titulo": "Unidades",
    "unidades.resumo": "{concluidas} de {total} completadas · {desbloqueadas} desbloqueadas",
    "unidades.avisoAntes": "El recorrido es secuencial: para abrir una unidad tienes que tener al menos un ",
    "unidades.avisoForte": "{pct}% de respuestas correctas",
    "unidades.avisoDepois":
      " en todas las anteriores. Puedes volver a cualquier unidad ya abierta para corregir respuestas y subir el porcentaje.",

    "unidade.certasDeTotal": "{certas} de {total} respuestas correctas",
    "unidade.totalPorCorrigir": "{total} respuestas por corregir",
    "unidade.concluidaSufixo": "· completada",
    "unidade.faltamPontos": "· faltan {pontos} p.p.",
    "unidade.seguinteAberta": "Unidad {n} desbloqueada.",
    "unidade.chegaA": "Llega al {pct}% para desbloquear la Unidad {n}.",
    "unidade.teoria": "Teoría",
    "unidade.esconder": "Ocultar",
    "unidade.mostrar": "Mostrar",
    "unidade.corrigir": "Corregir unidad",
    "unidade.limpar": "Borrar respuestas",
    "unidade.precisasNesta": "Necesitas un {pct}% en esta unidad",
    "unidade.resultado": "{certas}/{total} correctas ({pct}%).",
    "unidade.resultadoAbriu": "Unidad {n} desbloqueada — ¡buen trabajo!",
    "unidade.resultadoFim": "Has llegado al final de las unidades disponibles.",
    "unidade.resultadoFalta":
      "Necesitas un {pct}% para avanzar. Corrige las respuestas erradas (la correcta aparece al lado) y vuelve a corregir. Las respuestas en blanco cuentan como erradas.",
    "unidade.bloqueadaTitulo": "Unidad {n} todavía bloqueada",
    "unidade.bloqueadaTexto":
      "Para abrir esta unidad necesitas al menos un {pct}% de respuestas correctas en la Unidad {n} —",
    "unidade.irPara": "Ir a la Unidad {n}",
    "unidade.naoEncontrada": "Unidad no encontrada",
    "unidade.voltarMenu": "Volver al menú de unidades",

    "ex.respostaAria": "Respuesta {i} del ítem {n}",
    "ex.fraseAria": "Frase del ítem {n}",
    "ex.respostaLivro": "Respuesta del libro:",
    "ex.dicaBanco": "Haz clic en las palabras para tacharlas a medida que las usas.",
    "ex.riscar": "Tachar {palavra}",
    "ex.desriscar": "Destachar {palavra}",
    "ex.corrigir": "Corregir este ejercicio",
    "ex.resumo": "{certas}/{total} correctas",
    "ex.verResposta": "ver respuesta",
    "ex.esconderResposta": "Haz clic para ocultarla de nuevo",

    "def.titulo": "Ajustes",
    "def.subtitulo": "Idioma, apariencia, perfil y copias de seguridad de tu progreso.",
    "def.idioma": "Idioma de la interfaz",
    "def.idiomaNota":
      "Cambia los menús y las instrucciones de los ejercicios. Las frases, las respuestas y los ejemplos de gramática siguen siempre en portugués — es la materia que estás estudiando.",
    "def.aparencia": "Apariencia",
    "def.aparenciaNota":
      "El tema se guarda en este navegador y se aplica a todos los perfiles del dispositivo.",
    "def.perfil": "Perfil",
    "def.perfilNota": "No hay contraseña ni servidor — el perfil es solo un nombre.",
    "def.desde": "Practicando desde {data}",
    "def.perfilNovo": "Perfil nuevo",
    "def.resumoPerfil": "{concluidas}/{total} unidades completadas · {pct}% de precisión",
    "def.dados": "Tus datos",
    "def.dadosNota":
      "El progreso vive solo en el localStorage de este navegador. Si borras los datos de navegación, se pierde — por eso conviene exportar de vez en cuando.",
    "def.exportar": "Exportar progreso",
    "def.importar": "Importar progreso",
    "def.importado": 'Progreso de "{nome}" importado.',
    "def.erroImportar": "No pude importar ese archivo: {erro}",
    "def.apagarTitulo": "Borrar el progreso de este perfil",
    "def.apagarNota":
      "Vuelve todo a cero: las respuestas guardadas desaparecen y solo la Unidad 1 queda desbloqueada.",
    "def.apagar": "Borrar progreso",
    "def.apagarConfirmar": "Sí, borrar todo",
    "def.cancelar": "Cancelar",
    "def.apagado": "Progreso borrado. Solo la Unidad 1 queda desbloqueada.",
    "def.eliminarTitulo": "Eliminar este perfil",
    "def.eliminarNota":
      'Borra el perfil "{nome}" y todo el progreso asociado — no hay vuelta atrás. Volverás a la pantalla de entrada; los demás perfiles de este navegador no se ven afectados.',
    "def.eliminar": "Eliminar perfil",
    "def.eliminarConfirmar": 'Sí, eliminar "{nome}"',
    "def.eliminarDica": "Si solo quieres empezar de nuevo, usa «{apagar}» — mantiene el perfil.",
    "def.comoFunciona": "Cómo funciona el recorrido",
    "def.regra1":
      "Una unidad solo se abre cuando todas las anteriores tienen al menos un {pct}% de respuestas correctas.",
    "def.regra2":
      "El porcentaje es respuestas correctas ÷ respuestas corregibles. Los ejercicios libres (sin respuesta única) no cuentan.",
    "def.regra3":
      'Puedes volver a cualquier unidad ya abierta, corregir lo que estaba mal y pulsar otra vez en "Corregir unidad" para subir el porcentaje.',

    "tema.grupo": "Tema",
    "tema.claro": "Claro",
    "tema.escuro": "Oscuro",
    "tema.sistema": "Sistema",
    "tema.sistemaNota": "Sigue el dispositivo",

    "login.subtitulo": "Práctica de portugués",
    "login.nome": "Nombre de usuario",
    "login.placeholder": "ej.: Valentín",
    "login.erroVazio": "Escribe un nombre de usuario para continuar.",
    "login.entrar": "Entrar",
    "login.perfis": "Perfiles en este navegador",
    "login.gerir": "Gestionar",
    "login.gerirTerminar": "Hecho",
    "login.eliminarAria": "Eliminar el perfil {nome}",
    "login.confirmarEliminar": '¿Eliminar "{nome}" y todo su progreso?',
    "login.eliminar": "Eliminar",
    "login.cancelar": "Cancelar",
    "login.importar": "Ya tengo un progreso exportado — importar archivo",
    "login.erroImportar": "No pude importar ese archivo: {erro}",
    "login.rodape":
      "No hay contraseña ni servidor: tu progreso se guarda solo en este navegador, asociado al nombre que elijas.",
  },
};

// Texto que vem de src/data/units.js. A chave é a frase portuguesa tal como
// está no ficheiro de conteúdo.
// Exportado para se poder conferir com um script se todos os enunciados,
// notas, títulos de secção e etiquetas do conteúdo têm tradução (e se não há
// chaves órfãs depois de se mexer nos textos portugueses).
export const CONTEUDO_ES = {
  // Subtítulos das unidades
  "presente do indicativo": "presente de indicativo",
  "presente do indicativo — verbo ser": "presente de indicativo — verbo ser",
  "presente do indicativo — verbo estar": "presente de indicativo — verbo estar",
  "realização prolongada no presente": "acción en curso en el presente",
  "verbos regulares em -ar": "verbos regulares en -ar",

  // Instruções dos exercícios
  "Complete com: sou / és / é / somos / são": "Completa con: sou / és / é / somos / são",
  "Complete com: estou / estás / está / estamos / estão":
    "Completa con: estou / estás / está / estamos / estão",
  "Complete as frases. Use a forma correta dos seguintes verbos:":
    "Completa las frases. Usa la forma correcta de los siguientes verbos:",
  "Complete as seguintes frases com os verbos listados:":
    "Completa las siguientes frases con los verbos de la lista:",
  "Escreva os seguintes verbos na forma correta:": "Escribe los siguientes verbos en la forma correcta:",
  "Faça frases afirmativas ou negativas.": "Haz frases afirmativas o negativas.",
  "Faça frases completas com: sou / és / é / somos / são":
    "Haz frases completas con: sou / és / é / somos / são",
  "Faça frases completas com: estou / estás / está / estamos / estão":
    "Haz frases completas con: estou / estás / está / estamos / estão",
  "Faça frases sobre o Pedro, a Ana e sobre si próprio. Use: sempre / nunca / todos os dias / de manhã / à tarde / à noite / às vezes / normalmente":
    "Haz frases sobre el Pedro, la Ana y sobre ti mismo. Usa: sempre / nunca / todos os dias / de manhã / à tarde / à noite / às vezes / normalmente",
  "O que é que ele/ela está fazendo? (no livro há um desenho para cada ação; aqui vai só a pista)":
    "¿Qué está haciendo él/ella? (en el libro hay un dibujo por cada acción; aquí va solo la pista)",
  "O que é que está acontecendo neste momento? Faça frases verdadeiras.":
    "¿Qué está pasando en este momento? Haz frases verdaderas.",
  "Ponha o verbo na forma correta.": "Pon el verbo en la forma correcta.",
  "ser e estar — faça as duas frases (com // separa-se a segunda frase).":
    "ser y estar — haz las dos frases (con // se separa la segunda frase).",
  "ser ou estar? Faça frases completas.": "¿ser o estar? Haz frases completas.",
  "ser ou estar?": "¿ser o estar?",

  // Notas
  "Exercício pessoal — não tem uma única resposta correta, por isso não se corrige automaticamente. Serve para praticar livremente.":
    "Ejercicio personal — no tiene una única respuesta correcta, por eso no se corrige automáticamente. Sirve para practicar libremente.",
  "Usamos estar + gerúndio para descrever uma ação que está acontecendo agora, neste momento.":
    "Usamos estar + gerúndio para describir una acción que está ocurriendo ahora, en este momento.",
  'São frases sobre a tua situação real neste momento — por isso o livro aceita a versão com ou sem "não".':
    'Son frases sobre tu situación real en este momento — por eso el libro acepta la versión con o sin "não".',
  "característica do sujeito que teve de ser experimentado para se poder afirmar ou negar essa característica.":
    "característica del sujeto que hubo que experimentar para poder afirmarla o negarla.",
  "característica geral do sujeito que não necessita de ser experimentado para se poder afirmar ou negar essa característica.":
    "característica general del sujeto que no hace falta experimentar para poder afirmarla o negarla.",
  "característica que não é resultado de uma ação.": "característica que no es resultado de una acción.",
  "característica que resultou de uma ação.": "característica que resulta de una acción.",

  // Títulos de secções de teoria
  "Usamos o presente do indicativo para:": "Usamos el presente de indicativo para:",
  "ações habituais": "acciones habituales",
  "ações num futuro próximo": "acciones en un futuro próximo",
  "constatar um fato": "constatar un hecho",
  "estar + adjetivo": "estar + adjetivo",
  "ser + adjetivo": "ser + adjetivo",

  // Etiquetas dos exemplos
  adjetivo: "adjetivo",
  "adjetivo (característica temporária)": "adjetivo (característica temporal)",
  "advérbio de lugar": "adverbio de lugar",
  "com + substantivo (= ter + substantivo)": "com + sustantivo (= ter + sustantivo)",
  cumprimentar: "saludar",
  "em + local (sujeito móvel)": "em + lugar (sujeto móvil)",
  "estado civil": "estado civil",
  "matéria (de + substantivo)": "material (de + sustantivo)",
  nacionalidades: "nacionalidades",
  "origem (de + substantivo)": "origen (de + sustantivo)",
  "posse (de + substantivo)": "posesión (de + sustantivo)",
  profissões: "profesiones",
  "situação geográfica (sujeito fixo)": "situación geográfica (sujeto fijo)",
  substantivo: "sustantivo",
  "tempo cronológico (horas, dias da semana, datas)": "tiempo cronológico (horas, días, fechas)",
  "tempo meteorológico": "tiempo meteorológico",

  // ---- Unidades 6-15 ----
  // Não se traduz o que é matéria de estudo (listas de formas verbais, de
  // pronomes) nem o que já se lê igual em espanhol: sem entrada, tc() devolve
  // o português, que é o que se quer nesses casos.

  // Títulos e subtítulos
  "verbos regulares em -er": "verbos regulares en -er",
  "verbos irregulares em -er": "verbos irregulares en -er",
  "verbos regulares e irregulares em -ir; verbos em -air":
    "verbos regulares e irregulares en -ir; verbos en -air",
  "estar + gerúndio": "estar + gerundio",
  "realização prolongada no presente vs. presente do indicativo":
    "acción en curso vs. presente de indicativo",
  "presente do indicativo — verbo ter": "presente de indicativo — verbo ter",
  "pretérito perfeito simples": "pretérito perfecto simple",
  "pretérito perfeito simples — verbos irregulares": "pretérito perfecto simple — verbos irregulares",
  "verbos regulares em -ar, -er e -ir": "verbos regulares en -ar, -er e -ir",
  "verbos irregulares; verbos em -air": "verbos irregulares; verbos en -air",
  "conjugação pronominal reflexa": "conjugación pronominal refleja",
  "colocação do pronome": "colocación del pronombre",
  "verbos regulares e irregulares": "verbos regulares e irregulares",
  "pretérito imperfeito do indicativo": "pretérito imperfecto de indicativo",

  // Instruções
  "Complete com os verbos na forma correta:": "Completa con los verbos en la forma correcta:",
  "Complete as frases com o verbo na forma correta.": "Completa las frases con el verbo en la forma correcta.",
  "Complete as seguintes frases com os verbos listados na forma correta:":
    "Completa las siguientes frases con los verbos de la lista en la forma correcta:",
  "Responda às seguintes perguntas com o verbo na forma correta.":
    "Responde a las siguientes preguntas con el verbo en la forma correcta.",
  "Responda às seguintes perguntas:": "Responde a las siguientes preguntas:",
  "Responda às seguintes perguntas usando só o verbo:":
    "Responde a las siguientes preguntas usando solo el verbo:",
  "Responda, usando só o verbo da pergunta:": "Responde usando solo el verbo de la pregunta:",
  "Responda com o verbo da pergunta.": "Responde con el verbo de la pregunta.",
  "Faça frases com o verbo na forma correta:": "Haz frases con el verbo en la forma correcta:",
  "Faça frases com os verbos na forma correta:": "Haz frases con los verbos en la forma correcta:",
  "Complete com o verbo ter na forma correta.": "Completa con el verbo ter en la forma correcta.",
  "Ponha o verbo ter na forma correta.": "Pon el verbo ter en la forma correcta.",
  "Responda com o verbo ter na forma correta.": "Responde con el verbo ter en la forma correcta.",
  "Complete com os seguintes verbos no p.p.s.:": "Completa con los siguientes verbos en el p.p.s.:",
  "Complete com os verbos no p.p.s.": "Completa con los verbos en el p.p.s.",
  "Faça frases com os verbos no p.p.s.": "Haz frases con los verbos en el p.p.s.",
  "Responda com os verbos indicados no p.p.s. Siga o exemplo:":
    "Responde con los verbos indicados en el p.p.s. Sigue el ejemplo:",
  "Escreva frases sobre o passado.": "Escribe frases sobre el pasado.",
  "O que é que a Ana fez no fim de semana passado?": "¿Qué hizo Ana el fin de semana pasado?",
  "Coloque corretamente o pronome.": "Coloca correctamente el pronombre.",
  "Complete com os seguintes verbos no imperfeito:":
    "Completa con los siguientes verbos en el imperfecto:",
  "Complete com os verbos no imperfeito:": "Completa con los verbos en el imperfecto:",
  "O que é que o Pedro fazia quando andava no colégio? Faça frases com os verbos no imperfeito.":
    "¿Qué hacía el Pedro cuando estaba en el colegio? Haz frases con los verbos en el imperfecto.",

  // Notas
  "Cada situação tem três respostas: o que faz habitualmente, o que está fazendo agora e a resposta à pergunta final.":
    "Cada situación tiene tres respuestas: lo que hace habitualmente, lo que está haciendo ahora y la respuesta a la pregunta final.",
  "O exemplo do livro é: — A viagem foi boa? — Foi, foi.":
    "El ejemplo del libro es: — A viagem foi boa? — Foi, foi.",
  "Escreve só a parte que continua a frase começada.":
    "Escribe solo la parte que continúa la frase empezada.",
  "No livro há dois espaços à volta do verbo, um antes e outro depois. Aqui escreve-se o conjunto todo já com o pronome no sítio certo.":
    "En el libro hay dos espacios alrededor del verbo, uno antes y otro después. Aquí se escribe el conjunto entero, ya con el pronombre en su sitio.",
  "Texto livre — não se corrige automaticamente. Sugestão do livro: (sábado) …acordou às 10h00. Tomou banho, tomou o café da manhã às 11h00 e foi às compras. À tarde leu o jornal e ouviu música. À noite jantou fora, foi ao cinema com os amigos e voltou para casa à meia-noite. (domingo) Dormiu até ao meio-dia e almoçou fora. À tarde arrumou a casa, escreveu aos amigos e telefonou à avó. À noite ficou em casa e foi para a cama cedo.":
    "Texto libre — no se corrige automáticamente. Sugerencia del libro: (sábado) …acordou às 10h00. Tomou banho, tomou o café da manhã às 11h00 e foi às compras. À tarde leu o jornal e ouviu música. À noite jantou fora, foi ao cinema com os amigos e voltou para casa à meia-noite. (domingo) Dormiu até ao meio-dia e almoçou fora. À tarde arrumou a casa, escreveu aos amigos e telefonou à avó. À noite ficou em casa e foi para a cama cedo.",

  // Títulos de secções de teoria
  "1.ª pessoa do singular — atenção à grafia": "1.ª persona del singular — atención a la grafía",
  "Estes verbos só se usam na forma simples:": "Estos verbos solo se usan en la forma simple:",
  "Verbos em -air": "Verbos en -air",
  "Pronomes reflexos": "Pronombres reflexivos",
  "Pronome depois do verbo (ordem normal)": "Pronombre después del verbo (orden normal)",
  "Pronome antes do verbo": "Pronombre antes del verbo",
  "Depois de: não / nunca / também / como / como é que / já / ainda não / enquanto / todos / ninguém.":
    "Después de: não / nunca / também / como / como é que / já / ainda não / enquanto / todos / ninguém.",
  "Usa-se o pretérito imperfeito para:": "Se usa el pretérito imperfecto para:",

  // Etiquetas dos exemplos
  agora: "ahora",
  "ter + substantivo": "ter + sustantivo",
  "aspecto durativo — acontecimentos a decorrer no passado":
    "aspecto durativo — hechos en curso en el pasado",
  "aspecto frequentativo — ações habituais e repetidas no passado":
    "aspecto frecuentativo — acciones habituales y repetidas en el pasado",

  // ---- Unidades 16-20 ----
  // Continua a valer o mesmo critério: os títulos que são só formas verbais
  // (estava fazendo / fiz, queria / podia / gostava, tinha feito) ficam em
  // português, porque são a matéria de estudo.

  // Títulos e subtítulos
  "costumar (imperfeito) + infinitivo": "costumar (imperfecto) + infinitivo",
  "ação habitual no passado": "acción habitual en el pasado",
  "idade e horas no passado; ações simultâneas no passado":
    "edad y horas en el pasado; acciones simultáneas en el pasado",
  "ação em curso no passado e ação pontual (p.p.s.)":
    "acción en curso en el pasado y acción puntual (p.p.s.)",
  "imperfeito de cortesia; imperfeito com valor de condicional":
    "imperfecto de cortesía; imperfecto con valor de condicional",
  "pretérito mais-que-perfeito composto do indicativo":
    "pretérito pluscuamperfecto compuesto de indicativo",

  // Instruções
  "Faça frases com o verbo no imperfeito e no presente do indicativo.":
    "Haz frases con el verbo en el imperfecto y en el presente de indicativo.",
  "Faça frases com os verbos no imperfeito.": "Haz frases con los verbos en el imperfecto.",
  "O que é que eles costumavam fazer, quando viviam no campo?":
    "¿Qué solían hacer ellos cuando vivían en el campo?",
  "Complete as frases com os verbos ser ou ter no imperfeito.":
    "Completa las frases con los verbos ser o ter en el imperfecto.",
  "Faça frases, usando o imperfeito ou o p.p.s.": "Haz frases usando el imperfecto o el p.p.s.",
  "Faça frases com os verbos no imperfeito e p.p.s.":
    "Haz frases con los verbos en el imperfecto y el p.p.s.",
  "Complete com o imperfeito ou p.p.s.": "Completa con el imperfecto o el p.p.s.",
  "Complete as perguntas com o verbo no imperfeito (3.ª pessoa singular).":
    "Completa las preguntas con el verbo en el imperfecto (3.ª persona del singular).",
  "Complete com os verbos no imperfeito.": "Completa con los verbos en el imperfecto.",
  "Faça frases com os verbos no imperfeito (= condicional) e no presente do indicativo.":
    "Haz frases con los verbos en el imperfecto (= condicional) y en el presente de indicativo.",
  "Complete com os verbos no pretérito mais-que-perfeito composto.":
    "Completa con los verbos en el pretérito pluscuamperfecto compuesto.",
  "Complete com os verbos no pretérito mais-que-perfeito composto e no p.p.s.":
    "Completa con los verbos en el pretérito pluscuamperfecto compuesto y en el p.p.s.",
  "Complete com os verbos no pretérito mais-que-perfeito composto ou no p.p.s.":
    "Completa con los verbos en el pretérito pluscuamperfecto compuesto o en el p.p.s.",

  // Notas
  "O exemplo do livro é: (eles) / levantar-se / cedo — agora / tarde → Costumavam levantar-se cedo; agora levantam-se tarde.":
    "El ejemplo del libro es: (eles) / levantar-se / cedo — agora / tarde → Costumavam levantar-se cedo; agora levantam-se tarde.",
  "Cada situação leva duas frases: primeiro o que não havia, depois o que as pessoas costumavam fazer. O exemplo do livro é: máquinas de lavar // lavar tudo à mão → Antigamente não havia máquinas de lavar. As pessoas costumavam lavar tudo à mão.":
    "Cada situación lleva dos frases: primero lo que no había, después lo que la gente solía hacer. El ejemplo del libro es: máquinas de lavar // lavar tudo à mão → Antigamente não havia máquinas de lavar. As pessoas costumavam lavar tudo à mão.",
  "O exemplo do livro é: (levantar-se cedo) → Costumavam levantar-se cedo.":
    "El ejemplo del libro es: (levantar-se cedo) → Costumavam levantar-se cedo.",
  "O exemplo do livro é: (ele / vestir-se // ela / arranjar o café da manhã) → Enquanto ele se vestia, ela arranjava o café da manhã.":
    "El ejemplo del libro es: (ele / vestir-se // ela / arranjar o café da manhã) → Enquanto ele se vestia, ela arranjava o café da manhã.",
  "Cada situação leva três frases: a ação que estava em curso e as duas que aconteceram. O exemplo do livro é: (ela / ler o jornal) → Ela estava lendo o jornal. (o telefone / tocar) → O telefone tocou. (ela / atender o telefone) → Ela atendeu o telefone.":
    "Cada situación lleva tres frases: la acción que estaba en curso y las dos que ocurrieron. El ejemplo del libro es: (ela / ler o jornal) → Ela estava lendo o jornal. (o telefone / tocar) → O telefone tocou. (ela / atender o telefone) → Ela atendeu o telefone.",
  "O exemplo do livro é: (eles / chegar // a empregada / arrumar a casa) → A empregada estava arrumando a casa quando eles chegaram.":
    "El ejemplo del libro es: (eles / chegar // a empregada / arrumar a casa) → A empregada estava arrumando a casa quando eles chegaram.",
  "Os dois primeiros itens vêm já resolvidos no livro: Estava chovendo (chover) quando (eu) saí (sair) de casa. / O que é que estavas fazendo (fazer) quando te telefonei (telefonar)?":
    "Los dos primeros ítems vienen ya resueltos en el libro: Estava chovendo (chover) quando (eu) saí (sair) de casa. / O que é que estavas fazendo (fazer) quando te telefonei (telefonar)?",
  "O pronome fica colado ao verbo, como no exemplo do livro: Podia (poder) dizer-me onde ficam os Correios, por favor?":
    "El pronombre va pegado al verbo, como en el ejemplo del libro: Podia (poder) dizer-me onde ficam os Correios, por favor?",
  "O exemplo do livro é: A Ana gostava (gostar) de tirar um curso nos Estados Unidos.":
    "El ejemplo del libro es: A Ana gostava (gostar) de tirar um curso nos Estados Unidos.",
  "O exemplo do livro é: Não tenho tempo. Por isso não vou com vocês. → Ia com vocês, mas não tenho tempo.":
    "El ejemplo del libro es: Não tenho tempo. Por isso não vou com vocês. → Ia com vocês, mas não tenho tempo.",
  "O exemplo do livro é: Não estavas em casa. (sair) → Já tinhas saído.":
    "El ejemplo del libro es: Não estavas em casa. (sair) → Já tinhas saído.",
  "O exemplo do livro é: Quando eu cheguei (chegar) a casa, a minha mãe já tinha saído (sair).":
    "El ejemplo del libro es: Quando eu cheguei (chegar) a casa, a minha mãe já tinha saído (sair).",
  "Os dois primeiros itens vêm já resolvidos no livro: Não tenho fome. Já almocei (almoçar). / Ele não tinha fome. Já tinha almoçado (almoçar).":
    "Los dos primeros ítems vienen ya resueltos en el libro: Não tenho fome. Já almocei (almoçar). / Ele não tinha fome. Já tinha almoçado (almoçar).",
  "Quando duas ações decorrem ao mesmo tempo no passado, as duas vão para o imperfeito e ligam-se com enquanto.":
    "Cuando dos acciones ocurren al mismo tiempo en el pasado, las dos van al imperfecto y se unen con enquanto.",

  // Títulos de secções de teoria
  "Ação habitual: no passado / no presente": "Acción habitual: en el pasado / en el presente",
  "Ações simultâneas no passado": "Acciones simultáneas en el pasado",
  "Imperfeito vs. p.p.s.": "Imperfecto vs. p.p.s.",
  "Ontem à noite, das 21h às 23h": "Ayer por la noche, de las 21h a las 23h",
  "Usamos o imperfeito, forma de cortesia, para fazer delicadamente uma afirmação:":
    "Usamos el imperfecto, forma de cortesía, para hacer delicadamente una afirmación:",
  "Usamos o imperfeito, forma de cortesia, para fazer delicadamente um pedido:":
    "Usamos el imperfecto, forma de cortesía, para hacer delicadamente una petición:",
  "Usamos o imperfeito (= condicional) para expressar um desejo:":
    "Usamos el imperfecto (= condicional) para expresar un deseo:",
  "Usamos o imperfeito (= condicional) para falar de ações pouco prováveis de acontecerem, porque a condição de que dependem não se realiza no presente:":
    "Usamos el imperfecto (= condicional) para hablar de acciones poco probables, porque la condición de la que dependen no se cumple en el presente:",
  "Usamos o pretérito mais-que-perfeito composto do indicativo para falar de ações passadas que aconteceram antes de outras também passadas:":
    "Usamos el pretérito pluscuamperfecto compuesto de indicativo para hablar de acciones pasadas que ocurrieron antes de otras también pasadas:",
  "Particípio passado regular": "Participio pasado regular",
  "Particípio passado irregular": "Participio pasado irregular",

  // Etiquetas dos exemplos
  "idade no passado": "edad en el pasado",
  "horas no passado": "horas en el pasado",
  "as duas ações decorrem ao mesmo tempo": "las dos acciones ocurren al mismo tiempo",
  "imperfeito — ação em curso (~)": "imperfecto — acción en curso (~)",
  "p.p.s. — ação pontual (•)": "p.p.s. — acción puntual (•)",
  "p.p.s. — ação completa": "p.p.s. — acción completa",
  "imperfeito — ação em curso": "imperfecto — acción en curso",

  // ---- Unidades 21-25 ----
  // Ficam sem entrada, de propósito, os títulos que são só formas do que se
  // está a estudar: "tenho feito", "vou fazer, estou fazendo e acabei de
  // fazer" e a lista de artigos "o, a, os, as; um, uma, uns, umas".

  // Títulos e subtítulos
  "pretérito perfeito composto do indicativo": "pretérito perfecto compuesto de indicativo",
  "futuro próximo, realização prolongada no presente e passado recente":
    "futuro próximo, acción en curso en el presente y pasado reciente",
  "futuro imperfeito do indicativo": "futuro imperfecto de indicativo",
  "condicional presente": "condicional presente",
  "artigos definidos e indefinidos": "artículos definidos e indefinidos",

  // Instruções
  "Complete com os verbos no pretérito perfeito composto.":
    "Completa con los verbos en el pretérito perfecto compuesto.",
  "Faça frases com os verbos no pretérito perfeito composto.":
    "Haz frases con los verbos en el pretérito perfecto compuesto.",
  "Complete com o pretérito perfeito composto e o p.p.s.":
    "Completa con el pretérito perfecto compuesto y el p.p.s.",
  "Faça frases com: ir + infinitivo, estar + gerúndio, acabar de + infinitivo.":
    "Haz frases con: ir + infinitivo, estar + gerúndio, acabar de + infinitivo.",
  "Faça perguntas e dê as respostas.": "Haz las preguntas y da las respuestas.",
  "Responda às seguintes perguntas.": "Responde a las siguientes preguntas.",
  "Complete com os seguintes verbos no futuro:": "Completa con los siguientes verbos en el futuro:",
  "A Joana é comissária de bordo e viaja muito. Faça frases com os verbos no futuro.":
    "La Joana es azafata y viaja mucho. Haz frases con los verbos en el futuro.",
  "Complete com os verbos no futuro.": "Completa con los verbos en el futuro.",
  "Complete as frases com os verbos na forma correta:":
    "Completa las frases con los verbos en la forma correcta:",
  "Complete as frases interrogativas com os verbos no futuro.":
    "Completa las frases interrogativas con los verbos en el futuro.",
  "Complete com o verbo no condicional.": "Completa con el verbo en el condicional.",
  "Substitua os verbos no imperfeito pelo condicional.":
    "Sustituye los verbos en imperfecto por el condicional.",
  "Complete com os verbos no condicional.": "Completa con los verbos en el condicional.",
  "Complete com os artigos definidos.": "Completa con los artículos definidos.",
  "Complete com os artigos indefinidos.": "Completa con los artículos indefinidos.",
  "Complete com os artigos definidos ou indefinidos.":
    "Completa con los artículos definidos o indefinidos.",

  // Notas
  "O exemplo do livro é: — (Tu) Tens visto (ver) a nova série da televisão? — Não. (Eu) Tenho tido (ter) muito trabalho ultimamente.":
    "El ejemplo del libro es: — (Tu) Tens visto (ver) a nova série da televisão? — Não. (Eu) Tenho tido (ter) muito trabalho ultimamente.",
  "O exemplo do livro é: (ela / faltar às aulas) → Ela tem faltado às aulas.":
    "El ejemplo del libro es: (ela / faltar às aulas) → Ela tem faltado às aulas.",
  "O exemplo do livro é: Desde que a escola abriu (abrir), têm tido (ter) muitas inscrições.":
    "El ejemplo del libro es: Desde que a escola abriu (abrir), têm tido (ter) muitas inscrições.",
  "Cada pista leva as três frases. O exemplo do livro é: eu / ler o jornal → Eu vou ler o jornal. Eu estou lendo o jornal. Eu acabei de ler o jornal.":
    "Cada pista lleva las tres frases. El ejemplo del libro es: eu / ler o jornal → Eu vou ler o jornal. Eu estou lendo o jornal. Eu acabei de ler o jornal.",
  "O exemplo do livro é: (vocês / fazer / logo à noite) (ver o filme da televisão) → O que é que vocês vão fazer logo à noite? Vamos ver o filme da televisão.":
    "El ejemplo del libro es: (vocês / fazer / logo à noite) (ver o filme da televisão) → O que é que vocês vão fazer logo à noite? Vamos ver o filme da televisão.",
  "O exemplo do livro é: Quando é que voltaste? (chegar) → Acabei de chegar.":
    "El ejemplo del libro es: Quando é que voltaste? (chegar) → Acabei de chegar.",
  "O exemplo do livro é: (amanhã às 10h / partir para Madrid) → Amanhã às 10h partirá para Madrid.":
    "El ejemplo del libro es: (amanhã às 10h / partir para Madrid) → Amanhã às 10h partirá para Madrid.",
  "O exemplo do livro é: Não fumo nem nunca fumarei.":
    "El ejemplo del libro es: Não fumo nem nunca fumarei.",
  "O exemplo do livro é: No ano passado nós estivemos (estar) na Grécia. Este ano iremos (ir) para Espanha.":
    "El ejemplo del libro es: No ano passado nós estivemos (estar) na Grécia. Este ano iremos (ir) para Espanha.",
  "Entre parênteses fica a forma do imperfeito que está no livro; escreve só o verbo no condicional. O exemplo do livro é: Nós íamos ao cinema… → Nós iríamos ao cinema, mas infelizmente não temos tempo.":
    "Entre paréntesis va la forma del imperfecto que trae el libro; escribe solo el verbo en condicional. El ejemplo del libro es: Nós íamos ao cinema… → Nós iríamos ao cinema, mas infelizmente não temos tempo.",
  "O exemplo do livro é: Fiz isso e faria outra vez.":
    "El ejemplo del libro es: Fiz isso e faria outra vez.",
  "O exemplo do livro é: uma árvore.": "El ejemplo del libro es: uma árvore.",
  "O exemplo do livro é: Lisboa é uma cidade bonita.":
    "El ejemplo del libro es: Lisboa é uma cidade bonita.",
  "No livro já vêm resolvidos o item 1 (o lápis), o 11 (o homem), o 21 (o pai) e o 31 (as calças).":
    "En el libro ya vienen resueltos el ítem 1 (o lápis), el 11 (o homem), el 21 (o pai) y el 31 (as calças).",
  "Quando o verbo principal está no particípio passado, o pronome coloca-se antes ou depois do auxiliar, conforme a regra da Unidade 14.":
    "Cuando el verbo principal está en participio pasado, el pronombre va antes o después del auxiliar, según la regla de la Unidad 14.",
  "Nos quatro primeiros casos o condicional pode ser substituído pelo pretérito imperfeito do indicativo, forma mais coloquial.":
    "En los cuatro primeros casos el condicional puede sustituirse por el pretérito imperfecto de indicativo, forma más coloquial.",
  "No plural, uns e umas têm uso restrito.": "En plural, uns y umas tienen uso restringido.",

  // Títulos de secções de teoria
  "Usamos o pretérito perfeito composto do indicativo para falar de ações que começam no passado e se prolongam até ao momento presente:":
    "Usamos el pretérito perfecto compuesto de indicativo para hablar de acciones que empiezan en el pasado y se prolongan hasta el momento presente:",
  "Colocação dos pronomes": "Colocación de los pronombres",
  "Futuro próximo — ir + infinitivo": "Futuro próximo — ir + infinitivo",
  "Realização prolongada no presente — estar + gerúndio":
    "Acción en curso en el presente — estar + gerúndio",
  "Passado recente — acabar de + infinitivo": "Pasado reciente — acabar de + infinitivo",
  "Também usamos esta forma de futuro em frases interrogativas para exprimir incerteza ou desconhecimento sobre situações presentes:":
    "También usamos esta forma de futuro en frases interrogativas para expresar incertidumbre o desconocimiento sobre situaciones presentes:",
  "Usamos o condicional para:": "Usamos el condicional para:",
  "Artigos definidos": "Artículos definidos",
  "Artigos indefinidos": "Artículos indefinidos",
  "O artigo precede o substantivo e concorda com ele em gênero e número:":
    "El artículo precede al sustantivo y concuerda con él en género y número:",
  "Não usamos o artigo definido antes de:": "No usamos el artículo definido delante de:",

  // Etiquetas dos exemplos
  meses: "meses",
  datas: "fechas",
  vocativos: "vocativos",
  "alguns nomes de países": "algunos nombres de países",

  // ---- Unidades 26-30 ----
  // Sem entrada, de propósito: os títulos que são as próprias formas em estudo
  // ("isto, isso, aquilo; aqui, aí, ali", "este, esse, aquele, etc.", "meu,
  // teu, seu, etc."), as etiquetas aqui/aí/ali e os nomes das pessoas.

  // Títulos e subtítulos
  "demonstrativos invariáveis e advérbios de lugar":
    "demostrativos invariables y adverbios de lugar",
  "demonstrativos variáveis": "demostrativos variables",
  possessivos: "posesivos",
  "discurso direto e indireto": "discurso directo e indirecto",
  "contar o que outra pessoa disse": "contar lo que otra persona dijo",
  "infinitivo pessoal": "infinitivo personal",
  "o infinitivo que muda com a pessoa": "el infinitivo que cambia con la persona",

  // Instruções
  "Complete com isto, isso, aquilo.": "Completa con isto, isso, aquilo.",
  "Complete as respostas com isto, isso, aquilo.": "Completa las respuestas con isto, isso, aquilo.",
  "Complete as respostas. Use isto, isso, aquilo, o presente do indicativo do verbo ser e os artigos definidos e indefinidos.":
    "Completa las respuestas. Usa isto, isso, aquilo, el presente de indicativo del verbo ser y los artículos definidos e indefinidos.",
  "Complete com este, esta, estes ou estas.": "Completa con este, esta, estes o estas.",
  "Complete com esse, essa, esses ou essas.": "Completa con esse, essa, esses o essas.",
  "Complete com aquele, aquela, aqueles ou aquelas.": "Completa con aquele, aquela, aqueles o aquelas.",
  "Complete com este, esse, aquele, etc.": "Completa con este, esse, aquele, etc.",
  "Complete com este(s), esta(s); esse(s), essa(s).": "Completa con este(s), esta(s); esse(s), essa(s).",
  "Complete as seguintes frases:": "Completa las siguientes frases:",
  "Use os possessivos.": "Usa los posesivos.",
  "Ontem à tarde você encontrou a Paula, uma amiga sua, que lhe contou muitas coisas. À noite conta a outra amiga tudo o que a Paula disse.":
    "Ayer por la tarde te encontraste con la Paula, una amiga tuya, que te contó muchas cosas. Por la noche le cuentas a otra amiga todo lo que la Paula dijo.",
  "Imagine que um amigo seu lhe diz uma coisa e que depois diz exatamente o contrário. Use verbos de opinião como pensar que e julgar que.":
    "Imagina que un amigo tuyo te dice una cosa y que después dice exactamente lo contrario. Usa verbos de opinión como pensar que y julgar que.",
  "Complete com os verbos no infinitivo pessoal.": "Completa con los verbos en el infinitivo personal.",
  "Ligue as frases com as palavras entre parênteses. Faça as alterações necessárias.":
    "Une las frases con las palabras entre paréntesis. Haz los cambios necesarios.",
  "Complete as frases com as preposições ao / até / para / por / sem e com os verbos no infinitivo pessoal.":
    "Completa las frases con las preposiciones ao / até / para / por / sem y con los verbos en el infinitivo personal.",

  // Notas
  "Isto, isso e aquilo vão sempre com é (um livro, uma caneta) ou são (livros, canetas).":
    "Isto, isso y aquilo van siempre con é (um livro, uma caneta) o são (livros, canetas).",
  "O exemplo do livro é: Isto aqui é um livro.": "El ejemplo del libro es: Isto aqui é um livro.",
  "O exemplo do livro é: — O que é isto? — Isso é um lápis.":
    "El ejemplo del libro es: — O que é isto? — Isso é um lápis.",
  "No livro já vêm resolvidos o item 1 (— O que é isto? (livro) → Isso é um livro.) e o 6 (— O que é isto? (livros) → Isso são livros.).":
    "En el libro ya vienen resueltos el ítem 1 (— O que é isto? (livro) → Isso é um livro.) y el 6 (— O que é isto? (livros) → Isso são livros.).",
  "O exemplo do livro é: estas pessoas.": "El ejemplo del libro es: estas pessoas.",
  "O exemplo do livro é: esse dicionário.": "El ejemplo del libro es: esse dicionário.",
  "O exemplo do livro é: aquelas crianças.": "El ejemplo del libro es: aquelas crianças.",
  "Escreve só a segunda frase. O exemplo do livro é: — O que é isto? (bolo / de chocolate) — Isso é um bolo. Esse bolo é de chocolate.":
    "Escribe solo la segunda frase. El ejemplo del libro es: — O que é isto? (bolo / de chocolate) — Isso é um bolo. Esse bolo é de chocolate.",
  "O exemplo do livro é: Essa caneta não escreve. Usa esta.":
    "El ejemplo del libro es: Essa caneta não escreve. Usa esta.",
  "No livro já vêm resolvidos o item 1 (— De quem é esta bola? (eu) → É minha.) e o 2 (— De quem são estes óculos? (ele) → São dele.).":
    "En el libro ya vienen resueltos el ítem 1 (— De quem é esta bola? (eu) → É minha.) y el 2 (— De quem são estes óculos? (ele) → São dele.).",
  "O exemplo do livro é: Vi a sra. Marques com o marido dela.":
    "El ejemplo del libro es: Vi a sra. Marques com o marido dela.",
  "No livro já vêm resolvidos o item 1 (Nós temos um apartamento. → É o nosso apartamento.) e o 2 (Ele comprou uma máquina fotográfica. → É a máquina fotográfica dele.).":
    "En el libro ya vienen resueltos el ítem 1 (Nós temos um apartamento. → É o nosso apartamento.) y el 2 (Ele comprou uma máquina fotográfica. → É a máquina fotográfica dele.).",
  "Verbos introdutórios para o discurso indireto: dizer / contar / perguntar / responder / querer saber.":
    "Verbos introductorios para el discurso indirecto: dizer / contar / perguntar / responder / querer saber.",
  "Escreve só a parte que continua a frase começada. O exemplo do livro é: Estou morando em casa dos meus pais. → A Paula disse-me que estava morando em casa dos pais dela.":
    "Escribe solo la parte que continúa la frase empezada. El ejemplo del libro es: Estou morando em casa dos meus pais. → A Paula disse-me que estava morando em casa dos pais dela.",
  "O exemplo do livro é: — Este restaurante é caro. — Pensei que tinhas dito que não era caro.":
    "El ejemplo del libro es: — Este restaurante é caro. — Pensei que tinhas dito que não era caro.",
  "A 1.ª e a 3.ª pessoa do singular são iguais ao infinitivo normal.":
    "La 1.ª y la 3.ª persona del singular son iguales al infinitivo normal.",
  "O exemplo do livro é: Fomos visitar a Ana por ela estar (estar) doente.":
    "El ejemplo del libro es: Fomos visitar a Ana por ela estar (estar) doente.",
  "O exemplo do livro é: Ele vai ao cinema. Primeiro acaba o trabalho. (depois de) → Ele vai ao cinema depois de acabar o trabalho.":
    "El ejemplo del libro es: Ele vai ao cinema. Primeiro acaba o trabalho. (depois de) → Ele vai ao cinema depois de acabar o trabalho.",
  "O exemplo do livro é: Ao entrarem (entrar) em casa, viram que estava tudo desarrumado.":
    "El ejemplo del libro es: Ao entrarem (entrar) em casa, viram que estava tudo desarrumado.",

  // Títulos de secções de teoria
  "Isto, isso e aquilo são demonstrativos invariáveis: usam-se para pedir a identificação de objetos ou para identificar objetos.":
    "Isto, isso y aquilo son demostrativos invariables: se usan para pedir la identificación de objetos o para identificarlos.",
  "A que distância está o objeto": "A qué distancia está el objeto",
  "Aqui, aí e ali são advérbios de lugar e podem ser usados com os demonstrativos:":
    "Aqui, aí y ali son adverbios de lugar y pueden usarse con los demostrativos:",
  "Demonstrativos variáveis": "Demostrativos variables",
  "Como se usam": "Cómo se usan",
  Possessivos: "Posesivos",
  "Na 3.ª pessoa usa-se de + ele/ela/eles/elas:": "En la 3.ª persona se usa de + ele/ela/eles/elas:",
  "Tempos verbais — direto → indireto": "Tiempos verbales — directo → indirecto",
  Advérbios: "Adverbios",
  "Pessoais, possessivos e demonstrativos": "Personales, posesivos y demostrativos",
  "No fim de semana passado a Ana encontrou o João numa festa":
    "El fin de semana pasado la Ana se encontró con el João en una fiesta",
  "Como se forma": "Cómo se forma",
  "Usa-se depois de expressões impessoais:": "Se usa después de expresiones impersonales:",
  "Usa-se depois de preposições:": "Se usa después de preposiciones:",
  "Usa-se depois de locuções prepositivas:": "Se usa después de locuciones prepositivas:",

  // Etiquetas dos exemplos
  lugar: "lugar",
  tempo: "tiempo",

  // ---- Unidades 31-35 ----
  // Sem entrada, de propósito: os títulos e cabeçalhos que são as próprias
  // construções em estudo ("tão e tanto", "tão … que", "mais … do que, tão …
  // como, menos … do que", "comigo, contigo; para mim, para ti").

  // Títulos e subtítulos
  imperativo: "imperativo",
  comparativos: "comparativos",
  superlativos: "superlativos",
  "relativo e absoluto (muito … / -íssimo)": "relativo y absoluto (muito … / -íssimo)",
  "exclamativas e consecutivas (tão … que, tanto … que)":
    "exclamativas y consecutivas (tão … que, tanto … que)",
  "preposições + pronomes pessoais": "preposiciones + pronombres personales",

  // Instruções
  "Complete com as formas corretas dos verbos no imperativo.":
    "Completa con las formas correctas de los verbos en el imperativo.",
  "O Miguel tem 5 anos e faz muitos disparates. A mãe está dando-lhe algumas ordens:":
    "El Miguel tiene 5 años y hace muchas travesuras. La madre le está dando algunas órdenes:",
  "Complete as frases com os verbos no imperativo.":
    "Completa las frases con los verbos en el imperativo.",
  "Complete as frases com os adjetivos/advérbios na forma correta.":
    "Completa las frases con los adjetivos/adverbios en la forma correcta.",
  "Complete as frases com os adjetivos/advérbios contrários na forma correta.":
    "Completa las frases con los adjetivos/adverbios contrarios en la forma correcta.",
  "Complete as frases com tão … como.": "Completa las frases con tão … como.",
  "Complete com os adjetivos na forma correta.": "Completa con los adjetivos en la forma correcta.",
  "Complete as frases.": "Completa las frases.",
  "Complete as frases exclamativas com tão ou tanto.":
    "Completa las frases exclamativas con tão o tanto.",
  "Faça frases exclamativas com tão.": "Haz frases exclamativas con tão.",
  "Complete com tão ou tanto(s), tanta(s).": "Completa con tão o tanto(s), tanta(s).",
  "Ligue as frases com tão … que ou tanto … que.": "Une las frases con tão … que o tanto … que.",
  "Complete com a forma correta do pronome.": "Completa con la forma correcta del pronombre.",
  "Complete com a forma correta do pronome contraído ou não com a preposição com.":
    "Completa con la forma correcta del pronombre, contraído o no con la preposición com.",
  "Complete com o pronome contraído ou não com a preposição com.":
    "Completa con el pronombre contraído o no con la preposición com.",

  // Notas
  "A forma de tu tira-se do presente (ele fala → fala); as de você e vocês tiram-se da 1.ª pessoa sem o -o (eu falo → fale, falem).":
    "La forma de tu se saca del presente (ele fala → fala); las de você y vocês se sacan de la 1.ª persona sin la -o (eu falo → fale, falem).",
  "No imperativo negativo só é diferente a forma de tu (é a formal do singular + s). Todas as outras são iguais na afirmativa e na negativa.":
    "En el imperativo negativo solo cambia la forma de tu (es la formal del singular + s). Todas las demás son iguales en afirmativa y en negativa.",
  "No livro já vem resolvido o verbo vestir: (tu) Veste o casaco. (você) Vista a blusa. (vocês) Vistam os casacos.":
    "En el libro ya viene resuelto el verbo vestir: (tu) Veste o casaco. (você) Vista a blusa. (vocês) Vistam os casacos.",
  "O exemplo do livro é: Miguel, não dispas (despir) a blusa. Está muito frio.":
    "El ejemplo del libro es: Miguel, não dispas (despir) a blusa. Está muito frio.",
  "O exemplo do livro é: — Está muito calor aqui. (tu/abrir a janela) → Abre a janela.":
    "El ejemplo del libro es: — Está muito calor aqui. (tu/abrir a janela) → Abre a janela.",
  "O comparativo de inferioridade (menos … do que) é pouco usado.":
    "El comparativo de inferioridad (menos … do que) se usa poco.",
  "O exemplo do livro é: Se eu tenho 20 anos e tu tens 21, então tu és mais velho do que eu (velho).":
    "El ejemplo del libro es: Se eu tenho 20 anos e tu tens 21, então tu és mais velho do que eu (velho).",
  "O exemplo do livro é: Este restaurante é muito caro. Vamos a outro mais barato.":
    "El ejemplo del libro es: Este restaurante é muito caro. Vamos a outro mais barato.",
  "O exemplo do livro é: O teu irmão não é muito alto. Tu és mais alto.":
    "El ejemplo del libro es: O teu irmão não é muito alto. Tu és mais alto.",
  "O exemplo do livro é: A igreja é mais antiga do que o museu. → O museu não é tão antigo como a igreja.":
    "El ejemplo del libro es: A igreja é mais antiga do que o museu. → O museu não é tão antigo como a igreja.",
  "A forma de inferioridade (o menos …) é muito pouco usada.":
    "La forma de inferioridad (o menos …) se usa muy poco.",
  "O exemplo do livro é: Eu estou muito cheio. De fato, estou cheiíssimo.":
    "El ejemplo del libro es: Eu estou muito cheio. De fato, estou cheiíssimo.",
  "O exemplo do livro é: O Miguel é mais velho do que o Paulo e a Ana. É o mais velho dos irmãos.":
    "El ejemplo del libro es: O Miguel é mais velho do que o Paulo e a Ana. É o mais velho dos irmãos.",
  "No livro já vêm resolvidos o item 1 (Este é o restaurante mais caro de Lisboa.) e o 2 (Esse foi o melhor filme do ano.).":
    "En el libro ya vienen resueltos el ítem 1 (Este é o restaurante mais caro de Lisboa.) y el 2 (Esse foi o melhor filme do ano.).",
  "No livro já vêm resolvidos o item 1 (Está tanto calor!) e o 2 (O bebê tem uns olhos tão azuis!).":
    "En el libro ya vienen resueltos el ítem 1 (Está tanto calor!) y el 2 (O bebê tem uns olhos tão azuis!).",
  "O exemplo do livro é: Estas flores são muito bonitas. → Que flores tão bonitas!":
    "El ejemplo del libro es: Estas flores são muito bonitas. → Que flores tão bonitas!",
  "O exemplo do livro é: Estou tão atrasada. Vou pegar um táxi.":
    "El ejemplo del libro es: Estou tão atrasada. Vou pegar um táxi.",
  "O exemplo do livro é: Hoje andei muito. Doem-me os pés. → Hoje andei tanto que me doem os pés.":
    "El ejemplo del libro es: Hoje andei muito. Doem-me os pés. → Hoje andei tanto que me doem os pés.",
  "A forma convosco (= com os senhores / as senhoras) é formal.":
    "La forma convosco (= com os senhores / as senhoras) es formal.",
  "No livro é uma lista só, com o mesmo começo para as seis respostas.":
    "En el libro es una sola lista, con el mismo comienzo para las seis respuestas.",
  "O exemplo do livro é: — Também vens conosco? (nós) — Vou. Vou com vocês. (vocês)":
    "El ejemplo del libro es: — Também vens conosco? (nós) — Vou. Vou com vocês. (vocês)",
  "O exemplo do livro é: — Esperem por mim. Estou quase pronto. — Só esperamos por ti mais cinco minutos, João.":
    "El ejemplo del libro es: — Esperem por mim. Estou quase pronto. — Só esperamos por ti mais cinco minutos, João.",

  // Títulos de secções de teoria
  "Imperativo afirmativo — regulares": "Imperativo afirmativo — regulares",
  "Imperativo negativo — regulares": "Imperativo negativo — regulares",
  "Usamos as formas do imperativo para:": "Usamos las formas del imperativo para:",
  "Superioridade · igualdade · inferioridade": "Superioridad · igualdad · inferioridad",
  "Superlativo relativo": "Superlativo relativo",
  "Superlativo absoluto — analítico e sintético": "Superlativo absoluto — analítico y sintético",
  "tão + adjetivo (invariável)": "tão + adjetivo (invariable)",
  "tão + advérbio (invariável)": "tão + adverbio (invariable)",
  "verbo + tanto (invariável)": "verbo + tanto (invariable)",
  "tanto(s) / tanta(s) + substantivo (variável)": "tanto(s) / tanta(s) + sustantivo (variable)",
  "com + pronome": "com + pronombre",
  "outras preposições (de, a, sem, até, por, para…) + pronome":
    "otras preposiciones (de, a, sem, até, por, para…) + pronombre",

  // Etiquetas dos exemplos
  "dar ordens": "dar órdenes",
  "dar conselhos": "dar consejos",
  "dar sugestões": "dar sugerencias",

  // ---- Unidades 36-40 ----
  // Sem entrada, de propósito: os títulos que são as próprias formas em estudo
  // ("me, te, o, a, etc.", "me, te, lhe; mo, ma, lho, lha") e a frase-exemplo
  // "vendem-se apartamentos".

  // Títulos e subtítulos
  "pronomes pessoais complemento direto": "pronombres personales de complemento directo",
  "pronomes complemento indireto e contrações":
    "pronombres de complemento indirecto y contracciones",
  "voz passiva": "voz pasiva",
  "ser + particípio passado": "ser + participio pasado",
  "estar + particípio passado": "estar + participio pasado",
  "passiva de resultado e particípios duplos": "pasiva de resultado y participios dobles",
  "palavra apassivante se": "el se pasivo",

  // Instruções
  "Complete com as formas corretas dos pronomes.":
    "Completa con las formas correctas de los pronombres.",
  "Substitua o complemento direto pelo pronome correspondente e faça as alterações necessárias.":
    "Sustituye el complemento directo por el pronombre correspondiente y haz los cambios necesarios.",
  "Complete com as formas contraídas dos pronomes.":
    "Completa con las formas contraídas de los pronombres.",
  "Substitua o complemento direto e o indireto pelo pronome correspondente. Depois faça a contração.":
    "Sustituye el complemento directo y el indirecto por el pronombre correspondiente. Después haz la contracción.",
  "Faça frases na passiva.": "Haz frases en pasiva.",
  "Ponha as frases na passiva.": "Pon las frases en pasiva.",
  "Complete com o verbo na passiva.": "Completa con el verbo en pasiva.",
  "Responda com uma frase na passiva.": "Responde con una frase en pasiva.",
  "Complete as frases com estar + particípio passado, exprimindo o resultado da ação.":
    "Completa las frases con estar + participio pasado, expresando el resultado de la acción.",
  "Faça frases com estar + particípio passado.": "Haz frases con estar + participio pasado.",
  "Transforme as frases destacadas em frases passivas com o auxiliar estar + particípio passado.":
    "Transforma las frases destacadas en frases pasivas con el auxiliar estar + participio pasado.",
  "Faça frases com a palavra apassivante se.": "Haz frases con el se pasivo.",
  "Transforme as frases na ativa em frases com a palavra apassivante se.":
    "Transforma las frases en activa en frases con el se pasivo.",
  "Transforme as frases na ativa em frases passivas com a palavra apassivante se.":
    "Transforma las frases en activa en frases pasivas con el se pasivo.",
  "Transforme as frases na passiva (ser + particípio passado) em frases com a palavra apassivante se.":
    "Transforma las frases en pasiva (ser + participio pasado) en frases con el se pasivo.",

  // Notas
  "O exemplo do livro é: Eu conheço a Ana e a Ana conhece-me.":
    "El ejemplo del libro es: Eu conheço a Ana e a Ana conhece-me.",
  "O exemplo do livro é: Fomos buscar os nossos amigos à estação. → Fomos buscá-los à estação.":
    "El ejemplo del libro es: Fomos buscar os nossos amigos à estação. → Fomos buscá-los à estação.",
  "O exemplo do livro é: Ajudas-me a fazer o exercício? Sozinho não consigo.":
    "El ejemplo del libro es: Ajudas-me a fazer o exercício? Sozinho não consigo.",
  "O exemplo do livro é: (Eu preciso do dicionário). Podes emprestar-me o dicionário?":
    "El ejemplo del libro es: (Eu preciso do dicionário). Podes emprestar-me o dicionário?",
  "O exemplo do livro é: Esse livro é meu. Dá-mo.":
    "El ejemplo del libro es: Esse livro é meu. Dá-mo.",
  "São três passos: primeiro só o complemento direto, depois só o indireto e por fim os dois contraídos. O exemplo do livro é: O Pedro emprestou as cassetes à Ana. → O Pedro emprestou-as à Ana. / O Pedro emprestou-lhe as cassetes. / O Pedro emprestou-lhas.":
    "Son tres pasos: primero solo el complemento directo, después solo el indirecto y al final los dos contraídos. El ejemplo del libro es: O Pedro emprestou as cassetes à Ana. → O Pedro emprestou-as à Ana. / O Pedro emprestou-lhe as cassetes. / O Pedro emprestou-lhas.",
  "Exceções: Ele quer os chocolates. → Ele quere-os. / Tu tens a minha caneta. → Tu tem-la.":
    "Excepciones: Ele quer os chocolates. → Ele quere-os. / Tu tens a minha caneta. → Tu tem-la.",
  "Quando na ativa o sujeito é indeterminado e não está expresso, omite-se o agente da passiva.":
    "Cuando en la activa el sujeto es indeterminado y no está expreso, se omite el agente de la pasiva.",
  "O exemplo do livro é: O jornalista Rui Silva escreveu o artigo. → O artigo foi escrito pelo jornalista Rui Silva.":
    "El ejemplo del libro es: O jornalista Rui Silva escreveu o artigo. → O artigo foi escrito pelo jornalista Rui Silva.",
  "Aqui o agente não se diz, porque na ativa o sujeito é indeterminado. O exemplo do livro é: Chamaram a ambulância imediatamente. → A ambulância foi chamada imediatamente.":
    "Aquí no se dice el agente, porque en la activa el sujeto es indeterminado. El ejemplo del libro es: Chamaram a ambulância imediatamente. → A ambulância foi chamada imediatamente.",
  "O exemplo do livro é: Onde está a minha bicicleta? (roubar) → Foi roubada?!":
    "El ejemplo del libro es: Onde está a minha bicicleta? (roubar) → Foi roubada?!",
  "O exemplo do livro é: — Foste tu que pagaste o jantar? — Sim, sim. O jantar foi pago por mim.":
    "El ejemplo del libro es: — Foste tu que pagaste o jantar? — Sim, sim. O jantar foi pago por mim.",
  "Com ter usa-se o particípio regular, que é invariável; com ser e estar usa-se o irregular, que concorda em gênero e número com o sujeito. O livro (português europeu) dá aceite onde no Brasil se diz aceito.":
    "Con ter se usa el participio regular, que es invariable; con ser y estar se usa el irregular, que concuerda en género y número con el sujeto. El libro (portugués europeo) trae aceite donde en Brasil se dice aceito.",
  "O exemplo do livro é: Já foi tudo combinado. Portanto, está tudo combinado.":
    "El ejemplo del libro es: Já foi tudo combinado. Portanto, está tudo combinado.",
  "O exemplo do livro é: Já paguei a conta. → A conta está paga.":
    "El ejemplo del libro es: Já paguei a conta. → A conta está paga.",
  "No livro já vêm resolvidos o item 1 (Quando me sentei, vi que tinha rompido a saia. → …vi que a saia estava rota.) e o 2 (A minha blusa de lã já foi lavada? → A minha blusa de lã já está lavada?).":
    "En el libro ya vienen resueltos el ítem 1 (Quando me sentei, vi que tinha rompido a saia. → …vi que a saia estava rota.) y el 2 (A minha blusa de lã já foi lavada? → A minha blusa de lã já está lavada?).",
  "O exemplo do livro é: alugar / quartos → Alugam-se quartos.":
    "El ejemplo del libro es: alugar / quartos → Alugam-se quartos.",
  "Escreve só a parte que continua a frase começada. O exemplo do livro é: Em Portugal as pessoas veem muito televisão. → Em Portugal vê-se muito televisão.":
    "Escribe solo la parte que continúa la frase empezada. El ejemplo del libro es: Em Portugal as pessoas veem muito televisão. → Em Portugal vê-se muito televisão.",
  "O exemplo do livro é: Inauguraram ontem a ponte. → Inaugurou-se ontem a ponte.":
    "El ejemplo del libro es: Inauguraram ontem a ponte. → Inaugurou-se ontem a ponte.",
  "O exemplo do livro é: A alface é lavada e temperada em seguida. → Lava-se a alface e tempera-se em seguida.":
    "El ejemplo del libro es: A alface é lavada e temperada em seguida. → Lava-se a alface e tempera-se em seguida.",

  // Títulos de secções de teoria
  "Complemento direto": "Complemento directo",
  "Formas verbais terminadas em -r, -s, -z: o pronome fica -lo, -la, -los, -las":
    "Formas verbales terminadas en -r, -s, -z: el pronombre pasa a -lo, -la, -los, -las",
  "Formas verbais terminadas em -ão, -õe, -m: o pronome fica -no, -na, -nos, -nas":
    "Formas verbales terminadas en -ão, -õe, -m: el pronombre pasa a -no, -na, -nos, -nas",
  "Complemento indireto": "Complemento indirecto",
  "Contrações — complemento indireto + complemento direto":
    "Contracciones — complemento indirecto + complemento directo",
  "Na voz passiva usamos:": "En la voz pasiva usamos:",
  Presente: "Presente",
  Passado: "Pasado",
  Futuro: "Futuro",
  "Omissão do agente da passiva": "Omisión del agente de la pasiva",
  "Passiva de resultado — estar + particípio passado":
    "Pasiva de resultado — estar + participio pasado",
  "Particípios duplos — regular (com ter) · irregular (com ser e estar)":
    "Participios dobles — regular (con ter) · irregular (con ser y estar)",
  "Usamos a palavra apassivante se:": "Usamos el se pasivo:",

  // ---- Unidades 41-45 ----
  // Sem entrada, de propósito: as próprias preposições, locuções e formas em
  // estudo ("a, de, em, para, por", "em cima de · dentro de · debaixo de",
  // "quem, o que, qual…", "algum, nenhum, todo…") — é o que se está a aprender.

  // Títulos e subtítulos
  "preposições de movimento": "preposiciones de movimiento",
  "preposições e locuções de lugar": "preposiciones y locuciones de lugar",
  "preposições de tempo": "preposiciones de tiempo",
  interrogativos: "interrogativos",
  indefinidos: "indefinidos",

  // Instruções
  "Complete com a (contraído ou não com o artigo) ou para.":
    "Completa con a (contraído o no con el artículo) o para.",
  "Complete com para ou por (contraído ou não com o artigo).":
    "Completa con para o por (contraído o no con el artículo).",
  "Complete com de (contraído ou não com o artigo) ou em (contraído com o artigo).":
    "Completa con de (contraído o no con el artículo) o em (contraído con el artículo).",
  "Faça frases, conjugando os verbos e usando as preposições contraídas ou não com o artigo.":
    "Haz frases, conjugando los verbos y usando las preposiciones contraídas o no con el artículo.",
  "Complete com: à, à frente de, ao lado de, debaixo de, dentro de, em, em frente de, entre (contraídas ou não com o artigo).":
    "Completa con: à, à frente de, ao lado de, debaixo de, dentro de, em, em frente de, entre (contraídas o no con el artículo).",
  "Observe a gravura e complete as frases com preposições e locuções (contraídas ou não com o artigo).":
    "Observa el dibujo y completa las frases con preposiciones y locuciones (contraídas o no con el artículo).",
  "Observe a fotografia e complete as frases com preposições e locuções (contraídas ou não com o artigo).":
    "Observa la fotografía y completa las frases con preposiciones y locuciones (contraídas o no con el artículo).",
  "Preencha com a, de ou em, contraídos ou não com o artigo.":
    "Rellena con a, de o em, contraídos o no con el artículo.",
  "Complete com a ou em contraídos com o artigo.":
    "Completa con a o em contraídos con el artículo.",
  "Complete com a, de ou em (contraídos ou não com o artigo).":
    "Completa con a, de o em (contraídos o no con el artículo).",
  "Complete com: quantos / quantas / como / onde / qual / o que / de que cor / quanto tempo / quem / a que horas.":
    "Completa con: quantos / quantas / como / onde / qual / o que / de que cor / quanto tempo / quem / a que horas.",
  "Faça perguntas para obter como resposta a parte destacada da frase.":
    "Haz preguntas cuya respuesta sea la parte destacada de la frase.",
  "Complete com onde ou preposição + onde.": "Completa con onde o preposición + onde.",
  "Complete com quem ou preposição + quem.": "Completa con quem o preposición + quem.",
  "Complete com o que, que ou preposição + que.": "Completa con o que, que o preposición + que.",
  "Complete com quanto, quantos ou quantas.": "Completa con quanto, quantos o quantas.",
  "Complete com os indefinidos variáveis e invariáveis.":
    "Completa con los indefinidos variables e invariables.",
  "Complete com os antônimos dos indefinidos destacados, fazendo as alterações necessárias.":
    "Completa con los antónimos de los indefinidos destacados, haciendo los cambios necesarios.",

  // Notas
  "Combinações: a + a = à · a + o = ao · a + as = às · a + os = aos.":
    "Combinaciones: a + a = à · a + o = ao · a + as = às · a + os = aos.",
  "Combinações: por + a = pela · por + o = pelo · por + as = pelas · por + os = pelos.":
    "Combinaciones: por + a = pela · por + o = pelo · por + as = pelas · por + os = pelos.",
  "Combinações: de + a = da · de + o = do · de + as = das · de + os = dos.":
    "Combinaciones: de + a = da · de + o = do · de + as = das · de + os = dos.",
  "Combinações: em + a = na · em + o = no · em + as = nas · em + os = nos.":
    "Combinaciones: em + a = na · em + o = no · em + as = nas · em + os = nos.",
  "O exemplo do livro é: (eu / ir / carro / emprego) → Eu vou de carro para o emprego.":
    "El ejemplo del libro es: (eu / ir / carro / emprego) → Eu vou de carro para o emprego.",
  "No livro cada frase tem um desenho; aqui a frase já diz o suficiente para escolher a preposição.":
    "En el libro cada frase lleva un dibujo; aquí la frase ya dice lo suficiente para elegir la preposición.",
  "A gravura do livro é uma sala de estar: o sofá em frente da televisão, o gato debaixo da mesa, os quadros na parede, a avó com o cão atrás dela.":
    "El dibujo del libro es un salón: el sofá frente a la televisión, el gato debajo de la mesa, los cuadros en la pared, la abuela con el perro detrás de ella.",
  "Na fotografia do livro estão de pé, da esquerda para a direita, o avô António, a D. Helena e o Afonso; sentados no sofá, o João, a Ana e o Pedro.":
    "En la fotografía del libro están de pie, de izquierda a derecha, el abuelo António, la D. Helena y el Afonso; sentados en el sofá, el João, la Ana y el Pedro.",
  "O exemplo do livro é: A viagem foi cansativa. → Como foi a viagem?":
    "El ejemplo del libro es: A viagem foi cansativa. → Como foi a viagem?",
  "É que vem depois do interrogativo (antes do verbo) ou depois do substantivo que o acompanha.":
    "É que va después del interrogativo (antes del verbo) o después del sustantivo que lo acompaña.",
  "O exemplo do livro é: — Encontraste alguém no café? — Não, não encontrei ninguém.":
    "El ejemplo del libro es: — Encontraste alguém no café? — Não, não encontrei ninguém.",
  "No livro já vêm resolvidos os itens 1 (Está alguém à nossa espera? → Não está ninguém à nossa espera?), 2 (Ele comeu tudo. → Ele não comeu nada.) e 3 (Encontrámos muitas pessoas conhecidas. → Encontrámos poucas pessoas conhecidas.).":
    "En el libro ya vienen resueltos los ítems 1 (Está alguém à nossa espera? → Não está ninguém à nossa espera?), 2 (Ele comeu tudo. → Ele não comeu nada.) y 3 (Encontrámos muitas pessoas conhecidas. → Encontrámos poucas pessoas conhecidas.).",

  // Títulos de secções de teoria
  "a — ir / vir / voltar a… (curta permanência)": "a — ir / vir / voltar a… (estancia corta)",
  "para — ir / vir / voltar para… (longa permanência), direção e destino":
    "para — ir / vir / voltar para… (estancia larga), dirección y destino",
  "por — através de, perto de": "por — a través de, cerca de",
  "de — origem ou proveniência; meios de transporte":
    "de — origen o procedencia; medios de transporte",
  "em + artigo — meio de transporte determinado": "em + artigo — medio de transporte determinado",
  "A expressão de realce é que": "La expresión de realce é que",
  "Indefinidos variáveis — pessoas ou coisas": "Indefinidos variables — personas o cosas",
  "Indefinidos invariáveis": "Indefinidos invariables",
  "quem…? (pessoas)": "quem…? (personas)",
  "quando…? (tempo) · onde…? (local)": "quando…? (tiempo) · onde…? (lugar)",

  // Etiquetas dos exemplos
  local: "lugar",
  "datas (com dia do mês)": "fechas (con día del mes)",
  "dias da semana (ação habitual)": "días de la semana (acción habitual)",
  horas: "horas",
  "partes do dia": "partes del día",
  "datas (com dia)": "fechas (con día)",
  "dias da semana (ação pontual)": "días de la semana (acción puntual)",
  "épocas festivas": "épocas festivas",
  "estações do ano": "estaciones del año",
  anos: "años",
  séculos: "siglos",
  "localização temporal": "localización temporal",
  "tempo aproximado": "tiempo aproximado",
  "período de tempo": "período de tiempo",

  // ---- Unidades 46-50 ----
  // Sem entrada, de propósito: os próprios relativos, verbos e formas em
  // estudo ("que, quem, onde, o qual, cujo", "poder, conseguir, saber,
  // conhecer", "haver; haver de + infinitivo", "desde e há").

  // Títulos e subtítulos
  relativos: "relativos",
  "dever, ter de/que e precisar de": "dever, ter de/que y precisar de",
  "gerúndio simples; ir + gerúndio": "gerundio simple; ir + gerundio",
  "realização gradual": "realización gradual",
  "expressões de tempo": "expresiones de tiempo",
  "forma impessoal e intenção no futuro": "forma impersonal e intención en el futuro",

  // Instruções
  "Complete com que, quem ou onde.": "Completa con que, quem o onde.",
  "Substitua o relativo invariável pela forma variável correspondente.":
    "Sustituye el relativo invariable por la forma variable correspondiente.",
  "Substitua a parte destacada pelo relativo cujo(s), cuja(s).":
    "Sustituye la parte destacada por el relativo cujo(s), cuja(s).",
  "Ligue as duas frases com um relativo.": "Une las dos frases con un relativo.",
  "Complete com poder, conseguir, saber ou conhecer na forma correta.":
    "Completa con poder, conseguir, saber o conhecer en la forma correcta.",
  "Complete com precisar de na forma correta.": "Completa con precisar de en la forma correcta.",
  "Complete com dever na forma correta — probabilidade.":
    "Completa con dever en la forma correcta — probabilidad.",
  "Complete com dever na forma correta — conselho.":
    "Completa con dever en la forma correcta — consejo.",
  "Complete com ter de / que na forma correta.": "Completa con ter de / que en la forma correcta.",
  "Complete as frases substituindo a parte destacada pelo gerúndio.":
    "Completa las frases sustituyendo la parte destacada por el gerundio.",
  "Responda às perguntas com o gerúndio.": "Responde a las preguntas con el gerundio.",
  "Complete com ir + gerúndio: enquanto o professor não chega, os alunos…":
    "Completa con ir + gerundio: mientras el profesor no llega, los alumnos…",
  "Complete com ir + gerúndio: enquanto a D. Rita vai às compras, a empregada…":
    "Completa con ir + gerundio: mientras la D. Rita va a la compra, la empleada…",
  "Complete com ir + gerúndio: enquanto o senhor doutor está na reunião, eu…":
    "Completa con ir + gerundio: mientras el señor doctor está en la reunión, yo…",
  "Complete com desde ou há.": "Completa con desde o há.",
  "Faça frases com desde e há.": "Haz frases con desde y há.",
  "Complete com desde e há.": "Completa con desde y há.",
  "Responda às seguintes perguntas com desde ou há.":
    "Responde a las siguientes preguntas con desde o há.",
  "Substitua o verbo destacado pela forma correta do verbo haver.":
    "Sustituye el verbo destacado por la forma correcta del verbo haver.",
  "A Ana está conversando com a Rita sobre o cruzeiro que tenciona fazer ao Mediterrâneo. Complete o diálogo com haver de + infinitivo na forma correta.":
    "La Ana está hablando con la Rita sobre el crucero que piensa hacer por el Mediterráneo. Completa el diálogo con haver de + infinitivo en la forma correcta.",
  "Substitua o futuro por haver de + infinitivo na forma correta.":
    "Sustituye el futuro por haver de + infinitivo en la forma correcta.",

  // Notas
  "Os relativos referem-se a pessoas, coisas ou lugares que os antecedem. Quem vem geralmente precedido de preposição; onde exprime uma circunstância de lugar.":
    "Los relativos se refieren a personas, cosas o lugares que los anteceden. Quem va generalmente precedido de preposición; onde expresa una circunstancia de lugar.",
  "O/a qual e os/as quais concordam em gênero e número com o antecedente e usam-se geralmente precedidos de preposição. Cujo(s), cuja(s) indicam posse e concordam com o substantivo que precedem.":
    "O/a qual y os/as quais concuerdan en género y número con el antecedente y se usan generalmente precedidos de preposición. Cujo(s), cuja(s) indican posesión y concuerdan con el sustantivo al que preceden.",
  "O exemplo do livro é: Gosto muito da casa onde moro.":
    "El ejemplo del libro es: Gosto muito da casa onde moro.",
  "Escreve só o relativo novo. O exemplo do livro é: O ônibus em que viajámos tinha ar condicionado. → O ônibus no qual viajámos…":
    "Escribe solo el relativo nuevo. El ejemplo del libro es: O ônibus em que viajámos tinha ar condicionado. → O ônibus no qual viajámos…",
  "Escreve só a parte que muda. O exemplo do livro é: A garota de olhos azuis é a irmã da Ana. → A garota, cujos olhos são azuis, é a irmã da Ana.":
    "Escribe solo la parte que cambia. El ejemplo del libro es: A garota de olhos azuis é a irmã da Ana. → A garota, cujos olhos são azuis, é a irmã da Ana.",
  "O exemplo do livro é: Os produtos são para exportação. Os produtos são feitos nesta fábrica. → Os produtos que são feitos nesta fábrica são para exportação.":
    "El ejemplo del libro es: Os produtos são para exportação. Os produtos são feitos nesta fábrica. → Os produtos que são feitos nesta fábrica são para exportação.",
  "O exemplo do livro é: Podia dizer-me as horas, por favor?":
    "El ejemplo del libro es: Podia dizer-me as horas, por favor?",
  "No livro já vêm resolvidos o item 1 (Estás a ficar muito gorda. (fazer ginástica) → Precisas de fazer ginástica.) e o 2 (A roupa está suja. (lavar) → Precisa de ser lavada.).":
    "En el libro ya vienen resueltos el ítem 1 (Estás a ficar muito gorda. (fazer ginástica) → Precisas de fazer ginástica.) y el 2 (A roupa está suja. (lavar) → Precisa de ser lavada.).",
  "O exemplo do livro é: — Sabes se a Ana está em casa? — (provavelmente está) Deve estar.":
    "El ejemplo del libro es: — Sabes se a Ana está em casa? — (provavelmente está) Deve estar.",
  "O exemplo do livro é: Estás muito gordo. Devias comer menos.":
    "El ejemplo del libro es: Estás muito gordo. Devias comer menos.",
  "Qualquer destas respostas pode ter como alternativa ter que na forma correta. O exemplo do livro é: Temos de ganhar o jogo hoje. É a nossa última oportunidade.":
    "Cualquiera de estas respuestas admite como alternativa ter que en la forma correcta. El ejemplo del libro es: Temos de ganhar o jogo hoje. É a nossa última oportunidade.",
  "O exemplo do livro é: Quando chego a casa, abro logo a televisão. → Chegando a casa, abro logo a televisão.":
    "El ejemplo del libro es: Quando chego a casa, abro logo a televisão. → Chegando a casa, abro logo a televisão.",
  "O exemplo do livro é: — Como é que os ladrões entraram? — Partindo (partir) o vidro.":
    "El ejemplo del libro es: — Como é que os ladrões entraram? — Partindo (partir) o vidro.",
  "O exemplo do livro é: vão lendo o texto (ler o texto).":
    "El ejemplo del libro es: vão lendo o texto (ler o texto).",
  "O exemplo do livro é: vai fazendo as camas (fazer as camas).":
    "El ejemplo del libro es: vai fazendo as camas (fazer as camas).",
  "O exemplo do livro é: vou telefonando aos clientes (telefonar aos clientes).":
    "El ejemplo del libro es: vou telefonando aos clientes (telefonar aos clientes).",
  "Cada situação leva duas frases: uma com desde e outra com há. O exemplo do livro é: São dez da manhã. Acordei às 8h00. → Estou acordada desde as 8h00. / Estou acordada há duas horas.":
    "Cada situación lleva dos frases: una con desde y otra con há. El ejemplo del libro es: São dez da manhã. Acordei às 8h00. → Estou acordada desde as 8h00. / Estou acordada há duas horas.",
  "Quando o há indica um momento no passado, o verbo está sempre no passado.":
    "Cuando el há indica un momento en el pasado, el verbo va siempre en pasado.",
  "Escreve só a forma do verbo haver. O exemplo do livro é: Ontem não tivemos aulas. → Ontem não houve aulas.":
    "Escribe solo la forma del verbo haver. El ejemplo del libro es: Ontem não tivemos aulas. → Ontem não houve aulas.",
  "O exemplo do livro é a primeira fala: Um cruzeiro pelo Mediterrâneo há de ser (ser) uma experiência muito interessante.":
    "El ejemplo del libro es la primera intervención: Um cruzeiro pelo Mediterrâneo há de ser (ser) uma experiência muito interessante.",
  "Escreve só a forma nova do verbo. O exemplo do livro é: Eles serão contatados ainda hoje. → Eles hão de ser contatados ainda hoje.":
    "Escribe solo la forma nueva del verbo. El ejemplo del libro es: Eles serão contatados ainda hoje. → Eles hão de ser contatados ainda hoje.",

  // Títulos de secções de teoria
  "Relativos invariáveis": "Relativos invariables",
  "Relativos variáveis": "Relativos variables",
  "Gerúndio simples": "Gerundio simple",
  "Usamos o gerúndio para:": "Usamos el gerundio para:",
  "Realização gradual — ir + gerúndio": "Realización gradual — ir + gerundio",
  "desde — o começo de um período de tempo": "desde — el comienzo de un período de tiempo",
  "há — o período de tempo": "há — el período de tiempo",
  Compare: "Compara",
  "há — um momento no passado": "há — un momento en el pasado",
  "Verbo haver — forma impessoal": "Verbo haver — forma impersonal",
  "O verbo haver pode ser equivalente a:": "El verbo haver puede equivaler a:",
  "haver de + infinitivo — forte intenção ou convicção sobre o futuro":
    "haver de + infinitivo — fuerte intención o convicción sobre el futuro",
  "saber · conhecer": "saber · conhecer",
  "ter de / que · precisar de": "ter de / que · precisar de",

  // Etiquetas dos exemplos
  "possibilidade / oportunidade": "posibilidad / oportunidad",
  "proibição (negativa)": "prohibición (negativa)",
  "pedir / dar autorização": "pedir / dar permiso",
  "capacidade física / mental": "capacidad física / mental",
  "ter conhecimentos para": "tener conocimientos para",
  "já ter visto / já ter ido": "haber visto ya / haber ido ya",
  probabilidade: "probabilidad",
  "obrigação moral (o que está certo)": "obligación moral (lo que está bien)",
  "forte necessidade": "fuerte necesidad",
  obrigação: "obligación",
  necessidade: "necesidad",
  "substituir uma oração coordenada": "sustituir una oración coordinada",
  "exprimir uma circunstância de tempo": "expresar una circunstancia de tiempo",
  "indicar o modo": "indicar el modo",
  ter: "ter",
  "dar / ser transmitido": "dar / ser transmitido",
  estar: "estar",
  existir: "existir",
  "acontecer / passar-se": "acontecer / passar-se",
};

function interpolar(texto, params) {
  if (!params) return texto;
  return Object.entries(params).reduce(
    (acc, [chave, valor]) => acc.split(`{${chave}}`).join(valor),
    texto,
  );
}

export function criarTradutores(idioma) {
  const t = (chave, params) => interpolar(UI[idioma]?.[chave] ?? UI.pt[chave] ?? chave, params);
  const tc = (texto) => (idioma === "es" && texto ? CONTEUDO_ES[texto] || texto : texto);
  return { t, tc };
}

const I18nContext = createContext(null);
export const I18nProvider = I18nContext.Provider;

export function useI18n() {
  return useContext(I18nContext) || { idioma: "pt", ...criarTradutores("pt") };
}
