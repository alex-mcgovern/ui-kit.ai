import type { FieldButtonProps } from "@boondoggle.design/field-button";

import { FieldButton } from "@boondoggle.design/field-button";
import { faTimesCircle } from "@fortawesome/pro-solid-svg-icons/faTimesCircle";

import { Icon } from "../../../../../src/icon";
import { searchFieldClearButtonStyle } from "../styles/searech-field-clear-button.css";

export const SearchFieldClearButton = (props: FieldButtonProps) => {
    return (
        <FieldButton
            {...props}
            className={searchFieldClearButtonStyle}
            slot="clear"
        >
            <Icon icon={faTimesCircle} />
        </FieldButton>
    );
};
