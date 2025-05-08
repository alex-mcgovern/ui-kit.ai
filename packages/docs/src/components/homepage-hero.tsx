'use client'

import { Button, Card, Input, Tag, TextArea, TextField } from '@ui-kit.ai/components'
import { Chat as ChatStories } from '@ui-kit.ai/metadata'
import {
    ArrowUpIcon,
    ClipboardCopyIcon,
    PaperclipIcon,
    PlusIcon,
    ThumbsDownIcon,
    ThumbsUpIcon,
} from 'lucide-react'
import { useCallback, useEffect, useRef, useState } from 'react'

export const useParallaxTilt = (
    factors: number[],
    sensitivity: number = 20
): [number, number][] => {
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

export function HomepageHero() {
    const [[rotX1, rotY1], [rotX2, rotY2], [rotX3, rotY3]] = useParallaxTilt([0.05, 0.1, 0.05], 100)

    return (
        <div className='relative w-[400px] h-[180px]'>
            <div
                className='w-full absolute origin-center bottom-[90%] left-[5%]'
                style={{
                    transform: `perspective(1000px) rotateX(${rotX1}deg) rotateY(${rotY1}deg) scale3d(1, 1, 1)`,
                    transformOrigin: '100% 100%',
                    // eslint-disable-next-line sonarjs/no-duplicate-string
                    transition: '400ms cubic-bezier(0.03, 0.98, 0.52, 0.99)',
                    willChange: 'transform',
                }}
            >
                <ChatReactionControls />
            </div>
            <div
                className='w-full flex items-center justify-center'
                style={{
                    transform: `perspective(1000px) rotateX(${rotX2}deg) rotateY(${rotY2}deg) scale3d(1, 1, 1)`,
                    transformOrigin: '50% 50%',
                    transition: '400ms cubic-bezier(0.03, 0.98, 0.52, 0.99)',
                    willChange: 'transform',
                }}
            >
                <Card className='max-w-64 bg-tint/50 w-[400px] h-[180px] shadow-2xl'>
                    <ChatStories.Default />
                </Card>
            </div>
            <div
                className='w-full absolute origin-center top-[90%] -right-[50%]'
                style={{
                    transform: `perspective(1000px) rotateX(${rotX3}deg) rotateY(${rotY3}deg) scale3d(1, 1, 1)`,
                    transformOrigin: '0% 0%',
                    transition: '400ms cubic-bezier(0.03, 0.98, 0.52, 0.99)',
                    willChange: 'transform',
                }}
            >
                <ChatTextArea />
            </div>
        </div>
    )
}

function ChatReactionControls() {
    return (
        <Card className='flex gap-2 p-1 rounded-lg bg-raised/10 backdrop-blur-md w-min'>
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
        <Card className='max-w-64 bg-raised/10 backdrop-blur-md w-full shadow-2xl px-3 py-2 rounded-2xl'>
            <TextField
                aria-label='AI chat input'
                isReadOnly
            >
                <Input
                    className='!p-0'
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
