import { NgModule } from '@angular/core';
import { CharacterCardListComponent } from './character/character-card-list.component';
import { CharacterDetailComponent } from './character/character-detail.component';

@NgModule({
  imports: [],
  exports: [CharacterCardListComponent, CharacterDetailComponent],
  declarations: [CharacterCardListComponent, CharacterDetailComponent],
  providers: [],
})
export class StarWarsModule {}
