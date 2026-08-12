// Router minimalista baseado no hash do URL (#/...).
// Usa-se hash e não o History API porque a app é publicada como site estático
// (Vercel/Netlify/pasta local): assim cada unidade tem um endereço próprio que
// pode ser partilhado ou recarregado sem precisar de configuração no servidor.
//
//   #/                -> início
//   #/unidades        -> menu com todas as unidades
//   #/unidade/3       -> página da Unidade 3
//   #/definicoes      -> definições

import { useEffect, useState } from "react";

export const rotas = {
  inicio: "#/",
  unidades: "#/unidades",
  unidade: (n) => `#/unidade/${n}`,
  definicoes: "#/definicoes",
};

export function parseRoute(hash) {
  const caminho = (hash || "").replace(/^#\/?/, "");
  const [seccao, param] = caminho.split("/");

  if (seccao === "unidades") return { nome: "unidades" };
  if (seccao === "definicoes") return { nome: "definicoes" };
  if (seccao === "unidade") {
    const n = Number(param);
    // Um número de unidade inválido no URL cai no menu, em vez de rebentar.
    return Number.isInteger(n) && n > 0 ? { nome: "unidade", unidadeN: n } : { nome: "unidades" };
  }
  return { nome: "inicio" };
}

export function useHashRoute() {
  const [hash, setHash] = useState(() => window.location.hash || "#/");

  useEffect(() => {
    const aoMudar = () => setHash(window.location.hash || "#/");
    window.addEventListener("hashchange", aoMudar);
    return () => window.removeEventListener("hashchange", aoMudar);
  }, []);

  return parseRoute(hash);
}

export function navegar(destino) {
  window.location.hash = destino;
}
