import type { Meta, StoryObj } from '@storybook/react'
import type { ComponentProps } from 'react'

import { Chat, ChatMessage } from '@ui-kit.ai/components'
import { llmStreamHandler } from '@ui-kit.ai/mocks'
import { EventSourcePolyfill } from 'event-source-polyfill'
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
    const [es] = useState(() => new EventSourcePolyfill('/api/stream'))
    const [streamedMessage, setStreamedMessage] = useState<string>('')

    useEffect(() => {
        // @ts-expect-error - EventSourcePolyfill does not have the same type as EventSource
        const handleStart = (e) => {
            setStreamedMessage(JSON.parse(e.data).text)
        }
        // @ts-expect-error - EventSourcePolyfill does not have the same type as EventSource
        const handleDelta = (e) => {
            setStreamedMessage((prev) => `${prev}${JSON.parse(e.data).text}`)
        }

        // Add event listeners with the named handler references
        es.addEventListener('text_part_start', handleStart)
        es.addEventListener('text_part_delta', handleDelta)

        // Remove the same handler references on cleanup
        return () => {
            es.removeEventListener('text_part_start', handleStart)
            es.removeEventListener('text_part_delta', handleDelta)
        }
    }, [es])

    // Combine the initial messages with the streaming content
    const displayMessages = [
        {
            content: 'Hello',
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
            className='mx-auto max-w-3xl p-4'
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
            handlers: [llmStreamHandler],
        },
    },
    // @ts-expect-error - intentionally omitting children
    render: (args) => <Template {...args} />,
}
