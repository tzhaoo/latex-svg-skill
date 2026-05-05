---
name: latex-svg
description: Render a LaTeX formula to an SVG file using MathJax
---

## Render LaTeX to SVG

When the user asks to render or export a LaTeX formula, run:

```
node render.mjs "<latex>" [output.svg]
```

- `<latex>` is the LaTeX source (required)
- `[output.svg]` is the output path (defaults to `formula.svg` in CWD)

The render script uses MathJax to produce scalable SVG output. It supports standard LaTeX math mode, including fractions, roots, matrices, Greek letters, and common math symbols.

After rendering, tell the user where the SVG was saved and show a preview if possible.
