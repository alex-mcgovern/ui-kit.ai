import { buildViteConfig } from '@ui-kit.ai/vite'
import path from 'node:path'

import packageJson from './package.json' with { type: 'json' }

export default buildViteConfig(
    packageJson.name,
    path.resolve(import.meta.dirname, 'tsconfig.build.json'),
    [path.resolve(import.meta.dirname, 'src/index.ts')],
    packageJson
)
