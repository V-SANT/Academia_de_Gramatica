// Preferência de tema: "light" | "dark" | "system".
// É uma preferência do dispositivo, não do perfil, por isso fica numa única
// chave partilhada por todos os utilizadores deste navegador (ao contrário do
// progresso, que é guardado por perfil em storage.js).
// NOTA: a chave também está no script inline do index.html, que aplica o tema
// antes do primeiro paint — se mudares o nome, muda nos dois sítios.

const THEME_KEY = "ga_theme";
const THEMES = ["light", "dark", "system"];

const darkQuery = () => window.matchMedia("(prefers-color-scheme: dark)");

export function getTheme() {
  const stored = localStorage.getItem(THEME_KEY);
  return THEMES.includes(stored) ? stored : "system";
}

// "system" resolve-se com a preferência do sistema operativo.
export function resolveTheme(theme) {
  return theme === "system" ? (darkQuery().matches ? "dark" : "light") : theme;
}

// Liga/desliga a classe .dark no <html> — é dela que depende a variante `dark:`.
export function applyTheme(theme) {
  document.documentElement.classList.toggle("dark", resolveTheme(theme) === "dark");
}

export function setTheme(theme) {
  localStorage.setItem(THEME_KEY, theme);
  applyTheme(theme);
}

// Ouve as mudanças de tema do sistema operativo (só interessa quando a
// preferência é "system"). Devolve a função para cancelar a subscrição.
export function watchSystemTheme(onChange) {
  const mq = darkQuery();
  mq.addEventListener("change", onChange);
  return () => mq.removeEventListener("change", onChange);
}
