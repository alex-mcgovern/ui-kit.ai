import { addons } from "@storybook/manager-api";
import theme from "./theme";

addons.setConfig({
    theme: theme,
    sidebar: {
        renderLabel: (item) => item.name,
    },
    toolbar: {},
    showToolbar: false,
});
