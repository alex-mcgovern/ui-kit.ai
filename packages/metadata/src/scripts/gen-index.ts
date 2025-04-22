import * as fs from 'fs'
import * as path from 'path'

async function generateIndexFile() {
    try {
        // Dynamic import to get all the exports from the storybook package
        const storybook = await import('@ui-kit.ai/storybook')

        // Get all named exports (component stories)
        const componentNames = Object.keys(storybook)
            // @ts-expect-error - just a glue script
            .filter((key) => typeof storybook[key] === 'object')
            .sort()

        let indexContent = `import { composeStories as storybookComposeStories } from '@storybook/react'
/**
 * We expose all stories from the \`@ui-kit.ai/storybook\` package wrapped in
 * \`composeStories\` this allows them to be consumed as "portable" stories, which
 * can be used for testing and documentation purposes.
 */\n`

        // Generate imports
        componentNames.forEach((componentName) => {
            indexContent += `import { ${componentName} as ${componentName}Stories } from '@ui-kit.ai/storybook'\n`
        })

        // Add compose function
        indexContent += `\nconst compose = (
    module: Parameters<typeof storybookComposeStories>[0]
): ReturnType<typeof storybookComposeStories> => {
    return storybookComposeStories(module, {
        applyDecorators: (storyFn) => storyFn, // We don't want to apply any decorators
    })
}

type Composed = ReturnType<typeof compose>\n\n`

        // Generate exports
        componentNames.forEach((componentName) => {
            indexContent += `export const ${componentName}: Composed = compose(${componentName}Stories)\n`
        })

        // Write to file
        const indexPath = path.resolve(process.cwd(), 'src/index.ts')
        fs.writeFileSync(indexPath, indexContent, 'utf8')

        console.info(`✅ Successfully generated index.ts with ${componentNames.length} components.`)
    } catch (error) {
        console.error('❌ Failed to generate index.ts:', error)
        process.exit(1)
    }
}

generateIndexFile()
