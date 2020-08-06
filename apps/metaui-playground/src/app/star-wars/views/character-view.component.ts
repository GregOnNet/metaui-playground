import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { META_RULES, MetaRules } from '@ngx-metaui/rules';
import { Observable } from 'rxjs';
import { pluck, switchMap } from 'rxjs/operators';
import { MetaUiOperationNotifier } from '../../commons/meta-ui-operation-revealer.service';
import { CharacterApi } from '../api/character-api.service';
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
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharacterViewComponent {
  character$ = this.fetchCharacter();
  operation = this.getActiveOperation();

  all: LightsaberColor[] = [
    new LightsaberColor('Blue', '#249BCB'),
    new LightsaberColor('Green', '#14A259'),
    new LightsaberColor('Red', '#14A259'),
    new LightsaberColor('Violet', '#82277C'),
    new LightsaberColor('None', '#000000')
  ];

  constructor(
    private route: ActivatedRoute,
    private operationRevealer: MetaUiOperationNotifier,
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

  private getActiveOperation() {
    return this.route.snapshot.url.toString().includes('create')
      ? 'create'
      : this.route.snapshot.url.toString().includes('edit')
        ? 'edit'
        : 'view';
  }
}
