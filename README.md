# 🎨 latexgo-skill

Render LaTeX formulas to SVG via Claude Code `/latexgo` — no heavy LaTeX environment needed. Uses MathJax to render formulas and saves the SVG to the current directory.

## 📋 Prerequisites

- [Claude Code](https://claude.com/product/claude-code)
- [Node.js](https://nodejs.org/en/download) 22+

## 📦 Install

**macOS / Linux**

```bash
git clone https://github.com/tzhaoo/latexgo-skill.git ~/.claude/skills/latexgo
cd ~/.claude/skills/latexgo && npm install
```

**Windows**

```pwsh
git clone https://github.com/tzhaoo/latexgo-skill.git $env:USERPROFILE\.claude\skills\latexgo
cd $env:USERPROFILE\.claude\skills\latexgo; npm install
```

Restart Claude Code, then:

```
/latexgo render the 2D discrete Fourier transform
```
You should see an SVG file in the current directory.
<p align="center"><img src="https://raw.githubusercontent.com/tzhaoo/latexgo-skill/main/example.svg" width="400" alt="2D DFT example" /></p>
