import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MaterialModule } from '@mp/material';
import { CharacterCardListComponent } from './character/character-card-list.component';
import { CharacterDetailComponent } from './character/character-detail.component';
import { StarWarsRoutingModule } from './star-wars-routing.module';
import { StarWarsComponent } from './star-wars.component';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MaterialModule,
    StarWarsRoutingModule
  ],
  exports: [StarWarsComponent],
  declarations: [
    CharacterCardListComponent,
    CharacterDetailComponent,
    StarWarsComponent
  ],
  providers: []
})
export class StarWarsModule {}
