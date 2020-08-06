import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { pluck, switchMap } from 'rxjs/operators';
import { CharacterApi } from '../api/character-api.service';
import { Character } from '../model/character';

@Component({
  selector: 'mp-character-detail',
  template: `
    <ng-container *ngIf="character$ | async as character">
        <m-context [object]="character" operation="view" layout="Inspect">
            <m-include-component></m-include-component>
        </m-context>
    </ng-container>
  `
})
export class CharacterViewComponent {
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
