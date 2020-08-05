import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { CharacterDetailComponent } from './character/character-detail.component';
import { CharacterFormComponent } from './character/character-form.component';
import { StarWarsComponent } from './star-wars.component';

const routes: Route[] = [
  {
    path: '',
    component: StarWarsComponent,
    children: [
      { path: 'character/create', component: CharacterFormComponent },
      { path: 'character/:id', component: CharacterDetailComponent },
      { path: 'character/edit/:id', component: CharacterFormComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StarWarsRoutingModule {}
