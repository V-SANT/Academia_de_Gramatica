// Tudo fica no localStorage do navegador — não há backend nem base de dados.
// Cada perfil (nome de utilizador) tem o seu próprio progresso, guardado sob uma
// chave separada, para que várias pessoas possam usar o mesmo link sem misturar dados
// (desde que cada uma use o seu próprio navegador/dispositivo).

const PROFILES_KEY = "ga_profiles";
const CURRENT_USER_KEY = "ga_current_user";
const progressKey = (username) => `ga_progress_${username}`;
const riscadasKey = (username) => `ga_riscadas_${username}`;

function readJSON(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

function writeJSON(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function listProfiles() {
  return readJSON(PROFILES_KEY, []);
}

export function getCurrentUser() {
  return localStorage.getItem(CURRENT_USER_KEY) || null;
}

export function setCurrentUser(username) {
  localStorage.setItem(CURRENT_USER_KEY, username);
}

export function clearCurrentUser() {
  localStorage.removeItem(CURRENT_USER_KEY);
}

// Cria o perfil se não existir e define-o como o utilizador actual.
export function loginAs(username) {
  const name = username.trim();
  if (!name) return;
  const profiles = listProfiles();
  if (!profiles.includes(name)) {
    profiles.push(name);
    writeJSON(PROFILES_KEY, profiles);
    writeJSON(progressKey(name), { createdAt: new Date().toISOString(), units: {} });
  }
  setCurrentUser(name);
}

// Elimina o perfil e tudo o que lhe pertence: tira-o da lista e apaga o
// progresso e as palavras riscadas. Se for o perfil activo, também se limpa o
// utilizador actual (a app volta ao ecrã de entrada).
// Devolve a lista de perfis que sobram.
export function deleteProfile(username) {
  const restantes = listProfiles().filter((p) => p !== username);
  writeJSON(PROFILES_KEY, restantes);
  localStorage.removeItem(progressKey(username));
  localStorage.removeItem(riscadasKey(username));
  if (getCurrentUser() === username) clearCurrentUser();
  return restantes;
}

export function getProgress(username) {
  return readJSON(progressKey(username), { createdAt: null, units: {} });
}

export function saveProgress(username, progress) {
  writeJSON(progressKey(username), progress);
}

// Regista o resultado de um exercício completo (chamado "Corrigir") para uma unidade,
// incluindo o texto que a pessoa escreveu (para poder voltar a mostrá-lo depois,
// ex.: ao importar progresso ou recarregar a página).
// itemResults: { [itemN]: boolean | [boolean] } — itemAnswers: { [itemN]: [string] }
export function recordExerciseResults(username, unitN, exerciseId, itemResults, itemAnswers) {
  const progress = getProgress(username);
  if (!progress.units[unitN]) progress.units[unitN] = {};
  progress.units[unitN][exerciseId] = {
    results: itemResults,
    answers: itemAnswers || {},
    checkedAt: new Date().toISOString(),
  };
  saveProgress(username, progress);
  return progress;
}

// Palavras riscadas nos exercícios com banco de palavras.
// É só um apoio visual ("já usei esta"), não conta para a nota — por isso fica
// numa chave à parte e não se mistura com o progresso corrigido.
// Formato: { [unitN]: { [exerciseId]: [palavras] } }
export function getRiscadas(username) {
  return readJSON(riscadasKey(username), {});
}

export function toggleRiscada(username, unitN, exerciseId, palavra) {
  const todas = getRiscadas(username);
  const daUnidade = { ...(todas[unitN] || {}) };
  const doExercicio = daUnidade[exerciseId] || [];

  daUnidade[exerciseId] = doExercicio.includes(palavra)
    ? doExercicio.filter((p) => p !== palavra)
    : [...doExercicio, palavra];

  const novas = { ...todas, [unitN]: daUnidade };
  writeJSON(riscadasKey(username), novas);
  return novas;
}

export function limparRiscadas(username, unitN) {
  const todas = getRiscadas(username);
  delete todas[unitN];
  writeJSON(riscadasKey(username), todas);
  return todas;
}

// Apaga o progresso do perfil mas mantém-no na lista (volta tudo a zero,
// incluindo o desbloqueio das unidades e as palavras riscadas).
export function resetProgress(username) {
  const progress = getProgress(username);
  saveProgress(username, { createdAt: progress.createdAt, units: {} });
  writeJSON(riscadasKey(username), {});
}

export function exportProgress(username) {
  const data = {
    exportedAt: new Date().toISOString(),
    username,
    profiles: listProfiles(),
    progress: getProgress(username),
  };
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `gramatica-ativa-progresso-${username}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

// Lê um ficheiro exportado anteriormente e restaura o progresso desse perfil
// (cria o perfil se ainda não existir neste navegador).
export function importProgressFromFile(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const data = JSON.parse(reader.result);
        if (!data.username || !data.progress) {
          reject(new Error("O ficheiro não parece ser um export válido desta app."));
          return;
        }
        const profiles = listProfiles();
        if (!profiles.includes(data.username)) {
          profiles.push(data.username);
          writeJSON(PROFILES_KEY, profiles);
        }
        saveProgress(data.username, data.progress);
        resolve(data.username);
      } catch (err) {
        reject(err);
      }
    };
    reader.onerror = () => reject(reader.error);
    reader.readAsText(file);
  });
}
