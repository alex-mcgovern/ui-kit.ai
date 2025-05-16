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

        // Start building the index file content
        let content = `/**
 * We expose all stories wrapped in \`composeStories\` which allows them to be consumed 
 * as "portable" stories that can be used for testing and documentation purposes.
 */

import { composeStories as storybookComposeStories } from '@storybook/react'
\n`

        // Generate import statements for the stories
        const imports = storyFiles.map((file) => {
            const baseName = path.basename(file, '.tsx')
            const componentName = kebabToPascalCase(baseName)
            return `import * as ${componentName}Stories from './stories/${baseName}'`
        })

        content += imports.join('\n') + '\n\n'

        // Add compose function
        content += `const compose = (
    module: Parameters<typeof storybookComposeStories>[0]
): ReturnType<typeof storybookComposeStories> => {
    return storybookComposeStories(module, {
        applyDecorators: (storyFn) => storyFn, // We don't want to apply any decorators
    })
}

type Composed = ReturnType<typeof compose>\n\n`

        // Generate the composed exports
        const componentExports = storyFiles.map((file) => {
            const baseName = path.basename(file, '.tsx')
            const componentName = kebabToPascalCase(baseName)
            return `export const ${componentName}: Composed = compose(${componentName}Stories)`
        })

        content += componentExports.join('\n')

        // Write to index.ts
        await fs.writeFile(indexPath, content)

        console.info(`✅ Successfully generated ${indexPath} with ${storyFiles.length} components`)
    } catch (error) {
        console.error('❌ Error generating index.ts:', error)
        process.exit(1)
    }
}

main()
