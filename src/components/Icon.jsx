// Ícones em SVG inline (traço), para não depender de nenhuma biblioteca externa.
// Uso: <Icon nome="cadeado" className="w-4 h-4" />

const CAMINHOS = {
  inicio: "M3 10.5 12 3l9 7.5M5.5 9.5V20a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V9.5",
  livro: "M4 4.5A1.5 1.5 0 0 1 5.5 3H19v14H5.5A1.5 1.5 0 0 0 4 18.5zM4 18.5A1.5 1.5 0 0 0 5.5 20H19v-3",
  engrenagem:
    "M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6M19.4 15a1.6 1.6 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.6 1.6 0 0 0-1.8-.3 1.6 1.6 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.6 1.6 0 0 0-1-1.5 1.6 1.6 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.6 1.6 0 0 0 .3-1.8 1.6 1.6 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.6 1.6 0 0 0 1.5-1 1.6 1.6 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.6 1.6 0 0 0 1.8.3H9a1.6 1.6 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.6 1.6 0 0 0 1 1.5 1.6 1.6 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.6 1.6 0 0 0-.3 1.8V9a1.6 1.6 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.6 1.6 0 0 0-1.5 1",
  cadeado: "M7 11V8a5 5 0 0 1 10 0v3M5.5 11h13a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-13a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1",
  visto: "m5 13 4.5 4.5L19 7",
  setaDireita: "M5 12h14m0 0-6-6m6 6-6 6",
  setaEsquerda: "M19 12H5m0 0 6-6m-6 6 6 6",
  menu: "M4 7h16M4 12h16M4 17h16",
  fechar: "M6 6l12 12M18 6 6 18",
  sol: "M12 4V2m0 20v-2m8-8h2M2 12h2m13.7-5.7 1.4-1.4M4.9 19.1l1.4-1.4m0-11.4L4.9 4.9m14.2 14.2-1.4-1.4M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0",
  lua: "M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5",
  ecra: "M4 5.5h16a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1M8.5 20.5h7M12 16.5v4",
  descarregar: "M12 3v12m0 0 4-4m-4 4-4-4M4 17v2a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-2",
  carregar: "M12 16V4m0 0 4 4m-4-4-8 4M4 17v2a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-2",
  pessoa: "M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8M4.5 20.5a7.5 7.5 0 0 1 15 0",
  caixote: "M4 7h16M9.5 7V5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v2M6.5 7l.8 12a1 1 0 0 0 1 1h7.4a1 1 0 0 0 1-1l.8-12",
  raio: "M13 3 5 14h6l-1 7 8-11h-6z",
  alvo: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18m0-4.5a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9m0-3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3",
  chama: "M12 3s5 4 5 8a5 5 0 0 1-10 0c0-1.3.6-2.5 1.4-3.5.3 1 .9 1.8 1.6 2.2C10.8 7.7 12 5.4 12 3",
  sair: "M15 4h3a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-3M11 8 7 12l4 4M7 12h10",
};

export default function Icon({ nome, className = "w-5 h-5", ...props }) {
  const d = CAMINHOS[nome];
  if (!d) return null;

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <path d={d} />
    </svg>
  );
}
