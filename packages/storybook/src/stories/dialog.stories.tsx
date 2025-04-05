import type { Meta, StoryObj } from '@storybook/react'
import type { ComponentProps, ComponentType } from 'react'

import { faker } from '@faker-js/faker'
import {
    Button,
    Dialog,
    DialogCloseButton,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@ui-kit.ai/components'

function Template(props: ComponentProps<typeof Dialog>) {
    return (
        <DialogTrigger>
            <Button>Open dialog</Button>
            <Dialog {...props}>
                {({ close }) => {
                    return (
                        <>
                            <DialogHeader>
                                <DialogTitle>Hello there</DialogTitle>
                                <DialogCloseButton />
                            </DialogHeader>

                            <DialogContent>
                                <LongContent />
                            </DialogContent>

                            <DialogFooter>
                                <Button
                                    className='ml-auto'
                                    onPress={() => close()}
                                    variant='secondary'
                                >
                                    Cancel
                                </Button>
                                <Button
                                    onPress={() => {
                                        alert('Confirmed')
                                        close()
                                    }}
                                    type='submit'
                                >
                                    Confirm
                                </Button>
                            </DialogFooter>
                        </>
                    )
                }}
            </Dialog>
        </DialogTrigger>
    )
}

const LongContent = () => (
    <>
        <p className='mb-2'>
            A modal dialog component powered by{' '}
            <a href='https://react-spectrum.adobe.com/react-aria/Dialoghtml'>
                React Aria Components
            </a>
        </p>
        {Array.from({ length: 10 }, () => {
            return (
                <p
                    className='mb-2'
                    key={faker.string.alphanumeric(4)}
                >
                    {faker.lorem.paragraphs(1)}
                </p>
            )
        })}
    </>
)

const meta = {
    component: Dialog,
    render: Template,
    // Storybook's typescript is a bit sh*t, hence the type-casting
    subcomponents: {
        DialogCloseButton: DialogCloseButton as ComponentType<unknown>,
        DialogContent: DialogContent as ComponentType<unknown>,
        DialogFooter: DialogFooter as ComponentType<unknown>,
        DialogHeader: DialogHeader as ComponentType<unknown>,
        DialogTitle: DialogTitle as ComponentType<unknown>,
        DialogTrigger: DialogTrigger as ComponentType<unknown>,
    },
    title: 'Components/Dialog',
} satisfies Meta<typeof Dialog>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        children: ({ close }) => {
            return (
                <>
                    <DialogHeader>
                        <DialogTitle>Hello there</DialogTitle>
                        <DialogCloseButton />
                    </DialogHeader>

                    <DialogContent>
                        <LongContent />
                    </DialogContent>

                    <DialogFooter>
                        <Button
                            className='ml-auto'
                            onPress={() => close()}
                            variant='secondary'
                        >
                            Cancel
                        </Button>
                        <Button
                            onPress={() => {
                                alert('Confirmed')
                                close()
                            }}
                            type='submit'
                        >
                            Confirm
                        </Button>
                    </DialogFooter>
                </>
            )
        },
    },
    parameters: {
        displayName: 'Default',
    },
}

export const WidthMd: Story = {
    args: {
        children: ({ close }) => {
            return (
                <>
                    <DialogHeader>
                        <DialogTitle>Hello there</DialogTitle>
                        <DialogCloseButton />
                    </DialogHeader>

                    <DialogContent>
                        <LongContent />
                    </DialogContent>

                    <DialogFooter>
                        <Button
                            className='ml-auto'
                            slot='close'
                            variant='secondary'
                        >
                            Cancel
                        </Button>
                        <Button
                            onPress={() => {
                                alert('Confirmed')
                                close()
                            }}
                            type='submit'
                        >
                            Confirm
                        </Button>
                    </DialogFooter>
                </>
            )
        },
    },
    parameters: {
        displayName: 'md',
    },
}

export const WidthLg: Story = {
    args: {
        children: ({ close }) => {
            return (
                <>
                    <DialogHeader>
                        <DialogTitle>Hello there</DialogTitle>
                        <DialogCloseButton />
                    </DialogHeader>

                    <DialogContent>
                        <LongContent />
                    </DialogContent>

                    <DialogFooter>
                        <Button
                            className='ml-auto'
                            onPress={() => close()}
                            variant='secondary'
                        >
                            Cancel
                        </Button>
                        <Button
                            onPress={() => {
                                alert('Confirmed')
                                close()
                            }}
                            type='submit'
                        >
                            Confirm
                        </Button>
                    </DialogFooter>
                </>
            )
        },
    },
    parameters: {
        displayName: 'lg',
    },
}
