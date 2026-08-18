# -*- coding: utf-8 -*-
"""Mostra a secção da chave dos exercícios das unidades pedidas.

    python scripts/ver-chave.py fontes/chave.txt 16 17 18
"""
import io
import re
import sys

if len(sys.argv) < 3:
    sys.exit("uso: python scripts/ver-chave.py <chave.txt> <n> [n…]")

texto = io.open(sys.argv[1], encoding="utf-8").read()

# A chave vem em blocos "Unidade N"
partes = re.split(r"^Unidade (\d+)$", texto, flags=re.M)
seccoes = {int(partes[i]): partes[i + 1].strip() for i in range(1, len(partes), 2)}

sys.stdout.reconfigure(encoding="utf-8")
for arg in sys.argv[2:]:
    n = int(arg)
    print("=" * 70)
    print("UNIDADE", n)
    print("=" * 70)
    print(seccoes.get(n, "(não encontrada)"))
    print()
