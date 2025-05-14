import {
    Autocomplete,
    Button,
    Dialog,
    DialogContent,
    DialogHeader,
    DialogModal,
    DialogModalOverlay,
    DialogTrigger,
    Input,
    Menu,
    type OptionsSchema,
    SearchField,
    useKbd,
} from '@ui-kit.ai/components'
import components from '@ui-kit.ai/metadata/usage-examples.json'
import { SearchIcon } from 'lucide-react'
import { useState } from 'react'

import { hrefs } from '../lib/hrefs'

const ITEMS: OptionsSchema<'listbox'>[] = Object.entries(components).map(([componentName]) => ({
    href: hrefs.component(componentName),
    id: componentName,
    textValue: componentName,
}))

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
                <SearchIcon />
                <span className='shrink-0 text-mid text-xs'>⌘K</span>
            </Button>
            <DialogModalOverlay>
                <DialogModal>
                    <Dialog width='md'>
                        <Autocomplete>
                            <DialogHeader className='px-0'>
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

                            <DialogContent>
                                <Menu items={ITEMS} />
                            </DialogContent>
                        </Autocomplete>
                    </Dialog>
                </DialogModal>
            </DialogModalOverlay>
        </DialogTrigger>
    )
}
