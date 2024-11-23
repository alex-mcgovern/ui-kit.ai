import type { ReactNode } from "react";

import { dialogFooterCSS } from "../styles/dialog-footer.css";

/**
 * Wrapper to pin content to the bottom of the dialog.
 */
export const DialogFooter = ({ children }: { children: ReactNode }) => {
    return <footer className={dialogFooterCSS}>{children}</footer>;
};
