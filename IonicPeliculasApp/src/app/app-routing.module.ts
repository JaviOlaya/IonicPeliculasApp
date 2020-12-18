import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'lista-peliculas',
    loadChildren: () => import('./pages/lista-peliculas/lista-peliculas.module').then( m => m.ListaPeliculasPageModule)
  },
  {
    path: 'detalle-pelicula',
    loadChildren: () => import('./pages/detalle-pelicula/detalle-pelicula.module').then( m => m.DetallePeliculaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
