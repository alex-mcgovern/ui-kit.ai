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

const PRIMARY = blue;
const PRIMARY_A = blueA;
const SECONDARY = slate;
const SECONDARY_A = slateA;
const SEMANTIC_DESTRUCTIVE = red;
const SEMANTIC_DESTRUCTIVE_A = redA;
const SEMANTIC_POSITIVE = green;
const SEMANTIC_POSITIVE_A = greenA;
const SEMANTIC_WARN = amber;
const SEMANTIC_WARN_A = amberA;

export const COLOR_BASE = buildTheme({
    alpha: SECONDARY_A,
    isOverlay: false,
    primary: PRIMARY,
    secondary: SECONDARY,
});

export const COLOR_RESET = buildTheme({
    alpha: SECONDARY_A,
    isOverlay: false,
    primary: PRIMARY,
    secondary: SECONDARY,
});

export const COLOR_AMBER = buildTheme({
    alpha: SEMANTIC_WARN_A,
    isOverlay: true,
    primary: SEMANTIC_WARN,
    secondary: SEMANTIC_WARN,
});

export const COLOR_BLUE = buildTheme({
    alpha: PRIMARY_A,
    isOverlay: true,
    primary: PRIMARY,
    secondary: PRIMARY,
});

export const COLOR_GRAY = buildTheme({
    alpha: SECONDARY_A,
    isOverlay: true,
    primary: SECONDARY,
    secondary: SECONDARY,
});

export const COLOR_GREEN = buildTheme({
    alpha: SEMANTIC_POSITIVE_A,
    isOverlay: true,
    primary: SEMANTIC_POSITIVE,
    secondary: SEMANTIC_POSITIVE,
});

export const COLOR_RED = buildTheme({
    alpha: SEMANTIC_DESTRUCTIVE_A,
    isOverlay: true,
    primary: SEMANTIC_DESTRUCTIVE,
    secondary: SEMANTIC_DESTRUCTIVE,
});
