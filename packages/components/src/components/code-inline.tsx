import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { twMerge } from 'tailwind-merge'

/**
 * A syntax-highlighted inline code component, built using react-syntax-highlighter.
 */
export function CodeInline({
    children,
    className,
    language,
}: {
    children: string
    className?: string
    language: string
}) {
    if (!children) return null

    return (
        <SyntaxHighlighter
            codeTagProps={{
                className: twMerge(
                    'bg-tint-hover border-default text-hi-contrast rounded-sm border px-1 py-0.25',
                    className
                ),
                style: {
                    whiteSpace: 'unset',
                },
            }}
            data-testid='syntax-highlighter-inline'
            language={language}
            PreTag='span'
            useInlineStyles={false}
            wrapLines={false}
        >
            {String(children).replace(/\n$/, '')}
        </SyntaxHighlighter>
    )
}
CodeInline.displayName = 'CodeInline'
