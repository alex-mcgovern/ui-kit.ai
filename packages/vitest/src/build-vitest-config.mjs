import react from '@vitejs/plugin-react'
import path from 'node:path'
import { defineConfig } from 'vitest/config'

export function buildVitestConfig() {
  return defineConfig({
    plugins: [react()],
    test: {
      environmentMatchGlobs: [
        ['**/*.tsx', 'jsdom'],
        ['**/*.ts', 'node'],
      ],
      globals: true,
      include: ['**/*.test.{js,cjs,mjs,ts,tsx}'],
      includeSource: ['**/*.{js,cjs,mjs,ts,tsx}'],
      setupFiles: [path.resolve(import.meta.dirname, 'setup.ts')],
    },
  })
}
