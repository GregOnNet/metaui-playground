import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character, CharacterApi } from '@mp/star-wars';
import { Observable } from 'rxjs';
import { pluck, switchMap } from 'rxjs/operators';

@Component({
  selector: 'mp-character-form',
  template: `
    <h2>Create or Edit</h2>
    <form class="one-column-form">
      <mat-form-field appearance="outline">
        <mat-label>First Name</mat-label>
        <input matInput placeholder="Placeholder" />
      </mat-form-field>
      <mat-form-field appearance="outline">
        <mat-label>Last Name</mat-label>
        <input matInput placeholder="Placeholder" />
      </mat-form-field>
      <mat-form-field appearance="outline">
        <mat-label>Light Saber Color</mat-label>
        <input matInput placeholder="Placeholder" />
      </mat-form-field>

      <button mat-raised-button color="primary">SAVE</button>
    </form>
  `,
  styles: [
    `
      .one-column-form {
        display: grid;
        grid-gap: 0.1rem;
      }
    `
  ]
})
export class CharacterFormComponent {
  character$ = this.fetchCharacter();

  constructor(
    private route: ActivatedRoute,
    private characterApi: CharacterApi
  ) {}

  private fetchCharacter(): Observable<Character | null> {
    return this.route.params.pipe(
      pluck('id'),
      switchMap(id => this.characterApi.fetchById(id))
    );
  }
}
