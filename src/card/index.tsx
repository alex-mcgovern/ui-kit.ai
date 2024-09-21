import type { ReactNode } from "react";

import { typography } from "@boondoggle.design/css-variants";

import { Box } from "../box";
import { cardCSS, headerCSS } from "./styles.css";

function CardActionsWrapper({
    actions,
}: {
    actions?: [ReactNode?, ReactNode?] | ReactNode;
}) {
    if (!actions) {
        return null;
    }

    return (
        <Box
            alignItems="center"
            display="flex"
            gap="space_2"
            marginLeft="auto"
        >
            {actions}
        </Box>
    );
}

export type CardProps = {
    /**
     * Action shown on the right-hand side of a card.
     */
    actions?: [ReactNode?, ReactNode?] | ReactNode;

    /**
     * The components to render in the card
     */
    children: ReactNode;

    /**
     * The description of the card
     */
    description?: string;

    /**
     * Whether the card has padding or not
     */
    hasPadding?: boolean;

    /**
     * The header of the card
     */
    header?: ReactNode;

    /**
     * The title of the card
     */
    title?: ReactNode;
};

/**
 * The card component is used to group related content together.
 */
export function Card({
    actions,
    children,
    description,
    hasPadding = true,
    header,
    title,
}: CardProps) {
    return (
        <>
            {header && <header className={headerCSS}>{header}</header>}
            <section className={cardCSS({ hasHeader: !!header, hasPadding })}>
                {(title || actions) && (
                    <Box
                        alignItems="start"
                        as="header"
                        display="flex"
                        flexWrap="wrap"
                        gap="space_4"
                        marginBottom="space_3"
                    >
                        {(title || description) && (
                            <Box>
                                {title && (
                                    <Box
                                        as="h3"
                                        className={typography.body_lg}
                                        marginBottom="space_1"
                                    >
                                        {title}
                                    </Box>
                                )}
                                {description && (
                                    <Box
                                        as="p"
                                        color="text_low_contrast"
                                    >
                                        {description}
                                    </Box>
                                )}
                            </Box>
                        )}

                        {actions && <CardActionsWrapper actions={actions} />}
                    </Box>
                )}

                {children}
            </section>
        </>
    );
}
