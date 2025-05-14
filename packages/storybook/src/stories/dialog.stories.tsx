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
