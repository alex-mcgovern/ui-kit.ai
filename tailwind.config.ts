import type { Config } from "tailwindcss";

import preset from "./src/tailwind-preset";

export default {
    presets: [preset],
    content: ["./src/**/*", "./.storybook/**/*"],
} satisfies Config;
