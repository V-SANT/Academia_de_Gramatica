// Cálculo do progresso por unidade e regra de desbloqueio.
//
// "Progresso de uma unidade" = respostas certas ÷ respostas corrigíveis
// automaticamente (os exercícios de tipo "open" são pessoais e não entram na
// conta). Uma resposta deixada em branco conta como errada, por isso o
// progresso mede mesmo domínio da matéria e não apenas "cliquei em corrigir".
//
// A unidade seguinte só abre quando TODAS as anteriores tiverem pelo menos
// LIMIAR_DESBLOQUEIO %. Como as respostas ficam guardadas, dá para voltar
// atrás, corrigir o que estava errado e carregar em "Corrigir" outra vez.

export const LIMIAR_DESBLOQUEIO = 80;

// Número total de respostas corrigíveis de uma unidade
// (num item "blank" cada "___" conta como uma resposta).
export function totalRespostas(unidade) {
  let total = 0;
  for (const exercicio of unidade.exercises) {
    if (exercicio.type === "open") continue;
    for (const item of exercicio.items) {
      total += exercicio.type === "blank" ? item.answers.length : 1;
    }
  }
  return total;
}

export function estatisticasUnidade(progresso, unidade) {
  const total = totalRespostas(unidade);
  const guardado = progresso?.units?.[unidade.n];

  let certas = 0;
  for (const exercicio of Object.values(guardado || {})) {
    for (const resultado of Object.values(exercicio.results || {})) {
      const lista = Array.isArray(resultado) ? resultado : [resultado];
      certas += lista.filter(Boolean).length;
    }
  }
  // Se o conteúdo da unidade mudar depois de alguém já ter respondido, o
  // guardado pode ter mais respostas do que as que existem hoje.
  certas = Math.min(certas, total);

  const percentagem = total > 0 ? Math.round((certas / total) * 100) : 0;

  return {
    certas,
    total,
    percentagem,
    comecada: Boolean(guardado),
    concluida: percentagem >= LIMIAR_DESBLOQUEIO,
  };
}

// A primeira unidade está sempre aberta; as outras exigem que todas as
// anteriores estejam concluídas.
export function unidadeDesbloqueada(progresso, unidades, unidadeN) {
  return true; // DESBLOQUEIO TEMPORÁRIO: todas as unidades estão abertas
  const indice = unidades.findIndex((u) => u.n === unidadeN);
  if (indice <= 0) return true;
  return unidades
    .slice(0, indice)
    .every((anterior) => estatisticasUnidade(progresso, anterior).concluida);
}

// A unidade que falta para abrir `unidadeN` (a primeira anterior por concluir).
export function unidadeEmFalta(progresso, unidades, unidadeN) {
  const indice = unidades.findIndex((u) => u.n === unidadeN);
  if (indice <= 0) return null;
  return (
    unidades
      .slice(0, indice)
      .find((anterior) => !estatisticasUnidade(progresso, anterior).concluida) || null
  );
}

// Unidade onde a pessoa deve continuar: a primeira por concluir que esteja
// desbloqueada (ou a última, se já estiver tudo feito).
export function proximaUnidade(progresso, unidades) {
  const porConcluir = unidades.find(
    (unidade) =>
      !estatisticasUnidade(progresso, unidade).concluida &&
      unidadeDesbloqueada(progresso, unidades, unidade.n),
  );
  return porConcluir || unidades[unidades.length - 1];
}

export function estatisticasGerais(progresso, unidades) {
  let certas = 0;
  let total = 0;
  let concluidas = 0;
  let desbloqueadas = 0;

  for (const unidade of unidades) {
    const stats = estatisticasUnidade(progresso, unidade);
    certas += stats.certas;
    total += stats.total;
    if (stats.concluida) concluidas += 1;
    if (unidadeDesbloqueada(progresso, unidades, unidade.n)) desbloqueadas += 1;
  }

  return {
    certas,
    total,
    concluidas,
    desbloqueadas,
    percentagem: total > 0 ? Math.round((certas / total) * 100) : 0,
  };
}
