import type { Config } from "tailwindcss";

import preset from "@ui-kit.ai/components";

export default {
    content: ["./src/**/*", "./.storybook/**/*"],
    presets: [preset],
} satisfies Config;
