import {
    Button,
    Dialog,
    DialogContent,
    DialogHeader,
    DialogModal,
    DialogModalOverlay,
    DialogTrigger,
    Input,
    SearchField,
    useKbd,
} from '@ui-kit.ai/components'
import { SearchIcon } from 'lucide-react'
import { useState } from 'react'

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
                    <Dialog>
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

                        <DialogContent></DialogContent>
                    </Dialog>
                </DialogModal>
            </DialogModalOverlay>
        </DialogTrigger>
    )
}
