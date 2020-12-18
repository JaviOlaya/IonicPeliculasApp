import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaPeliculasPage } from './lista-peliculas.page';

const routes: Routes = [
  {
    path: '',
    component: ListaPeliculasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaPeliculasPageRoutingModule {}
