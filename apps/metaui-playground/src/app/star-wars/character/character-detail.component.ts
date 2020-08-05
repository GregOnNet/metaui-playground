import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { pluck, switchMap } from 'rxjs/operators';
import { Character } from './character';
import { CharacterApi } from './character-api.service';

@Component({
  selector: 'mp-character-detail',
  template: `
    <ng-container *ngIf="character$ | async as character">
      <h2>{{ character.firstName }} {{ character.lastName }}</h2>
      <img [src]="character.avatarUrl" [attr.alt]="character.firstName" />
    </ng-container>
  `
})
export class CharacterDetailComponent {
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
