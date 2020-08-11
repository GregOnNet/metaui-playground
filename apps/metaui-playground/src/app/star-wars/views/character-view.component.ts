import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MetaRules, META_RULES } from '@ngx-metaui/rules';
import { Observable } from 'rxjs';
import { pluck, switchMap, tap } from 'rxjs/operators';
import { MetaUiOperationNotifier } from '../../commons/meta-ui-operation-revealer.service';
import { CharacterApi } from '../api/character-api.service';
import { LightsaberColorPalette } from '../api/lightsaber-color-palette.service';
import { Character } from '../model/character';
import { LightsaberColor } from '../model/lightsaber-color';

@Component({
  selector: 'mp-character-detail',
  template: `
    <m-context
      [object]="character$ | async"
      [operation]="operation"
      layout="Inspect"
    >
      <m-include-component></m-include-component>
    </m-context>

    <div class="form-container">
      <button
        *ngIf="operation !== 'view'"
        mat-raised-button
        (click)="save()"
        color="primary"
      >
        SAVE
      </button>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharacterViewComponent {
  character: Character | null = null;
  character$: Observable<Character | null>;

  operation = this.operationRevealer.getActiveOperation(this.route);

  lightsaberColors: LightsaberColor[] = this.lightsaberColorPalette.all;

  constructor(
    private route: ActivatedRoute,
    private operationRevealer: MetaUiOperationNotifier,
    private characterApi: CharacterApi,
    private lightsaberColorPalette: LightsaberColorPalette,
    @Inject(META_RULES) protected meta: MetaRules
  ) {
    this.meta.registerDependency('component', this);

    this.character$ = this.fetchCharacter().pipe(
      tap(character => (this.character = character))
    );
  }

  private fetchCharacter(): Observable<Character | null> {
    return this.route.params.pipe(
      pluck('id'),
      switchMap(id => this.characterApi.fetchById(id))
    );
  }

  save() {
    this.characterApi.save(this.character).subscribe();
  }
}
