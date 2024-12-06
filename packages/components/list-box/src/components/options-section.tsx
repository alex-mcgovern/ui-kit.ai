import type { SectionProps as ReactAriaSectionProps } from "react-aria-components";

import clsx from "clsx";
import { Section as RACSection } from "react-aria-components";

import { optionsSectionStyle } from "../styles/options-section.css";

export function Section<TItem extends object = object>(
    props: ReactAriaSectionProps<TItem>,
) {
    return (
        <RACSection
            {...props}
            className={clsx(optionsSectionStyle, props.className)}
        />
    );
}
