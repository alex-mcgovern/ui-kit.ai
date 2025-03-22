import type { Element } from "hast";
import type { JSX } from "react";

import ReactMarkdown, {
    type Components as ReactMarkdownComponents,
} from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import remarkGfm from "remark-gfm";
import { twMerge } from "tailwind-merge";

import { Card, CardBody } from "./card";
import { CodeBlock } from "./code-block";
import { Heading } from "./heading";

interface Props {
    children: string;
    isInverted?: boolean;
}

const CodeInline = ({
    children,
    language,
}: {
    children: string;
    language: string;
}) => {
    if (!children) return null;

    return (
        <SyntaxHighlighter
            codeTagProps={{
                className:
                    "px-1 py-0.5 bg-gray-200 rounded-sm border border-gray-400",
                style: {
                    whiteSpace: "unset",
                },
            }}
            data-testid="syntax-highlighter-inline"
            language={language}
            PreTag="span"
            useInlineStyles={false}
            wrapLines={false}
        >
            {String(children).replace(/\n$/, "")}
        </SyntaxHighlighter>
    );
};
CodeInline.displayName = "CodeInline";

function MarkdownCode({
    children,
    className = "",
    node,
}: JSX.IntrinsicElements["code"] & { node?: Element | undefined }) {
    if (
        node?.position == null ||
        children == null ||
        typeof children !== "string"
    ) {
        console.error("Could not parse code node", node);
        return <>{children}</>;
    }

    const language: string =
        /language-(\w+)/.exec(className)?.[1] ?? "plaintext";

    if (node.position.start.line === node.position.end.line) {
        return <CodeInline language={language}>{children}</CodeInline>;
    }

    return (
        <Card className="my-8">
            <CardBody>
                <CodeBlock className={className} language={language}>
                    {children}
                </CodeBlock>
            </CardBody>
        </Card>
    );
}
MarkdownCode.displayName = "MarkdownCode";

const COMPONENTS = {
    a({ children, ...props }) {
        return (
            <a
                className="text-brand-600 underline hover:text-brand-800"
                target="_blank"
                {...props}
            >
                {children}
            </a>
        );
    },
    code: MarkdownCode,
    h1: (props) => (
        <Heading
            {...props}
            className={twMerge(props.className, "my-2")}
            level={1}
        />
    ),
    h2: (props) => (
        <Heading
            {...props}
            className={twMerge(props.className, "my-2")}
            level={2}
        />
    ),
    h3: (props) => (
        <Heading
            {...props}
            className={twMerge(props.className, "my-2")}
            level={3}
        />
    ),
    h4: (props) => (
        <Heading
            {...props}
            className={twMerge(props.className, "my-2")}
            level={4}
        />
    ),
    h5: (props) => (
        <Heading
            {...props}
            className={twMerge(props.className, "my-2")}
            level={5}
        />
    ),
    h6: (props) => (
        <Heading
            {...props}
            className={twMerge(props.className, "my-2")}
            level={6}
        />
    ),
    img({ alt, src }) {
        return <img alt={alt} className="h-auto max-w-full" src={src} />;
    },
    pre: ({ children }) => children,
} satisfies ReactMarkdownComponents;

export function Markdown({
    children,
    // isInverted = false
}: Props) {
    return (
        <ReactMarkdown
            // className={markdownStyles({ isInverted })}
            components={COMPONENTS}
            remarkPlugins={[remarkGfm]}
        >
            {children}
        </ReactMarkdown>
    );
}
Markdown.displayName = "Markdown";
