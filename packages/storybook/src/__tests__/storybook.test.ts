import fs from 'fs'
import path from 'path'
import { expect, test } from 'vitest'

const storiesDir = path.join(__dirname, '..')

test('all Storybook stories export a named export with name `Primary`', async () => {
  const files = fs.readdirSync(storiesDir)

  const storyFiles = files.filter((file) => file.endsWith('stories.tsx'))

  for (const file of storyFiles) {
    const filePath = path.join(storiesDir, file)
    const module = await import(filePath)

    expect(
      module,
      `expected ${file} to have named export \`Primary\``
    ).toHaveProperty('Primary')
  }
})

test('all exports in story files begin with a capital letter', async () => {
  const files = fs.readdirSync(storiesDir)
  const storyFiles = files.filter((file) => file.endsWith('stories.tsx'))

  for (const file of storyFiles) {
    const filePath = path.join(storiesDir, file)
    const module = await import(filePath)

    Object.keys(module)
      .filter((key) => key !== 'default')
      .forEach((exportName) => {
        expect(
          exportName[0],
          `Export "${exportName}" in ${file} should start with capital letter`
        ).toMatch(/[A-Z]/)
      })
  }
})
