import type { SVGProps } from "react";

import { Loader2 } from "lucide-react";
import { twMerge } from "tailwind-merge";

/**
 * A loader icon to indicate that content is loading.
 */
export function Loader({ className, ...rest }: SVGProps<SVGSVGElement>) {
    return <Loader2 {...rest} className={twMerge("animate-spin", className)} />;
}
Loader.displayName = "Loader";
