import type { Meta, StoryObj } from '@storybook/react'
import type { ComponentProps } from 'react'

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
                    <Dialog {...props}>
                        <DialogHeader>
                            <DialogTitle>Delete account</DialogTitle>
                            <DialogCloseButton />
                        </DialogHeader>

                        <DialogContent>
                            <p>
                                <b>This action cannot be undone.</b> All of your account data will
                                be permanently deleted.
                            </p>
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
                    </Dialog>
                </DialogModal>
            </DialogModalOverlay>
        </DialogTrigger>
    )
}

function TemplateDialog(props: ComponentProps<typeof Dialog>) {
    return (
        <Dialog {...props}>
            <DialogHeader>
                <DialogTitle>Delete account</DialogTitle>
                <DialogCloseButton />
            </DialogHeader>

            <DialogContent>
                <p>
                    <b>This action cannot be undone.</b> All of your account data will be
                    permanently deleted.
                </p>
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
        </Dialog>
    )
}

function TemplateLongContent(props: ComponentProps<typeof Dialog>) {
    return (
        <DialogTrigger>
            <Button className='error'>Delete account</Button>
            <DialogModalOverlay>
                <DialogModal>
                    <Dialog {...props}>
                        <DialogHeader>
                            <DialogTitle>Delete account</DialogTitle>
                            <DialogCloseButton />
                        </DialogHeader>

                        <DialogContent>
                            <p className='mb-2'>
                                Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
                                faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi
                                pretium tellus duis convallis. Tempus leo eu aenean sed diam urna
                                tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas.
                                Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut
                                hendrerit semper vel class aptent taciti sociosqu. Ad litora
                                torquent per conubia nostra inceptos himenaeos.
                            </p>
                            <p className='mb-2'>
                                Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
                                faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi
                                pretium tellus duis convallis. Tempus leo eu aenean sed diam urna
                                tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas.
                                Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut
                                hendrerit semper vel class aptent taciti sociosqu. Ad litora
                                torquent per conubia nostra inceptos himenaeos.
                            </p>
                            <p className='mb-2'>
                                Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
                                faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi
                                pretium tellus duis convallis. Tempus leo eu aenean sed diam urna
                                tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas.
                                Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut
                                hendrerit semper vel class aptent taciti sociosqu. Ad litora
                                torquent per conubia nostra inceptos himenaeos.
                            </p>
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
                    </Dialog>
                </DialogModal>
            </DialogModalOverlay>
        </DialogTrigger>
    )
}

// const LongContent = () => (
//     <>
//         <p className='mb-2'>
//             A modal dialog component powered by{' '}
//             <a href='https://react-spectrum.adobe.com/react-aria/Dialoghtml'>
//                 React Aria Components
//             </a>
//         </p>
//         {Array.from({ length: 10 }, () => {
//             return (
//                 <p
//                     className='mb-2'
//                     key={faker.string.alphanumeric(4)}
//                 >
//                     {faker.lorem.paragraphs(1)}
//                 </p>
//             )
//         })}
//     </>
// )

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

export const WidthSm: Story = {
    args: {
        width: 'sm',
    },
    parameters: {
        displayName: 'Width: `sm`',
    },
    render: TemplateDialog,
}

export const WidthMd: Story = {
    args: {
        width: 'md',
    },
    parameters: {
        displayName: 'Width: `md`',
    },
    render: TemplateDialog,
}

export const WidthLg: Story = {
    args: {
        width: 'lg',
    },
    parameters: {
        displayName: 'Width: `lg`',
    },
    render: TemplateDialog,
}

export const WithLongContent: Story = {
    parameters: {
        displayName: 'With long content',
    },
    render: TemplateLongContent,
}
