import { Component } from '@angular/core';
import { CharacterApi } from './character-api.service';

@Component({
  selector: 'mp-character-list',
  template: `
    <mp-character-card
      *ngFor="let character of characters$ | async"
      [character]="character"
    >
    </mp-character-card>
  `,
  styles: [
    `
      :host {
        display: grid;
        grid-gap: 1rem;
      }
    `
  ]
})
export class CharacterCardListComponent {
  characters$ = this.characterApi.fetchAll();

  constructor(private characterApi: CharacterApi) {}
}
