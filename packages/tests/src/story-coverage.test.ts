import fs from 'fs'
import path from 'path'
import { describe, expect, it } from 'vitest'

describe('Story coverage', () => {
    const componentsDir = path.resolve(__dirname, '../../components/src/components')
    const storiesDir = path.resolve(__dirname, '../../storybook/src/stories')

    // Get all component files
    const componentFiles = fs
        .readdirSync(componentsDir)
        .filter((file) => file.endsWith('.tsx') && !file.includes('.test.'))

    componentFiles.forEach((componentFile) => {
        if (componentFile === 'options.tsx' || componentFile === 'autocomplete.tsx') return

        const componentName = componentFile.replace('.tsx', '')
        const storyFile = `${componentName}.stories.tsx`
        const storyPath = path.join(storiesDir, storyFile)

        it(`${componentName} component should have a corresponding story file`, () => {
            const storyExists = fs.existsSync(storyPath)
            expect(
                storyExists,
                `Story file not found for ${componentName} component. Expected: ${storyPath}`
            ).toBe(true)
        })
    })
})
