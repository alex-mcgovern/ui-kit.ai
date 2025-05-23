import type { Meta, StoryObj } from '@storybook/react'
import type { ComponentProps } from 'react'

import { Disclosure, DisclosureButton, DisclosurePanel } from '@ui-kit.ai/components'

function Template(args: ComponentProps<typeof Disclosure>) {
    return (
        <Disclosure
            {...args}
            defaultExpanded
        >
            <DisclosureButton>Toggle Content</DisclosureButton>
            <DisclosurePanel>
                <p>This is the content inside the disclosure panel.</p>
            </DisclosurePanel>
        </Disclosure>
    )
}

const meta = {
    component: Disclosure,
    render: Template,
    title: 'Disclosure',
} satisfies Meta<typeof Disclosure>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    parameters: {
        displayName: 'Default',
    },
}
