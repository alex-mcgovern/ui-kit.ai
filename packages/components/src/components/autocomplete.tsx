import type { AutocompleteProps as AriaAutocompleteProps } from "react-aria-components";

import {
    Autocomplete as AriaAutocomplete,
    useFilter,
} from "react-aria-components";

/**
 * An autocomplete combines a TextField or SearchField with a Menu or ListBox, allowing users to search or filter a list of suggestions.
 *
 * [source code](https://github.com/alex-mcgovern/ui-kit.ai/tree/main/packages/components/src/autocomplete)
 * [react-aria](https://react-spectrum.adobe.com/react-aria/Autocomplete)
 */
export function Autocomplete(props: AriaAutocompleteProps) {
    const { contains } = useFilter({ sensitivity: "base" });
    const filter = (textValue: string, inputValue: string) =>
        contains(textValue, inputValue);

    return <AriaAutocomplete {...props} filter={props.filter ?? filter} />;
}
