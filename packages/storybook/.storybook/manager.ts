import { addons } from "@storybook/manager-api";

addons.setConfig({
    showToolbar: false,
    sidebar: {
        renderLabel: (item) => item.name,
    },
    toolbar: {},
});
