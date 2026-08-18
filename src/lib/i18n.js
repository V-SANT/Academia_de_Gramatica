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
    "home.rodape":
      "Piloto com as Unidades 1–5 da Gramática Ativa 1 (Lidel). As restantes vão sendo adicionadas.",

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
    "home.rodape":
      "Piloto con las Unidades 1–5 de Gramática Ativa 1 (Lidel). Las demás se irán añadiendo.",

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
