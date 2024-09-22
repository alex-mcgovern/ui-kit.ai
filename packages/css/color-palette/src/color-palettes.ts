import {
    amber,
    amberA,
    blue,
    blueA,
    green,
    greenA,
    red,
    redA,
    slate,
    slateA,
} from "@radix-ui/colors";

import { buildTheme } from "./build-theme";

export const COLOR_BASE = buildTheme({
    alpha: slateA,
    isOverlay: false,
    primary: blue,
    secondary: slate,
});

export const COLOR_RESET = buildTheme({
    alpha: slateA,
    isOverlay: false,
    primary: blue,
    secondary: slate,
});

export const COLOR_AMBER = buildTheme({
    alpha: amberA,
    isOverlay: true,
    primary: amber,
    secondary: amber,
});

export const COLOR_BLUE = buildTheme({
    alpha: blueA,
    isOverlay: true,
    primary: blue,
    secondary: blue,
});

export const COLOR_GRAY = buildTheme({
    alpha: slateA,
    isOverlay: true,
    primary: slate,
    secondary: slate,
});

export const COLOR_GREEN = buildTheme({
    alpha: greenA,
    isOverlay: true,
    primary: green,
    secondary: green,
});

export const COLOR_RED = buildTheme({
    alpha: redA,
    isOverlay: true,
    primary: red,
    secondary: red,
});
