import usage from '@ui-kit.ai/metadata/usage-examples.json' with { type: 'json' }
import { existsSync, mkdirSync, writeFileSync } from 'fs'
import { dirname, join, resolve } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

const DIST = resolve(__dirname, '../../dist')
const OUT = join(DIST, 'usage')

const template = (content: string) => `\`\`\`tsx\n${content.trim()}\n\`\`\``

if (existsSync(OUT) === false) mkdirSync(OUT, { recursive: true })

// Process each component and its examples
Object.entries(usage).forEach(([component, examples]) => {
    const dir = join(OUT, component)
    if (!existsSync(dir)) mkdirSync(dir, { recursive: true })

    Object.entries(examples as Record<string, string>).forEach(([exampleName, content]) => {
        const outputFilePath = join(dir, `${exampleName}.md`)
        writeFileSync(outputFilePath, template(content), 'utf-8')
    })
})

console.info(`✅ Generated usage example markdown files in ${OUT}`)
