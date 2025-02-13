import type { StoryFn, StoryObj } from "@storybook/react";

import { faAngleDown } from "@fortawesome/pro-solid-svg-icons/faAngleDown";

import type { CollapsibleProps as StoryCompProps } from ".";

import { Collapsible as StoryComp } from ".";
import { LOREM } from "../../mocks/LOREM.mock";
import { css } from "../css/index.css";
import { Icon } from "../icon";

export default {
    component: StoryComp,
    decorators: [
        (Story) => {
            return (
                <div style={{ width: 300 }}>
                    <Story />
                </div>
            );
        },
    ],
    title: "Collapsible",
};

const TriggerNode = (
    <button
        className={css({
            alignItems: "center",
            color: "text_high_contrast",
            display: "flex",
            width: "100%",
        })}
        type="button"
    >
        Open collapsible
        <Icon
            icon={faAngleDown}
            marginLeft="auto"
        />
    </button>
);

const Template: StoryFn<StoryCompProps> = ({ ...rest }: StoryCompProps) => {
    return (
        <StoryComp
            {...rest}
            triggerNode={TriggerNode}
        />
    );
};

export const Default: StoryObj<StoryCompProps> = {
    args: {
        children: LOREM.title_xl,
    },
    render: Template,
};
