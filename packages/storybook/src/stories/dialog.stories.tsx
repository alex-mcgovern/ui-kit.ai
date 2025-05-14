import type { Meta, StoryObj } from '@storybook/react'
import type { ComponentProps } from 'react'

import { faker } from '@faker-js/faker'
import {
    Button,
    Dialog,
    DialogCloseButton,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogModal,
    DialogModalOverlay,
    DialogTitle,
    DialogTrigger,
} from '@ui-kit.ai/components'

function Template(props: ComponentProps<typeof Dialog>) {
    return (
        <DialogTrigger>
            <Button className='error'>Delete account</Button>
            <DialogModalOverlay>
                <DialogModal>
                    <TemplateDialog {...props} />
                </DialogModal>
            </DialogModalOverlay>
        </DialogTrigger>
    )
}
function TemplateDialog(props: ComponentProps<typeof Dialog>) {
    return (
        <Dialog {...props}>
            {({ close }) => {
                return (
                    <>
                        <DialogHeader>
                            <DialogTitle>Delete account</DialogTitle>
                            <DialogCloseButton />
                        </DialogHeader>

                        <DialogContent>
                            <p className='mb-2'>Are you sure you want to delete your account?</p>
                            <p>
                                <b>This action cannot be undone.</b> All of your data will be
                                permanently deleted.
                            </p>
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
                                className='error'
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
    title: 'Dialog',
} satisfies Meta<typeof Dialog>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    parameters: {
        className: 'error',
        displayName: 'Default',
    },
    render: TemplateDialog,
}

export const Modal: Story = {
    parameters: {
        displayName: 'Modal',
    },
    render: Template,
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
