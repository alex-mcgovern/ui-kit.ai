import {
    Card,
    CardBody,
    CardHeader,
    CardTitle,
    FieldGroup,
    Heading,
    Input,
    LinkButton,
    TagLink,
    TextField,
    TextFieldCopyButton,
} from '@ui-kit.ai/components'
import { ArrowRight, BotIcon, Download, type LucideProps, Palette, Zap } from 'lucide-react'

import { hrefs } from '../lib/hrefs'

export default function Home() {
    return (
        <section className='mx-auto max-w-4xl'>
            <section className='my-16 '>
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
                <Heading
                    className='text-5xl text-balance'
                    level={1}
                >
                    A component library for the AI age.
                </Heading>
                <p className='mb-2 text-balance'>
                    Beautiful components built with React Aria Components, optimized for fast
                    iteration in AI powered workflows.
                </p>

                <div className='flex gap-2 mt-6 w-min '>
                    <LinkButton
                        href={hrefs.docs.getting_started.introduction}
                        slotRight={<ArrowRight className='-ml-1.5' />}
                    >
                        Docs
                    </LinkButton>
                    <TextField
                        className='min-w-52 shrink-0'
                        isReadOnly
                        value='npm i @ui-kit.ai/components'
                    >
                        <FieldGroup>
                            <Input
                                className='font-mono'
                                isBorderless
                            />
                            <TextFieldCopyButton />
                        </FieldGroup>
                    </TextField>
                    {/* <code className="bg-muted-200 inline-flex px-2.5 gap-1.5 items-center h-ui-element rounded">
                        <Copy className="size-4" />
                    </code> */}
                </div>
            </section>
            <section className='my-16 grid grid-cols-1 gap-4 md:grid-cols-2'>
                <HomepageCard
                    description="Customise your application's look & feel with CSS variables powered by Tailwind CSS v4."
                    icon={Palette}
                    title='Themeable'
                />
                <HomepageCard
                    description='Supercharge your LLM for UI development with our MCP server.'
                    icon={BotIcon}
                    title='Ready for AI'
                />
                <HomepageCard
                    description="Install a single NPM package. No CLI required. You want code ownership? We have something for that, it's called forking."
                    icon={Download}
                    title='Simple distribution'
                />
                <HomepageCard
                    description="Customise your application's look & feel with CSS variables powered by Tailwind CSS v4."
                    icon={Palette}
                    title='Themeable'
                />
            </section>
        </section>
    )
}

function HomepageCard({
    description,
    icon: Icon,
    title,
}: {
    description: string
    icon: React.ForwardRefExoticComponent<
        Omit<LucideProps, 'ref'> & React.RefAttributes<SVGSVGElement>
    >
    title: string
}) {
    return (
        <Card>
            <CardHeader className='pb-0'>
                <Icon className='bg-muted-100 p-1.5 rounded-full size-8 text-mid -ml-1.5' />
                <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardBody>
                <p className='text-mid'>{description}</p>
            </CardBody>
        </Card>
    )
}
