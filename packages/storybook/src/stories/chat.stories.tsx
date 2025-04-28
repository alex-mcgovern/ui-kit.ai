import type { Meta, StoryObj } from '@storybook/react'
import type { ComponentProps } from 'react'

import { Chat, ChatMessage } from '@ui-kit.ai/components'
import { fibonacciStreamHandler } from '@ui-kit.ai/mocks'
import { useEffect, useState } from 'react'

const meta: Meta<typeof Chat> = {
    component: Chat,
    title: 'Components/Chat',
}

export default meta
interface ChatMessage {
    content: string
    id: string
    origin: 'them' | 'us'
}

type Story = StoryObj<typeof meta>

function Template(args: ComponentProps<typeof Chat>) {
    const [es] = useState(() => new EventSource('/api/stream/fibonacci'))
    const [streamedMessage, setStreamedMessage] = useState<string>('')

    useEffect(() => {
        es.addEventListener('text_part_start', (e) => {
            setStreamedMessage(JSON.parse(e.data).text)
        })
        es.addEventListener('text_part_delta', (e) => {
            setStreamedMessage((prev) => `${prev}${JSON.parse(e.data).text}`)
        })
    }, [es])

    // Combine the initial messages with the streaming content
    const displayMessages = [
        {
            content: 'How would I implement the fibonacci sequence in Typescript, Python and Rust?',
            id: 'msg-1',
            origin: 'us',
        },
        {
            content: streamedMessage,
            id: 'msg-2',
            origin: 'them',
        },
    ] as const

    return (
        <Chat
            {...args}
            className='max-w-3xl mx-auto p-4'
        >
            {displayMessages.map((message) => (
                <ChatMessage
                    content={message.content}
                    id={message.id}
                    key={message.id}
                    origin={message.origin}
                />
            ))}
        </Chat>
    )
}

export const Default: Story = {
    parameters: {
        displayName: 'Default',
        msw: {
            handlers: [fibonacciStreamHandler],
        },
    },
    // @ts-expect-error - intentionally omitting children
    render: (args) => <Template {...args} />,
}
