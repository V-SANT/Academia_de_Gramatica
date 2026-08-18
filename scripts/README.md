# Ferramentas de transcrição

Pipeline para passar as unidades da cartilha "Gramática Ativa 1" (Lidel) para
`src/data/unidades/`. Corre tudo a partir da raiz do projecto.

## 1. Preparar as fontes

```bash
pip install pypdfium2 python-docx
python scripts/preparar-fontes.py "$HOME/Downloads" fontes
```

Os PDF do livro são digitalizações em JBIG2 sem camada de texto — `pypdf` e
`pdfplumber` não extraem nada e `pdftotext` também não. O PDFium decodifica-as,
por isso cada página vai para PNG e lê-se como imagem.

Fica com `fontes/paginas/pdf001.png` … `pdf108.png` e `fontes/chave.txt`.
A pasta `fontes/` está no `.gitignore`.

## 2. Encontrar as páginas de uma unidade

A página **N** do livro é o ficheiro `pdf{N-1}.png`. Para a unidade **U**:

| | página do livro | ficheiro |
|---|---|---|
| teoria | `2U + 4` | `pdf{2U+3}.png` |
| exercícios | `2U + 5` | `pdf{2U+4}.png` |

Unidade 16 → `pdf035.png` (teoria) e `pdf036.png` (exercícios).

## 3. Ver as respostas de uma unidade

```bash
python scripts/ver-chave.py fontes/chave.txt 16 17 18
```

Na chave, o item 1 costuma ser o exemplo já resolvido no enunciado e por isso
não aparece; saltos na numeração são outros exemplos, não lacunas.

## 4. Adaptar ao português do Brasil

```bash
python scripts/adaptar-br.py
```

Aplica `adaptacao-br.json` a `src/data/unidades/*.js`. O que se adapta e o que
fica está explicado na cabeça de `src/data/units.js`.

Não corre sobre `src/lib/i18n.js`: lá as traduções espanholas usam "correcta",
que em espanhol está certo, e um substituir cego estragava-as. Essas chaves
mudam-se à mão.

## 5. Verificar

```bash
node scripts/verificar-chave.mjs fontes/chave.txt
node scripts/verificar-traducoes.mjs
npm run lint && npm run build
```

- **verificar-chave** compara item a item contra a chave do livro, tolerando
  acentos, maiúsculas, alternativas com `/` e partes opcionais entre
  parênteses. Aplica `adaptacao-br.json` à chave europeia antes de comparar,
  para continuar a ser um cotejo real. Tem de dar **0 divergências**.
- **verificar-traducoes** mostra chaves órfãs em `CONTEUDO_ES` (texto que
  mudou e deixou a tradução pendurada) e textos sem tradução. As órfãs têm de
  ser **0**; sem tradução só devem ficar listas de formas verbais e de
  pronomes, que se leem em português de propósito.
