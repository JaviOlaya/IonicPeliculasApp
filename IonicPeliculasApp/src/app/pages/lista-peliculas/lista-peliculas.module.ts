import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaPeliculasPageRoutingModule } from './lista-peliculas-routing.module';

import { ListaPeliculasPage } from './lista-peliculas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaPeliculasPageRoutingModule
  ],
  declarations: [ListaPeliculasPage]
})
export class ListaPeliculasPageModule {}
