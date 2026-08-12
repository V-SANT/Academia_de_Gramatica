// Indicadores de progresso (0–100) partilhados pelas várias páginas.
// O preenchimento vai de amarelo a verde: amarelo enquanto falta, verde quando
// a unidade chega ao limiar de desbloqueio.

import { LIMIAR_DESBLOQUEIO } from "../lib/progress";

export function BarraProgresso({ valor, className = "", altura = "h-2" }) {
  const pct = Math.max(0, Math.min(100, valor || 0));
  const concluido = pct >= LIMIAR_DESBLOQUEIO;

  return (
    <div
      className={`w-full ${altura} rounded-full bg-noite-200 dark:bg-noite-800 overflow-hidden ${className}`}
      role="progressbar"
      aria-valuenow={pct}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div
        className={
          "h-full rounded-full transition-[width] duration-500 " +
          (concluido
            ? "bg-gradient-to-r from-verde-400 to-verde-600"
            : "bg-gradient-to-r from-amarelo-300 to-amarelo-500")
        }
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}

// Marca do limiar dos 80% desenhada por cima da barra, para se perceber à vista
// quanto falta para abrir a unidade seguinte.
export function BarraComLimiar({ valor, className = "" }) {
  return (
    <div className={`relative ${className}`}>
      <BarraProgresso valor={valor} altura="h-2.5" />
      <div
        className="absolute top-0 h-2.5 w-0.5 bg-azul-900/40 dark:bg-white/40"
        style={{ left: `${LIMIAR_DESBLOQUEIO}%` }}
        aria-hidden="true"
      />
    </div>
  );
}

export function AnelProgresso({ valor, tamanho = 48, espessura = 4, children }) {
  const pct = Math.max(0, Math.min(100, valor || 0));
  const raio = (tamanho - espessura) / 2;
  const perimetro = 2 * Math.PI * raio;
  const concluido = pct >= LIMIAR_DESBLOQUEIO;

  return (
    <div className="relative shrink-0" style={{ width: tamanho, height: tamanho }}>
      <svg width={tamanho} height={tamanho} className="-rotate-90">
        <circle
          cx={tamanho / 2}
          cy={tamanho / 2}
          r={raio}
          fill="none"
          strokeWidth={espessura}
          className="stroke-noite-200 dark:stroke-noite-800"
        />
        <circle
          cx={tamanho / 2}
          cy={tamanho / 2}
          r={raio}
          fill="none"
          strokeWidth={espessura}
          strokeLinecap="round"
          strokeDasharray={perimetro}
          strokeDashoffset={perimetro * (1 - pct / 100)}
          className={
            "transition-[stroke-dashoffset] duration-500 " +
            (concluido ? "stroke-verde-500" : "stroke-amarelo-400")
          }
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">{children}</div>
    </div>
  );
}
