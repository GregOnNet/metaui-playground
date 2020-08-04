import { Component } from '@angular/core';
import { CharacterApi } from './character-api.service';

@Component({
  selector: 'mp-character-card-list',
  template: `
    <mat-card *ngFor="let character of characters$ | async">
      <mat-card-title
        >{{ character.firstName }} {{ character.lastName }}</mat-card-title
      >
      <mat-card-content>{{ character.lightsaberColor }}</mat-card-content>
      <mat-card-actions>
        <button mat-button [routerLink]="['character', character.id]">
          Details
        </button>
      </mat-card-actions>
    </mat-card>
  `,
  styles: []
})
export class CharacterCardListComponent {
  characters$ = this.characterApi.fetchAll();

  constructor(private characterApi: CharacterApi) {}
}
