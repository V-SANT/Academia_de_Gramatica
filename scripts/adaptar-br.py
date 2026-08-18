# -*- coding: utf-8 -*-
"""Aplica a tabela de adaptação PT-PT -> PT-BR aos ficheiros de conteúdo.

    python scripts/adaptar-br.py

Corre a partir da raiz do projecto. Só mexe em src/data/unidades/*.js.
O src/lib/i18n.js trata-se à mão: lá as traduções espanholas usam "correcta",
que em espanhol está certo, e um substituir cego estragava-as.

Depois de correr isto, confere sempre com:
    node scripts/verificar-chave.mjs fontes/chave.txt
    node scripts/verificar-traducoes.mjs
"""
import glob
import io
import json
import os

AQUI = os.path.dirname(os.path.abspath(__file__))
regras = json.load(io.open(os.path.join(AQUI, "adaptacao-br.json"), encoding="utf-8"))["regras"]

total = 0
for caminho in sorted(glob.glob("src/data/unidades/*.js")):
    texto = io.open(caminho, encoding="utf-8").read()
    original = texto
    contagem = {}
    for de, para in regras:
        n = texto.count(de)
        if n:
            texto = texto.replace(de, para)
            contagem[de] = n
    if texto != original:
        io.open(caminho, "w", encoding="utf-8", newline="\n").write(texto)
        somatorio = sum(contagem.values())
        total += somatorio
        print(f"{caminho}: {somatorio} substituições")
        for de, n in sorted(contagem.items(), key=lambda x: -x[1]):
            print(f"    {n:3d}x  {de}")

print(f"\nTotal: {total} substituições")
if total:
    print("Lembra-te de actualizar as chaves de CONTEUDO_ES em src/lib/i18n.js")
    print("que tenham mudado (verificar-traducoes.mjs mostra as órfãs).")
