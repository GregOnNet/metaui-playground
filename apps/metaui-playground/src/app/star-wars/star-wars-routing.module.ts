import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { StarWarsComponent } from './star-wars.component';
import { CharacterCreateComponent } from './views/character-create.component';
import { CharacterViewComponent } from './views/character-view.component';
import { CharacterEditComponent } from './views/character-edit.component';

const routes: Route[] = [
  {
    path: '',
    component: StarWarsComponent,
    children: [
      { path: 'character/create', component: CharacterCreateComponent },
      { path: 'character/:id', component: CharacterViewComponent },
      { path: 'character/edit/:id', component: CharacterEditComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StarWarsRoutingModule {
}
