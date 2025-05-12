import { CopyIcon } from 'lucide-react'
import { Prism as SyntaxHighlighter, type SyntaxHighlighterProps } from 'react-syntax-highlighter'

import { Button } from './button'
import { Tooltip, TooltipTrigger } from './tooltip'

/**
 * A syntax-highlighted code block component, built using `react-syntax-highlighter`.
 */
export function CodeBlock({ showLineNumbers = true, ...props }: SyntaxHighlighterProps) {
    return (
        <div className='relative w-full'>
            <SyntaxHighlighter
                {...props}
                PreTag={undefined}
                showLineNumbers={showLineNumbers}
                useInlineStyles={false}
                wrapLines
            >
                {typeof props.children === 'string' ? props.children.trim() : props.children}
            </SyntaxHighlighter>
            <TooltipTrigger>
                <Button
                    aria-label='Copy to clipboard'
                    className='absolute top-0 right-0 !h-6 !w-6 !p-0'
                    isIcon
                    variant='secondary'
                >
                    <CopyIcon />
                </Button>
                <Tooltip placement='left'>Copy to clipboard</Tooltip>
            </TooltipTrigger>
        </div>
    )
}
CodeBlock.displayName = 'Code'
