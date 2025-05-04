import type { ReactNode } from 'react'

import { twMerge } from 'tailwind-merge'
import { tv } from 'tailwind-variants'

import { Markdown } from './markdown'

type ChatOrigin = 'them' | 'us'

const messageBubbleStyles = tv({
    base: ['text-dark relative px-3 py-2 md:max-w-4/5'],
    variants: {
        origin: {
            them: ['justify-self-start-safe left-0'],
            us: ['bg-tint-light right-0 justify-self-end-safe rounded-xl rounded-tr-none'],
        },
    },
})

/**
 * A `Chat` contains a list of messages.
 */
export function Chat({ children, className }: { children: ReactNode; className?: string }) {
    return (
        <section className={twMerge('flex flex-col gap-4 w-full', className)}>{children}</section>
    )
}
Chat.displayName = 'Chat'

/**
 * A `ChatMessage` renders a single message.
 */
export function ChatMessage({
    className,
    content,
    id,
    origin,
}: {
    className?: string
    content: string
    id: string
    origin: ChatOrigin
}) {
    return (
        <section
            aria-labelledby={id}
            className={className}
            data-message-id={id}
            role='article'
        >
            <div
                className={messageBubbleStyles({
                    origin,
                })}
            >
                <Markdown>{content}</Markdown>
            </div>
        </section>
    )
}
ChatMessage.displayName = 'ChatMessage'
