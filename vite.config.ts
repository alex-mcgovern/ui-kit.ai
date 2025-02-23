import path from "node:path";

import react from "@vitejs/plugin-react";
import Macros from "unplugin-macros/vite";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

import pkg from "./package.json";

const __dirname = path.resolve();

export default defineConfig({
    plugins: [
        react({
            babel: {
                plugins: [
                    "@babel/plugin-syntax-import-attributes",
                ],
            },
        }),
        dts({
            rollupTypes: true,
            insertTypesEntry: true,
        }),
        Macros(),
    ],
    define: {
        "import.meta.vitest": "undefined",
    },
    build: {
        lib: {
            entry: [
                path.resolve(__dirname, "src/index.ts"),
            ],
            name: "UIKIT",
            formats: ["es"],
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            fileName: (_, n) => `${n}.js`,
        },
        rollupOptions: {
            external: [
                ...Object.keys(pkg.dependencies).map(
                    (key) => new RegExp(`^${key}`),
                ),
                // ...Object.keys(pkg.peerDependencies).map(
                //     (key) => new RegExp(`^${key}`),
                // ),
                "react/jsx-runtime",
            ],
            output: {
                banner: '"use client";',
                preserveModules: true,
                globals: {
                    react: "React",
                    "react-dom": "ReactDOM",
                    "react/jsx-runtime":
                        "react/jsx-runtime",
                },
            },
        },
    },
    test: {
        environmentMatchGlobs: [
            ["**/*.tsx", "jsdom"],
            ["**/*.ts", "node"],
        ],
        globals: true,
        include: ["**/*test.ts?(x)"],
        includeSource: ["**/*.ts?(x)"],
        // setupFiles: ["./test/setup.ts"],
        coverage: {
            include: ["src/**/*"],
            reporter: [
                "text",
                "json",
                "html",
                "json-summary",
            ],
        },
    },
});
