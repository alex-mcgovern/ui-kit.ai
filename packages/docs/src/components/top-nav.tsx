'use client'

import type { ComponentProps } from 'react'

import { Link, LinkButton, TopNav as UIKitTopNav } from '@ui-kit.ai/components'
import { Github } from 'lucide-react'

import { hrefs } from '../lib/hrefs'
import { DocsSearchDialog } from './docs-search-dialog'

export function TopNav() {
    return (
        <UIKitTopNav>
            <div className='flex gap-6 items-center'>
                <Link
                    className='font-semibold flex items-center gap-1 text-hi-contrast hover:text-lo-contrast transition-colors !no-underline'
                    href='/'
                >
                    ❖ ui-kit.ai
                </Link>
                <div className='hidden md:flex items-center gap-4'>
                    <TopNavLink href={hrefs.docs.getting_started.introduction}>Docs</TopNavLink>
                    <TopNavLink href={hrefs.docs.components}>Components</TopNavLink>
                    <TopNavLink href={hrefs.theme}>Theme</TopNavLink>
                </div>
                {/* <Tag className='h-5 text-xs px-1.5'>v{packageJson.version}</Tag> */}
            </div>
            <div className='flex items-center justify-between gap-1 '>
                <DocsSearchDialog />
                <LinkButton
                    href='https://github.com/alex-mcgovern/ui-kit.ai'
                    isIcon
                    variant='tertiary'
                >
                    <Github />
                </LinkButton>
                {/* <Button
                        isIcon
                        variant='tertiary'
                    >
                        <Sun />
                    </Button> */}
            </div>
        </UIKitTopNav>
    )
}

function TopNavLink(props: ComponentProps<typeof Link>) {
    return (
        <Link
            {...props}
            className='text-sm  text-hi-contrast hover:text-lo-contrast transition-colors !no-underline'
        />
    )
}
