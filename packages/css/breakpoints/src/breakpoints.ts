import { Breakpoint } from "@boondoggle.design/css-types";

const BREAKPOINTS: Record<Breakpoint, number> = {
    [Breakpoint.LG]: 1024,
    [Breakpoint.MD]: 768,
    [Breakpoint.SM]: 576,
};

type BreakpointBetween =
    `only screen and (min-width: ${number}px) and (max-width: ${number}px)`;
type BreakpointAbove = `only screen and (min-width: ${number}px)`;
type BreakpointBelow = `only screen and (max-width: ${number}px)`;

const greaterThan = (breakpoint: Breakpoint): BreakpointAbove => {
    return `only screen and (min-width: ${BREAKPOINTS[breakpoint]}px)`;
};

const lessThan = (breakpoint: Breakpoint): BreakpointBelow => {
    return `only screen and (max-width: ${BREAKPOINTS[breakpoint] - 1}px)`;
};

const between = (start: Breakpoint, end: Breakpoint): BreakpointBetween => {
    if (BREAKPOINTS[start] > BREAKPOINTS[end]) {
        throw new Error("Start breakpoint must be less than end breakpoint");
    }
    return `only screen and (min-width: ${
        BREAKPOINTS[start]
    }px) and (max-width: ${BREAKPOINTS[end] - 1}px)`;
};

export const breakpoints = {
    between,
    greaterThan,
    lessThan,
};
