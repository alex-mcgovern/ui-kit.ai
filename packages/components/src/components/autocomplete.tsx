import type { AutocompleteProps as AriaAutocompleteProps } from 'react-aria-components'

import { Autocomplete as AriaAutocomplete, useFilter } from 'react-aria-components'

/**
 * An `Autocomplete` combines a `TextField` (or `SearchField`) with a `Menu` or `ListBox`, allowing users to search or filter a list of suggestions.
 */
export function Autocomplete(props: AriaAutocompleteProps) {
    const { contains } = useFilter({ sensitivity: 'base' })
    const filter = (textValue: string, inputValue: string) => contains(textValue, inputValue)

    return (
        <AriaAutocomplete
            {...props}
            filter={props.filter ?? filter}
        />
    )
}
Autocomplete.displayName = 'Autocomplete'
