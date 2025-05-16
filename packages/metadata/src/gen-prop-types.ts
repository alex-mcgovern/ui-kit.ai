import * as fs from 'node:fs'
import * as path from 'node:path'
import { withCustomConfig } from 'react-docgen-typescript'

const OUTPUT_PATH = path.resolve(import.meta.dirname, '..', 'dist', 'prop-types.json')

function main() {
    const resolvedPath = path.resolve(`node_modules/@ui-kit.ai/components/dist/index.d.ts`)
    const docs = withCustomConfig(path.resolve('./tsconfig.json'), {
        propFilter: (p) => {
            // eslint-disable-next-line sonarjs/prefer-single-boolean-return
            if (p.name.startsWith('aria')) return false
            return true
        },
        shouldRemoveUndefinedFromOptional: true,
    }).parse(resolvedPath)
    if (!Array.isArray(docs) || docs.length === 0) {
        throw Error(`❌ Unable to parse typedefs for ${resolvedPath}`)
    } else {
        const dir = path.dirname(OUTPUT_PATH)
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true })
            console.info(`✅  Created directory ${dir}`)
        }
        fs.writeFileSync(OUTPUT_PATH, JSON.stringify(docs, null, 2))
        console.info(`✅  Component type data written to ${OUTPUT_PATH}`)
    }
}

main()
