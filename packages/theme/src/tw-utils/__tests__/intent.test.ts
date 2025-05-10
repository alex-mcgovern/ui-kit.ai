import { expect, test } from 'vitest'

import { genIntentUtils } from '../intent'

const EXPECTED = `
@utility default {
	--theme-default-bg-accent: var(--theme-default-bg-accent);
	--theme-default-bg-accent-dark: var(--theme-default-bg-accent-dark);
	--theme-default-bg-accent-light: var(--theme-default-bg-accent-light);
	--theme-default-bg-base: var(--theme-default-bg-base);
	--theme-default-bg-raised: var(--theme-default-bg-raised);
	--theme-default-bg-tint: var(--theme-default-bg-tint);
	--theme-default-bg-tint-dark: var(--theme-default-bg-tint-dark);
	--theme-default-bg-tint-light: var(--theme-default-bg-tint-light);
	--theme-default-border-dark: var(--theme-default-border-dark);
	--theme-default-border-light: var(--theme-default-border-light);
	--theme-default-border-mid: var(--theme-default-border-mid);
	--theme-default-text-accent: var(--theme-default-text-accent);
	--theme-default-text-dark: var(--theme-default-text-dark);
	--theme-default-text-light: var(--theme-default-text-light);
	--theme-default-text-mid: var(--theme-default-text-mid);
}
@utility error {
	--theme-default-bg-accent: var(--theme-error-bg-accent);
	--theme-default-bg-accent-dark: var(--theme-error-bg-accent-dark);
	--theme-default-bg-accent-light: var(--theme-error-bg-accent-light);
	--theme-default-bg-base: var(--theme-error-bg-base);
	--theme-default-bg-raised: var(--theme-error-bg-raised);
	--theme-default-bg-tint: var(--theme-error-bg-tint);
	--theme-default-bg-tint-dark: var(--theme-error-bg-tint-dark);
	--theme-default-bg-tint-light: var(--theme-error-bg-tint-light);
	--theme-default-border-dark: var(--theme-error-border-dark);
	--theme-default-border-light: var(--theme-error-border-light);
	--theme-default-border-mid: var(--theme-error-border-mid);
	--theme-default-text-accent: var(--theme-error-text-accent);
	--theme-default-text-dark: var(--theme-error-text-dark);
	--theme-default-text-light: var(--theme-error-text-light);
	--theme-default-text-mid: var(--theme-error-text-mid);
}
@utility info {
	--theme-default-bg-accent: var(--theme-info-bg-accent);
	--theme-default-bg-accent-dark: var(--theme-info-bg-accent-dark);
	--theme-default-bg-accent-light: var(--theme-info-bg-accent-light);
	--theme-default-bg-base: var(--theme-info-bg-base);
	--theme-default-bg-raised: var(--theme-info-bg-raised);
	--theme-default-bg-tint: var(--theme-info-bg-tint);
	--theme-default-bg-tint-dark: var(--theme-info-bg-tint-dark);
	--theme-default-bg-tint-light: var(--theme-info-bg-tint-light);
	--theme-default-border-dark: var(--theme-info-border-dark);
	--theme-default-border-light: var(--theme-info-border-light);
	--theme-default-border-mid: var(--theme-info-border-mid);
	--theme-default-text-accent: var(--theme-info-text-accent);
	--theme-default-text-dark: var(--theme-info-text-dark);
	--theme-default-text-light: var(--theme-info-text-light);
	--theme-default-text-mid: var(--theme-info-text-mid);
}
@utility success {
	--theme-default-bg-accent: var(--theme-success-bg-accent);
	--theme-default-bg-accent-dark: var(--theme-success-bg-accent-dark);
	--theme-default-bg-accent-light: var(--theme-success-bg-accent-light);
	--theme-default-bg-base: var(--theme-success-bg-base);
	--theme-default-bg-raised: var(--theme-success-bg-raised);
	--theme-default-bg-tint: var(--theme-success-bg-tint);
	--theme-default-bg-tint-dark: var(--theme-success-bg-tint-dark);
	--theme-default-bg-tint-light: var(--theme-success-bg-tint-light);
	--theme-default-border-dark: var(--theme-success-border-dark);
	--theme-default-border-light: var(--theme-success-border-light);
	--theme-default-border-mid: var(--theme-success-border-mid);
	--theme-default-text-accent: var(--theme-success-text-accent);
	--theme-default-text-dark: var(--theme-success-text-dark);
	--theme-default-text-light: var(--theme-success-text-light);
	--theme-default-text-mid: var(--theme-success-text-mid);
}
@utility warning {
	--theme-default-bg-accent: var(--theme-warning-bg-accent);
	--theme-default-bg-accent-dark: var(--theme-warning-bg-accent-dark);
	--theme-default-bg-accent-light: var(--theme-warning-bg-accent-light);
	--theme-default-bg-base: var(--theme-warning-bg-base);
	--theme-default-bg-raised: var(--theme-warning-bg-raised);
	--theme-default-bg-tint: var(--theme-warning-bg-tint);
	--theme-default-bg-tint-dark: var(--theme-warning-bg-tint-dark);
	--theme-default-bg-tint-light: var(--theme-warning-bg-tint-light);
	--theme-default-border-dark: var(--theme-warning-border-dark);
	--theme-default-border-light: var(--theme-warning-border-light);
	--theme-default-border-mid: var(--theme-warning-border-mid);
	--theme-default-text-accent: var(--theme-warning-text-accent);
	--theme-default-text-dark: var(--theme-warning-text-dark);
	--theme-default-text-light: var(--theme-warning-text-light);
	--theme-default-text-mid: var(--theme-warning-text-mid);
}
`

test('genIntentUtils', async () => {
    expect(`\n${await genIntentUtils()}\n`).toEqual(EXPECTED)
})
