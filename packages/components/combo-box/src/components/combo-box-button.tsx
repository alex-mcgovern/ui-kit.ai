import { FieldButton } from "@boondoggle.design/field-button";
import { faAnglesUpDown } from "@fortawesome/pro-solid-svg-icons/faAnglesUpDown";

import { Icon } from "../../../../../src/icon";

export const ComboBoxButton = () => {
    return (
        <FieldButton>
            <Icon icon={faAnglesUpDown} />
        </FieldButton>
    );
};
