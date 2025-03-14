import type { Config } from "tailwindcss";

import preset from "./src/tailwind-preset";

export default {
    content: ["./src/**/*"],
    presets: [preset],
} satisfies Config;
