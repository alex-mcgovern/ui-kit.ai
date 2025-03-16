import type { KnipConfig } from "knip";

const config: KnipConfig = {
    ignore: [".prettierrc.mjs"],
    workspaces: {
        "packages/components": {
            entry: ["src/index.ts"],
            includeEntryExports: true,
            project: ["**/*"],
        },
        "packages/eslint": {
            entry: ["src/index.ts"],
            includeEntryExports: true,
            project: ["**/*"],
        },
        "packages/mocks": {
            entry: ["src/index.ts"],
            includeEntryExports: true,
            project: ["**/*"],
        },
        "packages/prettier": {
            entry: ["src/index.ts"],
            includeEntryExports: true,
            project: ["**/*"],
        },
        "packages/storybook": {
            entry: ["src/index.ts"],
            includeEntryExports: true,
            project: ["**/*"],
        },
        "packages/utils": {
            entry: ["src/index.ts"],
            includeEntryExports: true,
            project: ["**/*"],
        },
        "packages/vite": {
            entry: ["src/index.ts"],
            includeEntryExports: true,
            project: ["**/*"],
        },
    },
};

export default config;
