import { useLayoutEffect, useRef, useState } from "react";

export function useSyncComboBoxWidth() {
    const groupRef = useRef<HTMLDivElement>(null);
    const [groupWidth, setGroupWidth] = useState<null | number>(null);

    useLayoutEffect(() => {
        const targetElement = groupRef.current;
        if (!targetElement) return;

        const updateWidth = () => {
            setGroupWidth(targetElement.offsetWidth);
        };

        updateWidth();

        const observer = new MutationObserver(() => {
            updateWidth();
        });

        observer.observe(targetElement, {
            childList: true,
            subtree: true,
        });

        return () => observer.disconnect();
    }, []);

    return { groupRef, groupWidth };
}
