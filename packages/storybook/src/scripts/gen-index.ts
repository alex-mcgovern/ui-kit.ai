import fs from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const rootDir = path.resolve(__dirname, '..')
const storiesDir = path.join(rootDir, 'stories')
const indexPath = path.join(rootDir, 'index.ts')

/**
 * Convert kebab-case to PascalCase
 * e.g. "checkbox-group.stories" -> "CheckboxGroup"
 */
function kebabToPascalCase(str: string): string {
    // Remove .stories suffix and split by hyphen
    const words = str.replace('.stories', '').split('-')
    // Convert each word to capitalize first letter
    return words.map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join('')
}

async function main() {
    try {
        // Get all story files
        const files = await fs.readdir(storiesDir)
        const storyFiles = files.filter((file) => file.endsWith('.stories.tsx'))

        // Sort files alphabetically
        storyFiles.sort()

        // Generate export statements
        const exports = storyFiles.map((file) => {
            const baseName = path.basename(file, '.tsx')
            const componentName = kebabToPascalCase(baseName)
            return `export * as ${componentName} from './stories/${baseName}'`
        })

        // Join exports with newlines
        const content = exports.join('\n')

        // Write to index.ts
        await fs.writeFile(indexPath, content)

        console.info(`✅ Successfully generated ${indexPath}`)
    } catch (error) {
        console.error('❌ Error generating index.ts:', error)
        process.exit(1)
    }
}

main()
