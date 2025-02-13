import type { Config } from "tailwindcss";

import preset from "./src/tailwind-preset";

export default {
    presets: [preset],
    content: ["./src/**/*"],
} satisfies Config;
