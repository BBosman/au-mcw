import { bindable, computedFrom, containerless } from 'aurelia-framework';
import './button.css';

/**
 * Buttons allow users to take actions, and make choices, with a single tap.
 * Material Design guidelines: Buttons:
 * https://material.io/go/design-buttons
 */
@containerless()
export class AuMcwButton {
  @bindable public disabled: boolean = false;
  @bindable public label: string = '';
  @bindable public outlined: boolean = false;
  @bindable public raised: boolean = false;
  @bindable public unelevated: boolean = false;

  // @internal
  public button!: HTMLButtonElement;

  @computedFrom('outlined', 'raised', 'unelevated')
  // @internal
  public get classes(): string {
    const classes: string[] = [];

    if (this.raised) { classes.push('outlined'); }
    if (this.raised) { classes.push('raised'); }
    if (this.unelevated) { classes.push('unelevated'); }

    return classes.map((item: string) => `mdc-button--${item}`).join(' ');
  }

  // Add a default click handler, in case one isn't specified.
  @bindable public onclick: (event: MouseEvent) => boolean = (event: MouseEvent) => {
    return this.button.dispatchEvent(event);
  }
}
