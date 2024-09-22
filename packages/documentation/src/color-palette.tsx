import { vars } from "@boondoggle.design/css-vars";

export const ColorPalette = () => {
    return <pre>{JSON.stringify(vars.color, null, 2)}</pre>;
};
