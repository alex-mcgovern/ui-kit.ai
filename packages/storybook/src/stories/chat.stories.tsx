import type { Meta, StoryObj } from '@storybook/react'
import type { ComponentProps } from 'react'

import { Chat, ChatMessage } from '@ui-kit.ai/components'
import { useEffect, useState } from 'react'

const meta: Meta<typeof Chat> = {
    component: Chat,
    title: 'Chat',
}

export default meta
interface ChatMessage {
    content: string
    id: string
    origin: 'them' | 'us'
}

type Story = StoryObj<typeof meta>

function Template(args: ComponentProps<typeof Chat>) {
    const [streamedMessage, setStreamedMessage] = useState<string>('')

    useEffect(() => {
        const fullMessage = 'Hi, how can I help?'
        let currentIndex = 0

        const interval = setInterval(() => {
            if (currentIndex <= fullMessage.length) {
                setStreamedMessage(fullMessage.substring(0, currentIndex))
                currentIndex++
            } else {
                clearInterval(interval)
            }
        }, 100)

        return () => {
            clearInterval(interval)
        }
    }, [])

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
    },
    // @ts-expect-error - intentionally omitting children
    render: (args) => <Template {...args} />,
}
