import fs from 'node:fs/promises'
import path from 'node:path'
import MathJax from 'mathjax'

export const description = 'Render a LaTeX formula to SVG'

export async function render(latex, outputPath) {
  if (!MathJax.startup?.adaptor) {
    await MathJax.init({
      loader: { load: ['input/tex', 'output/svg'] },
      svg: { fontCache: 'none' },
    })
  }

  const node = await MathJax.tex2svgPromise(latex, {
    display: true,
    em: 16,
    ex: 8,
  })

  const raw = MathJax.startup.adaptor.serializeXML(node)
  const svgMatch = raw.match(/<svg[\s\S]*<\/svg>/)
  if (!svgMatch) throw new Error('MathJax produced no SVG element')
  const svg = svgMatch[0]
    .replace(/currentColor/g, '#1d1d1f')
    .replace(/\sdata-mml-node="[^"]*"/g, '')
    .replace(/\sdata-latex="[^"]*"/g, '')

  if (outputPath) {
    await fs.writeFile(outputPath, `${svg}\n`, 'utf8')
    return outputPath
  }

  return svg
}

async function main() {
  const args = process.argv.slice(2)
  const latex = args[0]
  const outputPath = args[1] || path.join(process.cwd(), 'formula.svg')

  if (!latex) {
    console.error('Usage: node render.mjs "<latex>" [output.svg]')
    process.exit(1)
  }

  try {
    const result = await render(latex, outputPath)
    console.log(result)
  } catch (error) {
    console.error('Render failed:', error.message)
    process.exit(1)
  }
}

await main()
