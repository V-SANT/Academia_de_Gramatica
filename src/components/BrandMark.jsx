// Marca da app: losango amarelo sobre verde com o círculo azul da bandeira.
export default function BrandMark({ className = "w-9 h-9" }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <rect width="64" height="64" rx="14" fill="#009C3B" />
      <path d="M32 12 56 32 32 52 8 32Z" fill="#FFDF00" />
      <circle cx="32" cy="32" r="11" fill="#002776" />
      <path d="M22 29.5c6.6-3 13.4-3 20 0" stroke="#fff" strokeWidth="2.6" fill="none" strokeLinecap="round" />
    </svg>
  );
}
