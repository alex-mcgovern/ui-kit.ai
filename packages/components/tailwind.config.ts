import type { Config } from "tailwindcss";

import { tailwindPreset } from "./src/tailwind-preset";

export default {
    content: ["./src/**/*"],
    presets: [tailwindPreset],
} satisfies Config;
