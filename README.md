# latexgo-skill

Render LaTeX formulas to SVG using MathJax. Works as a Claude Code skill or standalone CLI.

## Usage

### As a Claude Code skill

```bash
cp -r latexgo-skill ~/.claude/skills/latexgo
cd ~/.claude/skills/latexgo && npm install
```

Then in Claude Code: `/latexgo x=\frac{-b\pm\sqrt{b^2-4ac}}{2a}`

### As a CLI tool

```bash
npm install
node render.mjs "E=mc^2" formula.svg
```

## Requirements

- Node.js 22+
- MathJax 4 (installed via `npm install`)
