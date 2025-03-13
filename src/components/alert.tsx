import { InfoIcon, type LucideProps } from "lucide-react";
import type { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { tv } from "tailwind-variants";
import {
    renderActionNodes,
    type ActionNodes,
} from "../types/action-nodes";
import { Description } from "./description";

const alertStyles = tv({
    base: [
        "w-full",
        "rounded-xl shadow-sm",
        "px-4 py-2",
        "flex items-center gap-4",
    ],
    defaultVariants: {
        variant: "default",
    },
    variants: {
        variant: {
            inverted: "bg-muted-800 text-white",
            default:
                "border-muted-200 border bg-base text-primary",
            invalid: "bg-red-700 text-white",
        },
    },
});

const titleStyles = tv({
    base: "font-title mb-0 block text-sm font-bold",
});

const iconStyles = tv({
    base: "size-7 shrink-0 stroke-[1.75px] text-secondary",
});

/**
 * An alert is a message that is displayed to the user. It makes use of the ARIA
 * role "alert" to highlight the importance of the message to assistive
 * technologies.
 *
 * [source code](https://github.com/alex-mcgovern/boondoggle/tree/main/src/components/checkbox)
 * [mdn web docs](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/alert_role)
 *
 * ## Usage
 * ```tsx
 * import { Alert } from "boondoggle"
 * ```
 * ```tsx
 * <Alert
 *     {...args}
 *     title="Account verification required"
 *     description="Please verify your email so we can make sure your account is secure. A link has been sent to foo@bar.com."
 *     actions={[
 *         <Button key="verify" variant="secondary">
 *             Dismiss
 *         </Button>,
 *         <Button key="resend" variant="primary">
 *             Resend email
 *         </Button>,
 *     ]}
 * />
 * ```
 */
export function Alert({
    description,
    className,
    title,
    variant,
    actions,
    icon: Icon = InfoIcon,
    ...props
}: {
    description?: ReactNode;
    className?: string;
    actions?: ActionNodes;
    title: string;
    variant: "invalid" | "default" | "inverted";
    icon?: React.ForwardRefExoticComponent<
        Omit<LucideProps, "ref"> &
            React.RefAttributes<SVGSVGElement>
    >;
}) {
    return (
        <div
            {...props}
            className={twMerge(
                alertStyles({ variant }),
                className,
            )}
        >
            <Icon
                className={twMerge(
                    iconStyles(),
                    variant === "inverted" ||
                        variant === "invalid"
                        ? "text-muted-100"
                        : "",
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
                    role="alert"
                    className={titleStyles()}
                >
                    {title}
                </span>
                {description ? (
                    <Description
                        className={twMerge(
                            "!my-0",
                            variant === "inverted" ||
                                variant === "invalid"
                                ? "text-muted-300"
                                : "",
                        )}
                    >
                        {description}
                    </Description>
                ) : null}
            </div>
            {renderActionNodes({
                actions,
                props: {
                    isInverted:
                        variant === "inverted" ||
                        variant === "invalid",
                    isDestructive: variant === "invalid",
                },
                className: "ml-auto",
            })}
        </div>
    );
}
Alert.displayName = "Alert";
