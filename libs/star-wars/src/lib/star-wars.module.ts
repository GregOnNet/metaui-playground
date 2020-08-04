import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MaterialModule } from '@mp/material';
import { CharacterCardListComponent } from './character/character-card-list.component';
import { CharacterCardComponent } from './character/character-card.component';
import { CharacterDetailComponent } from './character/character-detail.component';
import { CharacterFormComponent } from './character/character-form.component';
import { LightsaberComponent } from './character/lightsaber.component';
import { StarWarsRoutingModule } from './star-wars-routing.module';
import { StarWarsComponent } from './star-wars.component';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MaterialModule,
    StarWarsRoutingModule,
    MatIconModule,
    MatInputModule
  ],
  exports: [StarWarsComponent],
  declarations: [
    CharacterCardListComponent,
    CharacterDetailComponent,
    StarWarsComponent,
    CharacterCardComponent,
    LightsaberComponent,
    CharacterFormComponent
  ],
  providers: []
})
export class StarWarsModule {}
