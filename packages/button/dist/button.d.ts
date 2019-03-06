import './button.css';
/**
 * Buttons allow users to take actions, and make choices, with a single tap.
 * Material Design guidelines: Buttons:
 * https://material.io/go/design-buttons
 */
export declare class AuMcwButton {
    disabled: boolean;
    label: string;
    outlined: boolean;
    raised: boolean;
    unelevated: boolean;
    readonly classes: string;
    onclick: (event: MouseEvent) => boolean;
}
