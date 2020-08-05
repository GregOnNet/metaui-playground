import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

const routes: Route[] = [
  { path: '', redirectTo: 'star-wars', pathMatch: 'full' },
  {
    path: 'star-wars',
    loadChildren: () => import('./star-wars/star-wars.module').then(m => m.StarWarsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
