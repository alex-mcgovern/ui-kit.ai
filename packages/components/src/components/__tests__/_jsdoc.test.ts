import fs from 'fs'
import path from 'path'
import { describe, expect, test } from 'vitest'

const componentsDir = path.join(__dirname, '..')

const files = fs.readdirSync(componentsDir)
const componentFiles = files.filter(
  (file) =>
    file.endsWith('.tsx') &&
    !file.endsWith('.stories.tsx') &&
    !file.endsWith('.test.tsx')
)

describe.skip('JSDoc comments for named exports', async () => {
  for (const file of componentFiles) {
    const filePath = path.join(componentsDir, file)
    const fileContent = fs.readFileSync(filePath, 'utf8')
    const module = await import(filePath)

    Object.keys(module)
      .filter((key) => key !== 'default')
      .forEach((exportName) => {
        test(`Export "${exportName}" in ${file} should have a JSDoc comment`, () => {
          const jsDocRegex = new RegExp(
            `\\/\\*\\*[\\s\\S]*?\\*\\/[\\s]*export[^]*?${exportName}`
          )
          expect(
            jsDocRegex.test(fileContent),
            `Export "${exportName}" in ${file} should have a JSDoc comment`
          ).toBe(true)
        })
      })
  }
})
