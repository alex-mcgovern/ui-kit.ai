import { CodeInline, Heading } from '@ui-kit.ai/components'

export default function Page() {
    return (
        <section>
            <Heading level={1}>Getting Started</Heading>
            <Heading
                className='text-lg font-normal'
                level={2}
            >
                Install <CodeInline language='plaintext'>@ui-kit.ai/components</CodeInline> and
                start building in minutes.
            </Heading>

            <p className='mb-2'></p>
        </section>
    )
}
