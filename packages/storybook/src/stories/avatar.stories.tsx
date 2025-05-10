import type { Meta, StoryObj } from '@storybook/react'

import { Avatar } from '@ui-kit.ai/components'

const meta: Meta<typeof Avatar> = {
    component: Avatar,
    title: 'Components/Avatar',
    args: {
        name: 'Alex McGovern',
    },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    parameters: {
        displayName: 'Default',
    },
}

export const WithImage: Story = {
    args: {
        src: 'alex.jpeg',
    },
    parameters: {
        displayName: 'With Image',
    },
}

export const Square: Story = {
    args: {
        variant: 'square',
    },
    parameters: {
        displayName: 'Square Variant',
    },
}

export const SquareWithImage: Story = {
    args: {
        src: 'alex.jpeg',
        variant: 'square',
    },
    parameters: {
        displayName: 'Square with Image',
    },
}

export const Loading: Story = {
    args: {
        isLoading: true,
    },
    parameters: {
        displayName: 'Loading State',
    },
}

export const SingleName: Story = {
    args: {
        name: 'Alex',
    },
    parameters: {
        displayName: 'Single Name',
    },
}

export const NoName: Story = {
    args: {
        name: undefined,
    },
    parameters: {
        displayName: 'No Name',
    },
}
