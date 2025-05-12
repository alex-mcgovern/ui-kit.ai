import type { Meta, StoryObj } from '@storybook/react'
import type { ComponentProps } from 'react'

import { Description, Form, FormSelect, Label, SelectButton } from '@ui-kit.ai/components'
import { getMockOptions } from '@ui-kit.ai/mocks'
import { GlobeIcon } from 'lucide-react'

// import * as DescriptionStories from './description.stories'
// import * as LabelStories from './label.stories'

function Template(args: ComponentProps<typeof FormSelect>) {
    return (
        <Form
            onSubmit={(values) => {
                alert(JSON.stringify(values))
            }}
        >
            <FormSelect
                {...args}
                items={getMockOptions({ withIcon: true })}
            >
                {/* <Label {...LabelStories.Default.args} /> */}
                <SelectButton slotLeft={<GlobeIcon />} />
                {/* <Description {...DescriptionStories.Default.args} /> */}
            </FormSelect>
        </Form>
    )
}

const meta = {
    args: {
        name: 'country',
    },
    component: FormSelect,
    render: Template,
    title: 'FormSelect',
} satisfies Meta<typeof FormSelect>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        name: 'favorite_plant',
    },
    parameters: {
        displayName: 'Default',
    },
}

export const IsInvalid: Story = {
    args: {
        isInvalid: true,
        name: 'favorite_plant',
    },
    parameters: {
        displayName: 'Invalid',
    },
}
