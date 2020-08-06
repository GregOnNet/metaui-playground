import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { pluck, switchMap } from 'rxjs/operators';
import { CharacterApi } from '../api/character-api.service';
import { Character } from '../model/character';
import { META_RULES, MetaRules } from '@ngx-metaui/rules';
import { LightsaberColor } from '../model/lightsaber-color';

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
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharacterEditComponent {
  character$ = this.fetchCharacter();

  all: LightsaberColor[] = [
      new LightsaberColor('Blue', '#249BCB'),
      new LightsaberColor('Green', '#14A259'),
      new LightsaberColor('Red', '#14A259'),
      new LightsaberColor('Violet', '#82277C'),
      new LightsaberColor('None', '#000000'),

  ];

  constructor(
    private route: ActivatedRoute,
    private characterApi: CharacterApi,
    @Inject(META_RULES) protected meta: MetaRules
  ) {

    this.meta.registerDependency('component', this);
  }

  private fetchCharacter(): Observable<Character | null> {
    return this.route.params.pipe(
      pluck('id'),
      switchMap(id => this.characterApi.fetchById(id))
    );
  }
}
