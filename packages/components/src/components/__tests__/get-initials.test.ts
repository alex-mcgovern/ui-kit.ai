import { describe, expect, it } from 'vitest'

import { getInitials } from '../avatar'

describe('getInitials', () => {
    it('single word name', () => {
        expect(getInitials('Foo')).toBe('F')
    })
    it('two word name', () => {
        expect(getInitials('Foo Bar')).toBe('FB')
    })
    it('three word name', () => {
        expect(getInitials('Foo Bar')).toBe('FB')
    })
    it('undefined', () => {
        expect(getInitials(undefined)).toBe('?')
    })
    it('null', () => {
        // @ts-expect-error test case
        expect(getInitials(null)).toBe('?')
    })
})
