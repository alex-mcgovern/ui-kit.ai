import type { Meta, StoryObj } from '@storybook/react'
import type { ComponentProps } from 'react'

import { Heading } from '@ui-kit.ai/components'

const TEXT = 'Lorem ipsum dolor sit amet...'

function Template(props: ComponentProps<typeof Heading>) {
    return (
        <div>
            {LEVELS.map((level) => (
                <Heading
                    {...props}
                    children={`H${level} ${TEXT} `}
                    className='truncate mb-0'
                    key={level}
                    level={level}
                />
            ))}
        </div>
    )
}

const meta = {
    args: {
        children: TEXT,
    },
    component: Heading,
    title: 'Components/Heading',
} satisfies Meta<typeof Heading>

export default meta
type Story = StoryObj<typeof meta>

const LEVELS = [1, 2, 3, 4, 5, 6] satisfies ComponentProps<typeof Heading>['level'][]

export const Default: Story = {
    args: {
        children: TEXT,
    },
    parameters: {
        displayName: 'Default',
    },
    render: Template,
}
