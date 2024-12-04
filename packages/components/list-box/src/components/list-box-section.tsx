import type { SectionProps as ReactAriaSectionProps } from "react-aria-components";

import clsx from "clsx";
import { Section as ReactAriaSection } from "react-aria-components";

import { menuSectionCSS } from "../styles/list-box-section.css";

export function Section<TItem extends object = object>(
    props: ReactAriaSectionProps<TItem>,
) {
    return (
        <ReactAriaSection
            {...props}
            className={clsx(menuSectionCSS, props.className)}
        />
    );
}
