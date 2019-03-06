import './ripple.css';
/**
 * Ink Ripple effect for web element interactions.
 * Material Design guidelines: Ripple:
 * https://material.io/design/interaction/states.html
 * https://material.io/design/motion/understanding-motion.html
 */
export declare class AuMcwRipple {
    private readonly element;
    constructor(element: Element);
    attached(): void;
}
