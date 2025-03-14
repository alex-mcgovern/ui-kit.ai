import { addons } from "@storybook/manager-api";

import theme from "./theme";

addons.setConfig({
    showToolbar: false,
    sidebar: {
        renderLabel: (item) => item.name,
    },
    theme: theme,
    toolbar: {},
});
