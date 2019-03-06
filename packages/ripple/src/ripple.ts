import { MDCRipple } from '@material/ripple';
import { autoinject, customAttribute } from 'aurelia-framework';
import './ripple.css';

/**
 * Ink Ripple effect for web element interactions.
 * Material Design guidelines: Ripple:
 * https://material.io/design/interaction/states.html
 * https://material.io/design/motion/understanding-motion.html
 */
@autoinject()
@customAttribute('au-mcw-ripple')
export class AuMcwRipple {
  private readonly element: Element;

  public constructor(element: Element) {
    this.element = element;
  }

  public attached(): void {
    MDCRipple.attachTo(this.element);
  }
}
