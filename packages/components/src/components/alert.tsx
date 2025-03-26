import type { ReactNode } from 'react'

import { InfoIcon, type LucideProps } from 'lucide-react'
import { twMerge } from 'tailwind-merge'
import { tv } from 'tailwind-variants'

import { type ActionNodes, renderActionNodes } from '../types/action-nodes'
import { Description } from './description'

const alertStyles = tv({
  base: [
    'w-full',
    'rounded-xl shadow-xs',
    'px-4 py-2',
    'flex items-center gap-4',
  ],
  defaultVariants: {
    variant: 'default',
  },
  variants: {
    variant: {
      default: 'border border-tint-dark bg-background text-hi-contrast',
      invalid: 'bg-error text-hi-contrast',
      inverted: 'bg-mid-contrast text-hi-contrast',
    },
  },
})

const titleStyles = tv({
  base: 'font-title mb-0 block text-sm font-bold',
})

const iconStyles = tv({
  base: 'size-7 shrink-0 stroke-[1.75px] text-mid-contrast',
})

/**
 * An alert is a message that is displayed to the user. It makes use of the ARIA
 * role "alert" to highlight the importance of the message to assistive
 * technologies.
 */
export function Alert({
  actions,
  className,
  description,
  icon: Icon = InfoIcon,
  title,
  variant,
  ...props
}: {
  actions?: ActionNodes
  className?: string
  description?: ReactNode
  icon?: React.ForwardRefExoticComponent<
    Omit<LucideProps, 'ref'> & React.RefAttributes<SVGSVGElement>
  >
  title: string
  variant: 'default' | 'invalid' | 'inverted'
}) {
  return (
    <div
      {...props}
      className={twMerge(alertStyles({ variant }), className)}
    >
      <Icon
        className={twMerge(
          iconStyles(),
          variant === 'inverted' || variant === 'invalid' ? 'text-tint' : ''
        )}
      />
      <div>
        {/*
         * Note: A heading element should *not* be used here,
         * as it may appear on page before the H1, breaking
         * the semantic flow of headings on the page and
         * messing with a11y and SEO.
         */}
        <span
          className={titleStyles()}
          role='alert'
        >
          {title}
        </span>
        {description != null ? (
          <Description
            className={twMerge(
              '!my-0',
              variant === 'inverted' || variant === 'invalid'
                ? 'text-tint-dark'
                : ''
            )}
          >
            {description}
          </Description>
        ) : null}
      </div>
      {renderActionNodes({
        actions,
        className: 'ml-auto',
        props: {
          // @ts-expect-error - TODO: type-aware action nodes
          isDestructive: variant === 'invalid',
          isInverted: variant === 'inverted' || variant === 'invalid',
        },
      })}
    </div>
  )
}
Alert.displayName = 'Alert'
