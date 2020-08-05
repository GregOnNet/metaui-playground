import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MaterialModule } from '../commons/material.module';
import { CharacterCardListComponent } from './views/character-card-list.component';
import { StarWarsRoutingModule } from './star-wars-routing.module';
import { StarWarsComponent } from './star-wars.component';
import { CharacterViewComponent } from './views/character-view.component';
import { CharacterEditComponent } from './views/character-edit.component';
import { CharacterCreateComponent } from './views/character-create.component';
import { CharacterCardComponent } from './character-card.component';
import { LightsaberComponent } from './lightsaber.component';
import { MetaUIRulesModule } from '@ngx-metaui/rules';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MaterialModule,
    StarWarsRoutingModule,
    MatIconModule,
    MatInputModule,
    MetaUIRulesModule
  ],
  exports: [StarWarsComponent],
  declarations: [
    CharacterCardListComponent,
    CharacterViewComponent,
    CharacterEditComponent,
    CharacterCreateComponent,
    StarWarsComponent,
    CharacterCardComponent,
    LightsaberComponent
  ],
  providers: []
})
export class StarWarsModule {
}
