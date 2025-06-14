import type { LucideProps } from 'lucide-react'
import type { ReactNode } from 'react'

import {
    FieldGroup,
    Heading,
    Input,
    LinkButton,
    Markdown,
    TagLink,
    TextField,
    TextFieldCopyButton,
} from '@ui-kit.ai/components'
import * as components from '@ui-kit.ai/storybook'
import {
    ArrowRight,
    BlocksIcon,
    BotIcon,
    ChevronRightIcon,
    CodeIcon,
    DownloadIcon,
    MoonStarIcon,
    PaletteIcon,
    PersonStandingIcon,
    ZapIcon,
} from 'lucide-react'
import { twMerge } from 'tailwind-merge'

import { AllComponentsCards } from '../components/all-components-cards'
import { HomepageHero } from '../components/homepage-hero'
import { hrefs } from '../lib/hrefs'

const COMPONENTS_COUNT = Object.keys(components).length

export default function Home() {
    return (
        <main
            className={twMerge(
                'before:h-[200dvh] before:inset-0 before:-z-10 before:absolute',
                'before:bg-radial-[at_100%_0%] before:from-[var(--theme-error-bg-tint)] before:via-40% before:via-[var(--theme-info-bg-tint)] before:to-70% before:to-[var(--theme-default-bg-base)]'
            )}
        >
            <HomepageSection className='grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-8 items-center'>
                <div>
                    <HeroCtaSecondary className='mb-2' />
                    <HeroContent />
                    <HeroCtaPrimary className='mt-6' />
                </div>

                <HomepageHero className='hidden md:block' />
            </HomepageSection>
            <HomepageSection className='flex flex-col justify-center relative'>
                <Heading className='text-5xl font-bold tracking-tight mb-12'>
                    Everything you need...
                </Heading>
                <div className='grid grid-cols-1 gap-8 md:grid-cols-4 items-start'>
                    <HomepageCard
                        description="Quickly customize your app's look & feel with our [theme editor](/theme)."
                        gradientClassName='from-0% via-30% to-200%'
                        icon={PaletteIcon}
                        title='Themeable'
                    />
                    <HomepageCard
                        description='Simple component APIs that can be combined into powerful [recipes](/recipes).'
                        gradientClassName='from-0% via-20% to-166%'
                        icon={BlocksIcon}
                        title='Composable'
                    />
                    <HomepageCard
                        description='Built with [React Aria](https://react-spectrum.adobe.com/react-aria), the foremost accessibility-first UI primitives library.'
                        gradientClassName='from-0% via-10% to-133%'
                        icon={PersonStandingIcon}
                        title='Accessible'
                    />
                    <HomepageCard
                        description='Give your assistant UI super powers with our [MCP server](/docs/getting-started/mcp-server).'
                        gradientClassName='from-0% via-0% to-100%'
                        icon={BotIcon}
                        title='MCP server'
                    />
                    {/* Row 2 */}
                    <HomepageCard
                        description='Automatic light/dark mode support for all custom themes.'
                        gradientClassName='from-0% via-40% to-233%'
                        icon={MoonStarIcon}
                        title='Dark mode'
                    />
                    <HomepageCard
                        description='Start building straight away with a single [`npm install`](/docs/getting-started/installation).'
                        gradientClassName='from-0% via-30% to-200%'
                        icon={DownloadIcon}
                        title='Simple installation'
                    />
                    <HomepageCard
                        description='Tree-shakeable, small footprint and minimal runtime overhead.'
                        gradientClassName='from-0% via-20% to-166%'
                        icon={ZapIcon}
                        title='Performant'
                    />
                    <HomepageCard
                        description='Thoroughly documented with [examples](/docs/components/alerts) and [recipes](/recipes).'
                        gradientClassName='from-0% via-10% to-133%'
                        icon={CodeIcon}
                        title='Developer experience'
                    />
                </div>
            </HomepageSection>
            <HomepageSection>
                <Heading className='text-5xl font-bold tracking-tight mb-12'>
                    {COMPONENTS_COUNT} beautifully designed components...
                </Heading>
                <div className='grid grid-cols-1 gap-8 md:grid-cols-3 items-stretch'>
                    <AllComponentsCards />
                </div>
            </HomepageSection>
        </main>
    )
}

function HeroContent() {
    return (
        <>
            <Heading
                className='text-5xl md:text-6xl font-bold tracking-tight mb-6'
                level={1}
            >
                Beautiful UI components
                <br />
                for
                <span className='bg-gradient-to-br from-[var(--theme-error-text-placeholder)] via-[var(--theme-info-text-lo-contrast)] to-[var(--theme-info-text-hi-contrast)] bg-clip-text text-transparent'>
                    {' '}
                    AI-powered
                </span>{' '}
                apps
            </Heading>
            <p className='mb-2 text-xl text-balance'>
                Professionally designed components, optimized for fast iteration in AI workflows.
                Accessible, customizable, and ready for production.
            </p>
        </>
    )
}

function HeroCtaPrimary({ className }: { className?: string }) {
    return (
        <div className={twMerge('flex gap-2 w-min', className)}>
            <LinkButton
                className='!h-10'
                href={hrefs.docs.getting_started.installation}
                slotRight={<ChevronRightIcon />}
            >
                Get started
            </LinkButton>
            <TextField
                className='min-w-46 shrink-0 hidden md:block'
                isReadOnly
                value='npm i @ui-kit.ai/components'
            >
                <FieldGroup className='!h-10'>
                    <Input
                        className='font-mono'
                        isBorderless
                    />
                    <TextFieldCopyButton className='!size-7.5' />
                </FieldGroup>
            </TextField>
        </div>
    )
}

function HeroCtaSecondary({ className }: { className?: string }) {
    return (
        <TagLink
            className={twMerge(
                className,
                'h-6',
                'bg-gradient-to-r from-[var(--theme-error-tint-dark)] via-[var(--theme-info-tint-dark)] to-[var(--theme-info-tint-light)]'
            )}
            href={hrefs.docs.getting_started.mcp_server}
            slotLeft={<ZapIcon />}
            slotRight={<ArrowRight className='-ml-1.5' />}
        >
            Build faster with the ui-kit.ai MCP server
        </TagLink>
    )
}

function HomepageCard({
    description,
    gradientClassName,
    icon: Icon,
    title,
}: {
    description: string
    gradientClassName: string
    icon: React.ForwardRefExoticComponent<
        Omit<LucideProps, 'ref'> & React.RefAttributes<SVGSVGElement>
    >
    title: string
}) {
    return (
        <section>
            <div
                className={twMerge(
                    'border-default',
                    'flex items-center justify-center ',
                    'rounded-xl size-16',
                    'mb-4',
                    'shadow-xl',
                    'bg-gradient-to-tr from-[var(--theme-info-bg-primary)] via-[var(--theme-info-bg-primary-hover)] to-[var(--theme-error-bg-primary)]',
                    gradientClassName
                )}
            >
                <Icon
                    absoluteStrokeWidth
                    className='size-8 [&>*]:stroke-[1.5] text-accent'
                />
            </div>
            <Heading
                className='text-xl font-bold text-hi-contrast mb-2'
                level={4}
            >
                {title}
            </Heading>
            <Markdown className='text-balance'>{description}</Markdown>
        </section>
    )
}

function HomepageSection({ children, className }: { children: ReactNode; className?: string }) {
    return (
        <section
            className={twMerge(
                'mx-auto max-w-7xl px-6 min-h-[calc(100dvh-3rem)] relative',
                className
            )}
        >
            {children}
        </section>
    )
}
