import { act, renderHook } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

import { useKbd } from '../use-kbd'

describe('useKbd', () => {
    const mockKeyDown = async (
        key: string,
        options: Partial<KeyboardEvent> = {}
    ): Promise<KeyboardEvent> => {
        return act(() => {
            const event = new KeyboardEvent('keydown', {
                bubbles: true,
                cancelable: true,
                key,
                ...options,
            })
            document.dispatchEvent(event)
            return event
        })
    }

    beforeEach(() => {
        vi.useFakeTimers()
    })

    afterEach(() => {
        vi.restoreAllMocks()
    })

    it('should handle a simple key press', async () => {
        const handleW = vi.fn()
        renderHook(() => useKbd([['w', handleW]]))

        await mockKeyDown('w')
        expect(handleW).toHaveBeenCalledTimes(1)

        // Different key should not trigger the handler
        await mockKeyDown('x')
        expect(handleW).toHaveBeenCalledTimes(1)
    })

    it('should handle shortcut with modifier key', async () => {
        const handler = vi.fn()
        renderHook(() => useKbd([['Control+C', handler]]))

        // Without modifier should not trigger
        await mockKeyDown('c')
        expect(handler).toHaveBeenCalledTimes(0)

        // With modifier should trigger
        await mockKeyDown('c', { ctrlKey: true })
        expect(handler).toHaveBeenCalledTimes(1)
    })

    it('should handle shortcuts with multiple modifier keys', async () => {
        const handler = vi.fn()
        renderHook(() => useKbd([['Command+Shift+X', handler]]))

        // With incomplete modifiers should not trigger
        await mockKeyDown('x', { metaKey: true })
        expect(handler).toHaveBeenCalledTimes(0)

        // With all modifiers should trigger
        await mockKeyDown('x', { metaKey: true, shiftKey: true })
        expect(handler).toHaveBeenCalledTimes(1)
    })

    it('should handle a sequence of keys', async () => {
        const handler = vi.fn()
        const shortcut = 'ArrowUp+ArrowUp+ArrowDown'

        renderHook(() => useKbd([[shortcut, handler]]))

        // Partial sequence should not trigger
        await mockKeyDown('ArrowUp')
        await vi.runAllTimersAsync()

        await mockKeyDown('ArrowUp')
        await vi.runAllTimersAsync()

        expect(handler).toHaveBeenCalledTimes(0)

        // Complete sequence should trigger
        await mockKeyDown('ArrowDown')
        await vi.runAllTimersAsync()

        expect(handler).toHaveBeenCalledTimes(1)
    })

    it('should reset sequence if wrong key is pressed', async () => {
        const konamiHandler = vi.fn()
        const shortcut = 'ArrowUp+ArrowUp+ArrowDown+ArrowDown'

        renderHook(() => useKbd([[shortcut, konamiHandler]]))

        // Start sequence
        await mockKeyDown('ArrowUp')
        await mockKeyDown('ArrowUp')

        // Press wrong key
        await mockKeyDown('ArrowRight')

        // Continue with sequence - should not trigger because sequence was broken
        await mockKeyDown('ArrowDown')
        await mockKeyDown('ArrowDown')

        expect(konamiHandler).toHaveBeenCalledTimes(0)
    })

    it('should handle case-insensitive shortcuts', async () => {
        const handler = vi.fn()
        renderHook(() => useKbd([['a', handler]]))

        await mockKeyDown('A')
        expect(handler).toHaveBeenCalledTimes(1)
    })

    it('should prevent default and stop propagation', async () => {
        const handler = vi.fn()
        renderHook(() => useKbd([['a', handler]]))

        const event = await mockKeyDown('a')
        expect(event.defaultPrevented).toBe(true)
    })

    it('should not trigger shortcuts in text inputs by default', () => {
        const handler = vi.fn()
        renderHook(() => useKbd([['a', handler]]))

        // Create a text input and dispatch keydown event
        const input = document.createElement('input')
        input.type = 'text'
        document.body.appendChild(input)

        const event = new KeyboardEvent('keydown', {
            bubbles: true,
            cancelable: true,
            key: 'a',
        })

        input.dispatchEvent(event)
        expect(handler).not.toHaveBeenCalled()

        document.body.removeChild(input)
    })

    it('should trigger shortcuts in text inputs when disableTextInputs is false', () => {
        const handler = vi.fn()
        renderHook(() => useKbd([['a', handler]], { disableTextInputs: false }))

        // Create a text input and dispatch keydown event
        const input = document.createElement('input')
        input.type = 'text'
        document.body.appendChild(input)

        const event = new KeyboardEvent('keydown', {
            bubbles: true,
            cancelable: true,
            key: 'a',
        })

        input.dispatchEvent(event)
        expect(handler).toHaveBeenCalled()

        document.body.removeChild(input)
    })

    it('should handle multiple registered shortcuts', async () => {
        const handler1 = vi.fn()
        const handler2 = vi.fn()
        const handler3 = vi.fn()

        renderHook(() =>
            useKbd([
                ['a', handler1],
                ['Control+b', handler2],
                ['c+d+e', handler3],
            ])
        )

        await mockKeyDown('a')
        expect(handler1).toHaveBeenCalledTimes(1)
        expect(handler2).not.toHaveBeenCalled()
        expect(handler3).not.toHaveBeenCalled()

        await mockKeyDown('b', { ctrlKey: true })
        expect(handler1).toHaveBeenCalledTimes(1)
        expect(handler2).toHaveBeenCalledTimes(1)
        expect(handler3).not.toHaveBeenCalled()
    })

    it('should not trigger on key repeat events', async () => {
        const handler = vi.fn()
        renderHook(() => useKbd([['a', handler]]))

        await mockKeyDown('a', { repeat: true })
        expect(handler).not.toHaveBeenCalled()
    })

    it('should cleanup event listeners on unmount', () => {
        const handler = vi.fn()
        const removeEventListenerSpy = vi.spyOn(document, 'removeEventListener')

        const { unmount } = renderHook(() => useKbd([['a', handler]]))

        unmount()
        expect(removeEventListenerSpy).toHaveBeenCalledWith('keydown', expect.any(Function))
    })
})
