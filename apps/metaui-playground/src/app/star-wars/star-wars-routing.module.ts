import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { StarWarsComponent } from './star-wars.component';
import { CharacterViewComponent } from './views/character-view.component';

const routes: Route[] = [
  {
    path: '',
    component: StarWarsComponent,
    children: [
      { path: 'character/create', component: CharacterViewComponent },
      { path: 'character/:id', component: CharacterViewComponent },
      { path: 'character/edit/:id', component: CharacterViewComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StarWarsRoutingModule {}
