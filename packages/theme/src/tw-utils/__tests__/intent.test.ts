import { expect, test } from 'vitest'

import { genIntentUtils } from '../intent'

const EXPECTED = `
@utility default {
	--theme-default-bg-base: var(--theme-default-bg-base);
	--theme-default-bg-base-raised: var(--theme-default-bg-base-raised);
	--theme-default-bg-primary: var(--theme-default-bg-primary);
	--theme-default-bg-primary-hover: var(--theme-default-bg-primary-hover);
	--theme-default-bg-tint: var(--theme-default-bg-tint);
	--theme-default-bg-tint-hover: var(--theme-default-bg-tint-hover);
	--theme-default-border-default: var(--theme-default-border-default);
	--theme-default-border-field: var(--theme-default-border-field);
	--theme-default-border-field-hover: var(--theme-default-border-field-hover);
	--theme-default-text-accent: var(--theme-default-text-accent);
	--theme-default-text-hi-contrast: var(--theme-default-text-hi-contrast);
	--theme-default-text-lo-contrast: var(--theme-default-text-lo-contrast);
	--theme-default-text-placeholder: var(--theme-default-text-placeholder);
}
@utility error {
	--theme-default-bg-base: var(--theme-error-bg-base);
	--theme-default-bg-base-raised: var(--theme-error-bg-base-raised);
	--theme-default-bg-primary: var(--theme-error-bg-primary);
	--theme-default-bg-primary-hover: var(--theme-error-bg-primary-hover);
	--theme-default-bg-tint: var(--theme-error-bg-tint);
	--theme-default-bg-tint-hover: var(--theme-error-bg-tint-hover);
	--theme-default-border-default: var(--theme-error-border-default);
	--theme-default-border-field: var(--theme-error-border-field);
	--theme-default-border-field-hover: var(--theme-error-border-field-hover);
	--theme-default-text-accent: var(--theme-error-text-accent);
	--theme-default-text-hi-contrast: var(--theme-error-text-hi-contrast);
	--theme-default-text-lo-contrast: var(--theme-error-text-lo-contrast);
	--theme-default-text-placeholder: var(--theme-error-text-placeholder);
}
@utility info {
	--theme-default-bg-base: var(--theme-info-bg-base);
	--theme-default-bg-base-raised: var(--theme-info-bg-base-raised);
	--theme-default-bg-primary: var(--theme-info-bg-primary);
	--theme-default-bg-primary-hover: var(--theme-info-bg-primary-hover);
	--theme-default-bg-tint: var(--theme-info-bg-tint);
	--theme-default-bg-tint-hover: var(--theme-info-bg-tint-hover);
	--theme-default-border-default: var(--theme-info-border-default);
	--theme-default-border-field: var(--theme-info-border-field);
	--theme-default-border-field-hover: var(--theme-info-border-field-hover);
	--theme-default-text-accent: var(--theme-info-text-accent);
	--theme-default-text-hi-contrast: var(--theme-info-text-hi-contrast);
	--theme-default-text-lo-contrast: var(--theme-info-text-lo-contrast);
	--theme-default-text-placeholder: var(--theme-info-text-placeholder);
}
@utility success {
	--theme-default-bg-base: var(--theme-success-bg-base);
	--theme-default-bg-base-raised: var(--theme-success-bg-base-raised);
	--theme-default-bg-primary: var(--theme-success-bg-primary);
	--theme-default-bg-primary-hover: var(--theme-success-bg-primary-hover);
	--theme-default-bg-tint: var(--theme-success-bg-tint);
	--theme-default-bg-tint-hover: var(--theme-success-bg-tint-hover);
	--theme-default-border-default: var(--theme-success-border-default);
	--theme-default-border-field: var(--theme-success-border-field);
	--theme-default-border-field-hover: var(--theme-success-border-field-hover);
	--theme-default-text-accent: var(--theme-success-text-accent);
	--theme-default-text-hi-contrast: var(--theme-success-text-hi-contrast);
	--theme-default-text-lo-contrast: var(--theme-success-text-lo-contrast);
	--theme-default-text-placeholder: var(--theme-success-text-placeholder);
}
@utility warning {
	--theme-default-bg-base: var(--theme-warning-bg-base);
	--theme-default-bg-base-raised: var(--theme-warning-bg-base-raised);
	--theme-default-bg-primary: var(--theme-warning-bg-primary);
	--theme-default-bg-primary-hover: var(--theme-warning-bg-primary-hover);
	--theme-default-bg-tint: var(--theme-warning-bg-tint);
	--theme-default-bg-tint-hover: var(--theme-warning-bg-tint-hover);
	--theme-default-border-default: var(--theme-warning-border-default);
	--theme-default-border-field: var(--theme-warning-border-field);
	--theme-default-border-field-hover: var(--theme-warning-border-field-hover);
	--theme-default-text-accent: var(--theme-warning-text-accent);
	--theme-default-text-hi-contrast: var(--theme-warning-text-hi-contrast);
	--theme-default-text-lo-contrast: var(--theme-warning-text-lo-contrast);
	--theme-default-text-placeholder: var(--theme-warning-text-placeholder);
}
`

test('genIntentUtils', async () => {
    expect(`\n${await genIntentUtils()}\n`).toEqual(EXPECTED)
})
