import * as components from '@ui-kit.ai/storybook'

import { ComponentDocsPageContent } from './_components/page-content'

export function generateStaticParams() {
    return Object.keys(components).map((component) => ({
        component: component,
    }))
}

export default function Page({ params }: { params: { component: keyof typeof components } }) {
    return <ComponentDocsPageContent component={params.component} />
}
