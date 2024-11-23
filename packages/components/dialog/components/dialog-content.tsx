import type { ReactNode } from "react";

import { dialogContentCSS } from "../styles/dialog-content.css";

/**
 * Wrapper to render scrollable content within the dialog.
 */
export const DialogContent = ({ children }: { children: ReactNode }) => {
    return <div className={dialogContentCSS}>{children}</div>;
};
