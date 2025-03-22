import {
    Prism as SyntaxHighlighter,
    type SyntaxHighlighterProps,
} from "react-syntax-highlighter";

/**
 * A syntax-highlighted code block component, built using `react-syntax-highlighter`.
 * This component is styled with Tailwind CSS and supports additional customization
 * through props.
 *
 * [react-syntax-highlighter](https://github.com/react-syntax-highlighter/react-syntax-highlighter)
 *
 * ## Usage
 *
 * ```typescript
 * import { CodeBlock } from "boondoggle.design";

 * <CodeBlock language="javascript">
 * `const greet = (): void => {
 *     console.log("Hello, world!");
 * };
 *
 * greet();`
 * </CodeBlock>
 * ```
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
            {props.children}
        </SyntaxHighlighter>
    );
}
CodeBlock.displayName = "Code";
