import { Markdown } from '@ui-kit.ai/components'

import markdown from './markdown.md?raw'

export default function Page() {
    return <Markdown children={markdown} />
}
