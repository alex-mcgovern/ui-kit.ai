import fs from 'fs'
import path from 'path'
import { describe, expect, test } from 'vitest'

const componentsDir = path.join(__dirname, '..')

const files = fs.readdirSync(componentsDir)
const componentFiles = files.filter(
    (file) => file.endsWith('.tsx') && !file.endsWith('.stories.tsx') && !file.endsWith('.test.tsx')
)

describe('Named exports should have displayName', async () => {
    for (const file of componentFiles) {
        const filePath = path.join(componentsDir, file)
        const module = await import(filePath)

        Object.keys(module)
            .filter((key) => key !== 'default')
            .forEach((exportName) => {
                test(`Export "${exportName}" in ${file} should have a displayName`, () => {
                    const exportValue = module[exportName]
                    expect(
                        exportValue.displayName,
                        `Export "${exportName}" in ${file} should have a displayName`
                    ).toBeDefined()
                })
            })
    }
})
