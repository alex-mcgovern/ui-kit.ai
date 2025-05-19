'use client'

import { LinkButton, TopNav as UIKitTopNav } from '@ui-kit.ai/components'
import { Github } from 'lucide-react'
import Link from 'next/link'

import { hrefs } from '../lib/hrefs'
import { DocsSearchDialog } from './docs-search-dialog'

export function TopNav() {
    return (
        <UIKitTopNav>
            <div className='flex gap-6 items-center'>
                <Link
                    className='font-semibold flex items-center gap-1 text-dark hover:text-mid transition-colors'
                    href='/'
                >
                    ❖ ui-kit.ai
                </Link>
                <div className='hidden md:flex items-center gap-4'>
                    <Link
                        className='text-sm  text-dark hover:text-mid transition-colors'
                        href={hrefs.docs.getting_started.introduction}
                    >
                        Docs
                    </Link>
                    <Link
                        className='text-sm  text-dark hover:text-mid transition-colors'
                        href={hrefs.docs.components}
                    >
                        Components
                    </Link>
                    <Link
                        className='text-sm  text-dark hover:text-mid transition-colors'
                        href={hrefs.theme}
                    >
                        Theme
                    </Link>
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
