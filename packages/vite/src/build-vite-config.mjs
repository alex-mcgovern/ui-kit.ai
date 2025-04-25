import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

/**
 * Build the Vite config.
 *
 * @param   {string}                    name            - The name of the package.
 * @param   {string}                    tsConfigPath    - The tsconfig used when building types.
 * @param   {string[]}                  entrypoints     - The package entrypoint(s)
 * @param   {Record<String, unknown>}   pkg             - The package.json object.
 * @returns {import('vite').UserConfig}                 - The Vite configuration object.
 */
export function buildViteConfig(name, tsConfigPath, entrypoints, pkg) {
    return defineConfig({
        build: {
            emptyOutDir: false,
            lib: {
                cssFileName: 'style',
                entry: entrypoints,
                fileName: (_, n) => `${n}.js`,
                formats: ['es'],
                name: name,
            },
            rollupOptions: {
                external: [...buildExternals(pkg), 'react', 'react-dom', 'react/jsx-runtime'],
                output: {
                    banner: '"use client";',
                    globals: {
                        react: 'React',
                        'react-dom': 'ReactDOM',
                        'react/jsx-runtime': 'react/jsx-runtime',
                    },
                    preserveModules: true,
                },
            },
        },
        define: {
            'import.meta.vitest': 'undefined',
        },
        plugins: [
            react(),
            dts({
                insertTypesEntry: true,
                rollupTypes: true,
                tsconfigPath: tsConfigPath,
            }),
        ],
    })
}

/**
 * Build externals for the Vite config.
 * @param {Object} packageJson - The package.json object.
 * @param {Object.<string, string>} [packageJson.dependencies] - The dependencies object.
 * @param {Object.<string, string>} [packageJson.peerDependencies] - The peerDependencies object.
 * @returns {RegExp[]} An array of regular expressions for external dependencies.
 */
function buildExternals(packageJson) {
    const externals = []

    if ('dependencies' in packageJson && packageJson.dependencies != null) {
        for (const key of Object.keys(packageJson.dependencies)) {
            externals.push(new RegExp(`^${key}`))
        }
    }

    if ('peerDependencies' in packageJson && packageJson.peerDependencies != null) {
        for (const key of Object.keys(packageJson.peerDependencies)) {
            externals.push(new RegExp(`^${key}`))
        }
    }

    if ('devDependencies' in packageJson && packageJson.devDependencies != null) {
        for (const key of Object.keys(packageJson.devDependencies)) {
            externals.push(new RegExp(`^${key}`))
        }
    }

    return externals
}
