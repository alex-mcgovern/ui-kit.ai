import type { OptionsSchema } from '@ui-kit.ai/components'

import {
    Autocomplete,
    Button,
    Dialog,
    DialogContent,
    DialogHeader,
    DialogModal,
    DialogModalOverlay,
    DialogTrigger,
    EmptyState,
    Input,
    Menu,
    SearchField,
    useKbd,
} from '@ui-kit.ai/components'
import propTypes from '@ui-kit.ai/metadata/prop-types.json'
import components from '@ui-kit.ai/metadata/usage-examples.json'
import { SearchIcon } from 'lucide-react'
import { useState } from 'react'

import { hrefs } from '../lib/hrefs'

const ITEMS: OptionsSchema<'listbox'>[] = Object.entries(components).map(([componentName]) => {
    const docs = Array.isArray(propTypes)
        ? propTypes.find((prop) => prop.displayName === componentName)
        : null
    return {
        className: 'mb-2',
        description: docs?.description ?? '',
        href: hrefs.component(componentName),
        id: componentName,
        textValue: componentName,
    }
})

export function DocsSearchDialog() {
    const [isOpen, setIsOpen] = useState(false)
    const handleOpenChange = (open: boolean) => {
        setIsOpen(open)
    }

    useKbd([
        ['Command+K', () => setIsOpen((prev) => !prev)],
        ['Control+K', () => setIsOpen((prev) => !prev)],
    ])

    return (
        <DialogTrigger
            isOpen={isOpen}
            onOpenChange={handleOpenChange}
        >
            <Button className='!h-7 px-2 rounded-full justify-between'>
                <SearchIcon className='text-mid' />
                <span className='shrink-0 text-mid text-xs'>⌘K</span>
            </Button>
            <DialogModalOverlay>
                <DialogModal>
                    <Dialog
                        className='md:!h-[50vh] w-full'
                        width='md'
                    >
                        <Autocomplete>
                            <DialogHeader className='px-1.5'>
                                <SearchField
                                    aria-label='Search...'
                                    autoFocus
                                >
                                    <Input
                                        icon={<SearchIcon />}
                                        isBorderless
                                        placeholder='Search...'
                                    />
                                </SearchField>
                            </DialogHeader>
                            <DialogContent className='p-1'>
                                <Menu
                                    items={ITEMS}
                                    renderEmptyState={() => (
                                        <div className='h-dvh md:h-[calc(50vh-4rem)] flex items-center justify-between'>
                                            <EmptyState
                                                body='Try searching for something else.'
                                                className=''
                                                icon={<SearchIcon />}
                                                title='No results found'
                                            />
                                        </div>
                                    )}
                                />
                            </DialogContent>
                        </Autocomplete>
                    </Dialog>
                </DialogModal>
            </DialogModalOverlay>
        </DialogTrigger>
    )
}
