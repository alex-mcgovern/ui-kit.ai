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
    whiteA,
} from "@radix-ui/colors";

import { buildTheme } from "./build-theme";

export const COLOR_BASE = buildTheme({
    alpha: slateA,
    alphaWhite: whiteA,
    isOverlay: false,
    primary: blue,
    secondary: slate,
});

export const COLOR_RESET = buildTheme({
    alpha: slateA,
    alphaWhite: whiteA,
    isOverlay: false,
    primary: blue,
    secondary: slate,
});

export const COLOR_AMBER = buildTheme({
    alpha: amberA,
    alphaWhite: whiteA,

    isOverlay: true,
    primary: amber,
    secondary: amber,
});

export const COLOR_BLUE = buildTheme({
    alpha: blueA,
    alphaWhite: whiteA,

    isOverlay: true,
    primary: blue,
    secondary: blue,
});

export const COLOR_GRAY = buildTheme({
    alpha: slateA,
    alphaWhite: whiteA,

    isOverlay: true,
    primary: slate,
    secondary: slate,
});

export const COLOR_GREEN = buildTheme({
    alpha: greenA,
    alphaWhite: whiteA,

    isOverlay: true,
    primary: green,
    secondary: green,
});

export const COLOR_RED = buildTheme({
    alpha: redA,
    alphaWhite: whiteA,

    isOverlay: true,
    primary: red,
    secondary: red,
});
