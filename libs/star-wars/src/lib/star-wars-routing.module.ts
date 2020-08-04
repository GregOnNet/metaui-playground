import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { CharacterDetailComponent } from './character/character-detail.component';
import { StarWarsComponent } from './star-wars.component';

const routes: Route[] = [
  {
    path: '',
    component: StarWarsComponent,
    children: [{ path: 'character/:id', component: CharacterDetailComponent }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StarWarsRoutingModule {}
