import type { KnipConfig } from "knip";

const config: KnipConfig = {
    ignore: [".prettierrc.mjs"],
    workspaces: {
        ".": {
            entry: "scripts/*.{js,cjs,mjs,jsx,ts,cts,mts,tsx}",
            project: "scripts/**/*.{js,cjs,mjs,jsx,ts,cts,mts,tsx}",
        },
        "packages/*": {
            entry: [
                ".prettierrc.{js,cjs,mjs,ts}",
                "eslint.config.{js,cjs,mjs,ts}",
                "src/index.{js,cjs,mjs,jsx,ts,cts,mts,tsx}",
                "vite.config.{js,cjs,mjs,ts}",
                "vitest.config.{js,cjs,mjs,ts}",
            ],
            project: "**/*.{js,cjs,mjs,jsx,ts,cts,mts,tsx}",
        },
    },
};

export default config;
