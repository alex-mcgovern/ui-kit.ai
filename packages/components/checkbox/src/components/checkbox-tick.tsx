import { checkboxTickStyle } from "../styles/checkbox-tick.css";

export function CheckboxTick() {
    return (
        <svg
            aria-hidden="true"
            className={checkboxTickStyle}
            viewBox="0 0 18 18"
        >
            <polyline points="1 9 7 14 15 4" />
        </svg>
    );
}
