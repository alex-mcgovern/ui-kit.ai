import { vars } from "@boondoggle.design/css-vars";
import { withPrefersMotion } from "@boondoggle.design/utils";
import { keyframes, style } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";

const TRANSLATE_DISTANCE = vars.space.space_1;
const TRANSLATE_DISTANCE_NEGATIVE = calc.multiply(TRANSLATE_DISTANCE, -1);

const DURATION = vars.duration.short;

const EASE = vars.ease.ease_out_circ;

type Direction = "in" | "out";
type PlacementAxis = "bottom" | "left" | "right" | "top";

function getFade(direction: Direction, placement: PlacementAxis) {
    const axis = placement === "top" || placement === "bottom" ? "Y" : "X";
    const distance =
        placement === "top" || placement === "left"
            ? TRANSLATE_DISTANCE
            : TRANSLATE_DISTANCE_NEGATIVE;

    return {
        [direction === "in" ? "0%" : "100%"]: {
            filter: "blur(4px)",
            opacity: 0,
            transform: `translate${axis}(${distance}) scale${axis}(0.95)`,
        },
        [direction === "in" ? "100%" : "0%"]: { opacity: 1 },
    };
}

const fadeInLeft = keyframes(getFade("in", "left"));
const fadeOutLeft = keyframes(getFade("out", "left"));

const fadeInRight = keyframes(getFade("in", "right"));
const fadeOutRight = keyframes(getFade("out", "right"));

const fadeInTop = keyframes(getFade("in", "top"));
const fadeOutTop = keyframes(getFade("out", "top"));

const fadeInBottom = keyframes(getFade("in", "bottom"));
const fadeOutBottom = keyframes(getFade("out", "bottom"));

export const popoverAnimation = style([
    {
        selectors: {
            "&[data-placement='bottom']": {
                transformOrigin: "top",
            },
            "&[data-placement='left']": {
                transformOrigin: "right",
            },
            "&[data-placement='right']": {
                transformOrigin: "left",
            },
            "&[data-placement='top']": {
                transformOrigin: "bottom",
            },
        },
    },
    withPrefersMotion({
        selectors: {
            "&[data-entering][data-placement='bottom']": {
                animation: `${fadeInBottom} ${DURATION} ${EASE} forwards`,
            },
            "&[data-entering][data-placement='left']": {
                animation: `${fadeInLeft} ${DURATION} ${EASE} forwards`,
            },
            "&[data-entering][data-placement='right']": {
                animation: `${fadeInRight} ${DURATION} ${EASE} forwards`,
            },
            "&[data-entering][data-placement='top']": {
                animation: `${fadeInTop} ${DURATION} ${EASE} forwards`,
            },
            "&[data-exiting][data-placement='bottom']": {
                animation: `${fadeOutBottom} ${DURATION} ${EASE} forwards`,
            },
            "&[data-exiting][data-placement='left']": {
                animation: `${fadeOutLeft} ${DURATION} ${EASE} forwards`,
            },
            "&[data-exiting][data-placement='right']": {
                animation: `${fadeOutRight} ${DURATION} ${EASE} forwards`,
            },
            "&[data-exiting][data-placement='top']": {
                animation: `${fadeOutTop} ${DURATION} ${EASE} forwards`,
            },
        },
    }),
]);
