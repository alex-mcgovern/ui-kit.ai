import react from "@vitejs/plugin-react";
import path from "node:path";
import Macros from "unplugin-macros/vite";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

import pkg from "./package.json";

const __dirname = path.resolve();

export default defineConfig({
    build: {
        lib: {
            entry: [path.resolve(__dirname, "src/index.ts")],
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            fileName: (_, n) => `${n}.js`,
            formats: ["es"],
            name: "ui-kit.ai/components",
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
                globals: {
                    react: "React",
                    "react-dom": "ReactDOM",
                    "react/jsx-runtime": "react/jsx-runtime",
                },
                preserveModules: true,
            },
        },
    },
    define: {
        "import.meta.vitest": "undefined",
    },
    plugins: [
        react({
            babel: {
                plugins: ["@babel/plugin-syntax-import-attributes"],
            },
        }),
        dts({
            insertTypesEntry: true,
            rollupTypes: true,
            tsconfigPath: path.resolve(__dirname, "tsconfig.json"),
        }),
        Macros(),
    ],
    test: {
        // setupFiles: ["./test/setup.ts"],
        coverage: {
            include: ["src/**/*"],
            reporter: ["text", "json", "html", "json-summary"],
        },
        environmentMatchGlobs: [
            ["**/*.tsx", "jsdom"],
            ["**/*.ts", "node"],
        ],
        globals: true,
        include: ["**/*test.ts?(x)"],
        includeSource: ["**/*.ts?(x)"],
    },
});
