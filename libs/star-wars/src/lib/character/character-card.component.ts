import { Component, Input } from '@angular/core';
import { Character } from './character';

@Component({
  selector: 'mp-character-card',
  template: `
    <mat-card>
      <mat-card-title>
        <mp-lightsaber [backgroundColor]="character.lightsaberColor">
        </mp-lightsaber>
        {{ character.firstName }} {{ character.lastName }}
      </mat-card-title>
      <mat-card-actions align="end">
        <button mat-button [routerLink]="['character', character.id]">
          Details
        </button>
      </mat-card-actions>
    </mat-card>
  `
})
export class CharacterCardComponent {
  @Input() character = Character.empty();
}
