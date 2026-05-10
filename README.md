# 🎨 latex-svg-skill
Export dedicated LaTeX formulas as SVG for Office,Google Docs or other non-LaTeX applications. No TeX distribution needed. Just `/latex-svg`. Uses MathJax to render formulas and saves the SVG to the current directory.

## 📋 Prerequisites

- [Claude Code](https://claude.com/product/claude-code)
- [Node.js](https://nodejs.org/en/download) 22+

## 📦 Install

**macOS / Linux**

```bash
git clone https://github.com/Oneptica/latex-svg-skill.git ~/.claude/skills/latex-svg
cd ~/.claude/skills/latex-svg && npm install
```

**Windows**

```pwsh
git clone https://github.com/Oneptica/latex-svg-skill.git $env:USERPROFILE\.claude\skills\latex-svg
cd $env:USERPROFILE\.claude\skills\latex-svg; npm install
```

Restart Claude Code, then:

```
/latex-svg render the 2D discrete Fourier transform
```
You should see an SVG file in the current directory.
<p align="center"><img src="https://raw.githubusercontent.com/Oneptica/latex-svg-skill/main/example.svg" width="400" alt="2D DFT example" /></p>
