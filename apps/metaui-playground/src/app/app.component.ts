import { Component } from '@angular/core';

@Component({
  selector: 'metaui-playground-root',
  template: `
    <mp-two-column-layout>
      <mp-character-card-list left></mp-character-card-list>
      <mp-character-detail right></mp-character-detail>
    </mp-two-column-layout>
  `,
})
export class AppComponent {}
