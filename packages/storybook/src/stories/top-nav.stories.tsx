import type { Meta, StoryObj } from '@storybook/react'

import { Link, TopNav } from '@ui-kit.ai/components'
import { LinkButton } from '@ui-kit.ai/components'
import { Github } from 'lucide-react'

const meta: Meta<typeof TopNav> = {
    component: TopNav,
    title: 'Navigation/TopNav',
}

export default meta
type Story = StoryObj<typeof TopNav>

export const Default: Story = {
    parameters: {
        displayName: 'Default',
    },
    render: (args) => (
        <TopNav {...args}>
            <div className='flex items-center gap-6'>
                <Link
                    className='text-dark hover:text-mid flex items-center gap-1 font-semibold transition-colors'
                    href='/'
                >
                    ❖ ui-kit.ai
                </Link>
                <div className='flex items-center gap-4'>
                    <Link
                        className='text-dark hover:text-mid text-sm transition-colors'
                        href='#'
                    >
                        Docs
                    </Link>
                    <Link
                        className='text-dark hover:text-mid text-sm transition-colors'
                        href='#'
                    >
                        Components
                    </Link>
                    <Link
                        className='text-dark hover:text-mid text-sm transition-colors'
                        href='#'
                    >
                        Theme
                    </Link>
                </div>
            </div>
            <div className='flex items-center gap-2'>
                <LinkButton
                    href='#'
                    isIcon
                    variant='tertiary'
                >
                    <Github size={18} />
                </LinkButton>
            </div>
        </TopNav>
    ),
}
