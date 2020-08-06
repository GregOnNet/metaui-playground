import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { pluck, switchMap } from 'rxjs/operators';
import { CharacterApi } from '../api/character-api.service';
import { Character } from '../model/character';

@Component({
  selector: 'mp-character-form',
  template: `
    <h2>Create</h2>
    <m-context [object]="character" operation="create" layout="Inspect">
        <m-include-component></m-include-component>
    </m-context>
    <button mat-raised-button color="primary">SAVE</button>
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
export class CharacterCreateComponent {
  character = Character.empty();

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
