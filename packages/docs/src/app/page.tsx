import type { LucideProps } from 'lucide-react'

import {
    Card,
    CardBody,
    CardTitle,
    FieldGroup,
    Heading,
    Input,
    LinkButton,
    TagLink,
    TextField,
    TextFieldCopyButton,
} from '@ui-kit.ai/components'
import { ArrowRight, BotIcon, ChevronRightIcon, Download, Palette, Zap } from 'lucide-react'
import { twMerge } from 'tailwind-merge'

import { HomepageHero } from '../components/homepage-hero'
import { hrefs } from '../lib/hrefs'

export default function Home() {
    return (
        <main
            className={twMerge(
                'before:h-dvh before:inset-0 before:-z-10 before:fixed',
                'before:bg-radial-[at_100%_0%] before:from-[var(--theme-error-bg-tint-light)] before:via-[var(--theme-info-bg-tint-light)] before:to-transparent'
            )}
        >
            <div className='mx-auto max-w-7xl'>
                <section className='my-16 grid grid-cols-[3fr_2fr] gap-8'>
                    <div>
                        <div className='flex items-center gap-1 mb-2 -ml-1.5'>
                            <TagLink
                                className='h-6'
                                slotLeft={<Zap />}
                                slotRight={<ArrowRight className='-ml-1.5' />}
                            >
                                Build faster with the ui-kit.ai MCP server
                            </TagLink>
                            <p className='mb-0'></p>
                        </div>
                        <Heading className='text-5xl md:text-6xl font-bold tracking-tight mb-6'>
                            Beautiful UI components
                            <br />
                            for
                            <span className='bg-gradient-to-br from-[var(--theme-error-text-light)] via-[var(--theme-info-text-mid)] to-[var(--theme-info-text-dark)] bg-clip-text text-transparent'>
                                {' '}
                                AI-powered
                            </span>{' '}
                            apps
                        </Heading>
                        <p className='mb-2 text-xl text-balance'>
                            Professionally designed components, optimized for fast iteration in AI
                            workflows. Accessible, customizable, and ready for production.
                        </p>
                        <div className='flex gap-2 mt-6 w-min '>
                            <LinkButton
                                className='!h-10'
                                href={hrefs.docs.getting_started.introduction}
                                slotRight={<ChevronRightIcon />}
                            >
                                Get started
                            </LinkButton>
                            <TextField
                                className='min-w-52 shrink-0'
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
                    </div>
                    <div className='flex items-center justify-center'>
                        <HomepageHero />
                    </div>
                </section>
                <section className='my-20 grid grid-cols-1 gap-8 md:grid-cols-4'>
                    <HomepageCard
                        className='info'
                        description="Customise your application's look & feel with CSS variables powered by Tailwind CSS v4."
                        icon={Palette}
                        title='Themeable'
                    />
                    <HomepageCard
                        className='error'
                        description='Supercharge your LLM for UI development with our MCP server.'
                        icon={BotIcon}
                        title='Ready for AI'
                    />
                    <HomepageCard
                        className='success'
                        description="Install a single NPM package. No CLI required. You want code ownership? We have something for that, it's called forking."
                        icon={Download}
                        title='Simple distribution'
                    />
                    <HomepageCard
                        className='warning'
                        description="Customise your application's look & feel with CSS variables powered by Tailwind CSS v4."
                        icon={Palette}
                        title='Themeable'
                    />
                </section>
            </div>
        </main>
    )
}

function HomepageCard({
    className,
    description,
    icon: Icon,
    title,
}: {
    className?: string
    description: string
    icon: React.ForwardRefExoticComponent<
        Omit<LucideProps, 'ref'> & React.RefAttributes<SVGSVGElement>
    >
    title: string
}) {
    return (
        <Card className={twMerge(className, 'bg-tint-light/20')}>
            <CardBody
                className={twMerge(
                    'flex flex-col items-center justify-center gap-4 py-8',
                    'before:absolute before:inset-0 before:rounded-xl',
                    'before:-z-10',
                    'before:bg-gradient-to-r before:from-transparent before:via-[var(--theme-default-bg-tint-light)] before:to-transparent',
                    'md:hover:before:from-transparent md:hover:before:via-[var(--theme-default-bg-tint-light)] md:hover:before:to-transparent',
                    'before:opacity-40 before:blur-xl before:transition-all before:duration-500 md:hover:before:opacity-90 md:hover:before:blur-lg'
                )}
            >
                <div className='bg-accent flex items-center justify-center rounded-xl border-dark shadow-2xl shadow-[var(--theme-default-bg-accent)] size-16 -ml-1.5'>
                    <Icon
                        absoluteStrokeWidth
                        className='bg-muted-100 p-1.5 rounded-full size-12 [&>*]:stroke-1.5 text-accent'
                    />
                </div>
                <CardTitle className='text-xl font-bold text-dark'>{title}</CardTitle>

                <p className='text-dark text-sm text-center text-balance'>{description}</p>
            </CardBody>
        </Card>
    )
}
