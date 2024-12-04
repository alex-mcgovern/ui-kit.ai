import type { RefObject } from "react";

import { createContext } from "react";

export const ComboBoxRefContext =
    createContext<RefObject<HTMLDivElement> | null>(null);
