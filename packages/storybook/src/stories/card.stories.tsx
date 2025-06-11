import type { Meta, StoryObj } from '@storybook/react'
import type { ComponentProps } from 'react'

import {
    Button,
    Card,
    CardBody,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
    FieldGroup,
    Form,
    FormSubmitButton,
    FormTextField,
    Input,
    Label,
    TextFieldClearButton,
} from '@ui-kit.ai/components'

function Template(args: ComponentProps<typeof Card>) {
    return (
        <Card
            {...args}
            className='w-full max-w-128'
        >
            <CardHeader>
                <CardTitle>Card title</CardTitle>
                <CardDescription>Card description</CardDescription>
            </CardHeader>
            <CardBody>
                This is the card body content. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor incididunt ut labore.
            </CardBody>
            <CardFooter className='flex justify-end gap-2'>
                <Button variant='secondary'>Secondary</Button>
                <Button variant='primary'>Primary</Button>
            </CardFooter>
        </Card>
    )
}

function TemplateCardForm(args: ComponentProps<typeof Card>) {
    return (
        <Card
            {...args}
            className='w-full max-w-128'
        >
            <Form onSubmit={() => {}}>
                <CardHeader>
                    <CardTitle>Card title</CardTitle>
                    <CardDescription>Card description</CardDescription>
                </CardHeader>
                <CardBody>
                    <FormTextField
                        className='mb-4'
                        name='username'
                        type='username'
                    >
                        <Label>Username</Label>
                        <FieldGroup>
                            <Input isBorderless />
                            <TextFieldClearButton />
                        </FieldGroup>
                    </FormTextField>
                    <FormTextField
                        className='mb-4'
                        name='email'
                        type='email'
                    >
                        <Label>Email address</Label>
                        <FieldGroup>
                            <Input isBorderless />
                            <TextFieldClearButton />
                        </FieldGroup>
                    </FormTextField>
                </CardBody>
                <CardFooter className='flex justify-end gap-2'>
                    <FormSubmitButton>Submit</FormSubmitButton>
                </CardFooter>
            </Form>
        </Card>
    )
}

const meta = {
    component: Card,
    render: Template,
    title: 'Card',
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {},
    parameters: {
        displayName: 'Default',
    },
}

export const WithForm: Story = {
    args: {},
    parameters: {
        displayName: 'Card with form',
    },
    render: TemplateCardForm,
}

export const CustomClassName: Story = {
    args: {
        className: 'max-w-sm',
    },
    parameters: {
        displayName: 'Custom ClassName',
    },
}
