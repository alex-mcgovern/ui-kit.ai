import { Prism as SyntaxHighlighter, type SyntaxHighlighterProps } from 'react-syntax-highlighter'

/**
 * A syntax-highlighted code block component, built using `react-syntax-highlighter`.
 * This component is styled with Tailwind CSS and supports additional customization
 * through props.
 */
export function CodeBlock(props: SyntaxHighlighterProps) {
    return (
        <SyntaxHighlighter
            {...props}
            PreTag={undefined}
            showLineNumbers
            useInlineStyles={false}
            wrapLines
        >
            {typeof props.children === 'string' ? props.children.trim() : props.children}
        </SyntaxHighlighter>
    )
}
CodeBlock.displayName = 'Code'
