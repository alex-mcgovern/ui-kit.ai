import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'

export function CodeInline({
  children,
  language,
}: {
  children: string
  language: string
}) {
  if (!children) return null

  return (
    <SyntaxHighlighter
      codeTagProps={{
        className:
          'px-1 py-0.25 bg-background-raised rounded-sm border border-tint-dark',
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
