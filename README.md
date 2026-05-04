# 🎨 latexgo-skill

Render LaTeX formulas to SVG via Claude Code `/latexgo` — no heavy LaTeX environment needed. Uses MathJax to render formulas and saves the SVG to the current directory.

## 📋 Prerequisites

- [Claude Code](https://claude.ai/code)
- [Node.js](https://nodejs.org/en/download) 22+

## 📦 Install

```
git clone https://github.com/tzhaoo/latexgo-skill.git ~/.claude/skills/latexgo
cd ~/.claude/skills/latexgo && npm install
```

Restart Claude Code, then:

```
/latexgo render the 2D discrete Fourier transform
```

<img src="https://raw.githubusercontent.com/tzhaoo/latexgo-skill/main/example.svg" width="400" alt="2D DFT example" />
