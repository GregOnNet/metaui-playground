import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'mp-lightsaber',
  template: ``,
  styles: [
    `
      :host {
        display: inline-block;
        height: 1rem;
        width: 1rem;
      }
    `
  ]
})
export class LightsaberComponent {
  @HostBinding(`style.background-color`) styleBackgroundColor = '#000000';

  @Input() set backgroundColor(code: string) {
    this.styleBackgroundColor = code;
  }
}
