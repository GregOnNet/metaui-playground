import { Component, Input } from '@angular/core';
import { Character } from './model/character';

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
        <button
          mat-icon-button
          [routerLink]="['character', 'edit', character.id]"
        >
          <mat-icon>create</mat-icon>
        </button>
        <button mat-icon-button [routerLink]="['character', character.id]">
          <mat-icon>account_circle</mat-icon>
        </button>
      </mat-card-actions>
    </mat-card>
  `
})
export class CharacterCardComponent {
  @Input() character = Character.empty();
}
