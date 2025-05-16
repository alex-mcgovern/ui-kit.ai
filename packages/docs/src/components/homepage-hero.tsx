'use client'

import { Button, Card, Input, Tag, TextField } from '@ui-kit.ai/components'
import { Chat as ChatStories } from '@ui-kit.ai/storybook'
import {
    ArrowUpIcon,
    ClipboardCopyIcon,
    PaperclipIcon,
    PlusIcon,
    ThumbsDownIcon,
    ThumbsUpIcon,
} from 'lucide-react'
import { type ReactNode, useCallback, useEffect, useRef, useState } from 'react'
import { twMerge } from 'tailwind-merge'

export function HomepageHero() {
    const [parallaxChat, parallaxControls, parallaxTextArea] = useParallaxTilt([0.2, 0.25, 0.2], 25)

    return (
        <div
            className={twMerge(
                'relative w-[360px] h-[180px] user-select-none', // dots overlay
                'after:absolute after:-inset-[75%] after:-z-10',
                'after:bg-[radial-gradient(var(--theme-info-border-dark)_1px,transparent_1px)]',
                'after:[background-size:16px_16px]',
                'after:[mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_30%,transparent_150%)]'
            )}
        >
            <ParallaxTiltContainer
                className='origin-center'
                rotateX={parallaxControls?.[0]}
                rotateY={parallaxControls?.[1]}
            >
                <ChatMessages />
            </ParallaxTiltContainer>
            <ParallaxTiltContainer
                className='origin-bottom-right absolute bottom-[90%] -left-[10%]'
                rotateX={parallaxChat?.[0]}
                rotateY={parallaxChat?.[1]}
            >
                <ChatReactionControls />
            </ParallaxTiltContainer>
            <ParallaxTiltContainer
                className='origin-top-left absolute w-full top-[90%] -right-[50%]'
                rotateX={parallaxTextArea?.[0]}
                rotateY={parallaxTextArea?.[1]}
            >
                <ChatTextArea />
            </ParallaxTiltContainer>
        </div>
    )
}

function ChatMessages() {
    return (
        <Card className='bg-raised/50 w-[360px] h-[180px] shadow-xl'>
            {/* @ts-expect-error - exported stories are loosely typed */}
            <ChatStories.Default />
        </Card>
    )
}

function ChatReactionControls() {
    return (
        <Card className='flex gap-2 p-1 rounded-lg shadow-2xl bg-tint-light/50 backdrop-blur-sm w-min'>
            <Button
                isIcon
                variant='tertiary'
            >
                <ClipboardCopyIcon />
            </Button>
            <Button
                isIcon
                variant='tertiary'
            >
                <ThumbsUpIcon />
            </Button>
            <Button
                isIcon
                variant='tertiary'
            >
                <ThumbsDownIcon />
            </Button>
        </Card>
    )
}

function ChatTextArea() {
    return (
        <Card className='max-w-64 bg-tint-light/50 backdrop-blur-sm w-full shadow-2xl px-3 py-2 rounded-2xl'>
            <TextField
                aria-label='AI chat input'
                isReadOnly
            >
                <Input
                    className='!p-0 mb-2'
                    isBorderless
                    placeholder='Ask anything...'
                />
            </TextField>
            <div className='flex gap-2'>
                <Tag className='bg-raised/20 w-6 px-1.5'>
                    <PlusIcon />
                </Tag>
                <Tag className='bg-raised/20 w-6 px-1.5'>
                    <PaperclipIcon />
                </Tag>
                <Button
                    className='!size-6 ml-auto rounded-full'
                    isIcon
                >
                    <ArrowUpIcon />
                </Button>
            </div>
        </Card>
    )
}

function ParallaxTiltContainer({
    children,
    className,
    rotateX = 0,
    rotateY = 0,
}: {
    children: ReactNode
    className?: string
    rotateX?: number
    rotateY?: number
}) {
    return (
        <div
            className={twMerge('will-change-transform w-full', className)}
            style={{
                transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1, 1, 1)`,
            }}
        >
            {children}
        </div>
    )
}

function useParallaxTilt(factors: number[], sensitivity: number = 20): [number, number][] {
    const mousePositionRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 })
    const rotationsRef = useRef<[number, number][]>(factors.map(() => [0, 0]))
    const [, forceRender] = useState({})

    const handleMouseMove = useCallback(
        (event: MouseEvent) => {
            const windowWidth = window.innerWidth
            const windowHeight = window.innerHeight

            const x = (event.clientX / windowWidth) * 2 - 1
            const y = (event.clientY / windowHeight) * 2 - 1

            mousePositionRef.current = { x, y }

            // Calculate new rotations
            const newRotations = factors.map((factor) => {
                const xRotation = -y * factor * sensitivity
                const yRotation = x * factor * sensitivity

                return [xRotation, yRotation] as [number, number]
            })

            rotationsRef.current = newRotations
            forceRender({})
        },
        [factors, sensitivity]
    )

    // Set up and clean up event listeners
    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove)

        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
        }
    }, [handleMouseMove])

    return rotationsRef.current
}
