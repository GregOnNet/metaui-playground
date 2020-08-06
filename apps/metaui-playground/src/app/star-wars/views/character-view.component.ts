import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { pluck, switchMap } from 'rxjs/operators';
import { MetaUiOperationNotifier } from '../../commons/meta-ui-operation-revealer.service';
import { CharacterApi } from '../api/character-api.service';
import { Character } from '../model/character';

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

  constructor(
    private route: ActivatedRoute,
    private operationRevealer: MetaUiOperationNotifier,
    private characterApi: CharacterApi
  ) {}

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
