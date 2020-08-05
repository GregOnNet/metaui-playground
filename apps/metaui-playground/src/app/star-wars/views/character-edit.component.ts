import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { pluck, switchMap } from 'rxjs/operators';
import { CharacterApi } from '../api/character-api.service';
import { Character } from '../model/character';

@Component({
  selector: 'mp-character-form',
  template: `    
    <h2>Edit Character</h2>

    <ng-container *ngIf="character$ | async as character">
        <m-context [object]="character" operation="edit" layout="Inspect">
            <m-include-component></m-include-component>
        </m-context>
        <button mat-raised-button color="primary">SAVE</button>
    </ng-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [],

})
export class CharacterEditComponent {
  character$ = this.fetchCharacter();

  constructor(
    private route: ActivatedRoute,
    private characterApi: CharacterApi,
    private cd: ChangeDetectorRef
  ) {}

  private fetchCharacter(): Observable<Character | null> {
    return this.route.params.pipe(
      pluck('id'),
      switchMap(id => this.characterApi.fetchById(id)),
    );

    this.cd.detectChanges();

  }
}
