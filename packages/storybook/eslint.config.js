import uiKitEslintConfig from "@ui-kit.ai/eslint";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('eslint').Linter.Config[]} */
const config = [
    ...uiKitEslintConfig(__dirname),
    {
        ignores: ["node_modules", "dist", ".turbo"],
    },
];

export default config;
