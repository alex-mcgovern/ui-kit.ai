import type { Meta, StoryObj } from '@storybook/react'
import type { ComponentProps } from 'react'

import { Link } from '@ui-kit.ai/components'
import { ExternalLinkIcon } from 'lucide-react'
import { twMerge } from 'tailwind-merge'

function Template(args: ComponentProps<typeof Link>) {
    return <Link {...args} />
}

const meta = {
    component: Link,
    render: Template,
    title: 'Link',
} satisfies Meta<typeof Link>

export default meta
type Story = StoryObj<typeof meta>

function TemplateIcon(args: ComponentProps<typeof Link>) {
    return (
        <Link
            {...args}
            className={(renderProps) =>
                twMerge(
                    typeof args.className === 'function'
                        ? args.className(renderProps)
                        : args.className,
                    'flex items-center gap-1'
                )
            }
        >
            Learn more
            <ExternalLinkIcon className='h-4 w-4' />
        </Link>
    )
}

/**
 * The default Link component allows a user to navigate to another page or resource.
 */
export const Default: Story = {
    args: {
        children: 'Learn more',
        href: '#',
    },
    parameters: {
        displayName: 'Default',
    },
}

/**
 * You can add icons or other elements as children to create more visually informative links.
 */
export const WithIcon: Story = {
    args: {
        href: '#',
    },
    parameters: {
        displayName: 'With Icon',
    },
    render: TemplateIcon,
}

/**
 * Apply custom classes to modify the link's appearance.
 */
export const CustomStyling: Story = {
    args: {
        children: 'Learn more',
        className: 'error text-lo-contrast underline',
        href: '#',
    },
    parameters: {
        displayName: 'Custom Styling',
    },
}
