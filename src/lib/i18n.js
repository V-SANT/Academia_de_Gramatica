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
    "home.titulo": "Bem-vindo de volta ao teu português",
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
    "home.titulo": "Bienvenido de vuelta a tu portugués",
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
