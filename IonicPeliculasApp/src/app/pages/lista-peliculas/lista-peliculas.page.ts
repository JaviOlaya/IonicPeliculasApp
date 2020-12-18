import { ApiPelisService } from './../../services/api-pelis.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { interfazPeliculas } from '../../model/interfazPeliculas.Interface';
@Component({
  selector: 'app-lista-peliculas',
  templateUrl: './lista-peliculas.page.html',
  styleUrls: ['./lista-peliculas.page.scss'],
})
export class ListaPeliculasPage implements OnInit {

  results: Observable<interfazPeliculas>;
  term: '';
  type: '';
  actor: '';
  constructor(private apiPelisService: ApiPelisService) { }

  ngOnInit() {
  }

  searchChanged(): void{
    this.results = this.apiPelisService.searchMovies(this.term, this.type, this.actor);
  }

}
