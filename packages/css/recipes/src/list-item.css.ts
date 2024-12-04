import { vars } from "@boondoggle.design/css-vars";
import { createVar } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

const gridLayout = createVar();
const ADORNMENT = vars.space.space_4;

const GRID_LAYOUT_BASE = "1fr";
const GRID_LAYOUT_L_BASE = `${ADORNMENT} 1fr`;
const GRID_LAYOUT_BASE_R = `1fr ${ADORNMENT}`;
const GRID_LAYOUT_L_BASE_R = `${ADORNMENT} 1fr ${ADORNMENT}`;

type ListBoxItemLayoutProps =
    | {
          hasIcon: boolean;
      }
    | {
          isSubmenuTrigger: false;
          selectionMode: "multiple" | "single";
      }
    | {
          isSubmenuTrigger: true;
          selectionMode: "none" | undefined;
      };

export const listBoxItemCSS = recipe({
    base: {
        display: "grid",
        gridTemplateColumns: gridLayout,
        vars: {
            [gridLayout]: "1fr",
        },
    },
    compoundVariants: [
        {
            style: {
                vars: {
                    [gridLayout]: GRID_LAYOUT_L_BASE_R,
                },
            },
            variants: {
                hasIcon: true,
                selectionMode: "single",
            },
        },
        {
            style: {
                vars: {
                    [gridLayout]: GRID_LAYOUT_L_BASE_R,
                },
            },
            variants: {
                hasIcon: true,
                selectionMode: "multiple",
            },
        },
        {
            style: {
                vars: {
                    [gridLayout]: GRID_LAYOUT_BASE_R,
                },
            },
            variants: {
                hasIcon: true,
                selectionMode: "none",
            },
        },
        {
            style: {
                vars: {
                    [gridLayout]: GRID_LAYOUT_BASE,
                },
            },
            variants: {
                hasIcon: false,
                selectionMode: "single",
            },
        },
        {
            style: {
                vars: {
                    [gridLayout]: GRID_LAYOUT_BASE,
                },
            },
            variants: {
                hasIcon: false,
                selectionMode: "multiple",
            },
        },
    ],
    variants: {
        hasIcon: {
            false: {},
            true: {
                vars: {
                    [gridLayout]: GRID_LAYOUT_L_BASE_R,
                },
            },
        },
        isSubmenuTrigger: {
            false: {},
            true: {
                vars: {
                    [gridLayout]: GRID_LAYOUT_BASE_R,
                },
            },
        },
        selectionMode: {
            multiple: {
                vars: {
                    [gridLayout]: GRID_LAYOUT_BASE_R,
                },
            },
            none: {},
            single: {
                vars: {
                    [gridLayout]: GRID_LAYOUT_BASE_R,
                },
            },
        },
    },
});
