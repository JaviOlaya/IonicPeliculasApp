import { ApiPelisService } from './../../services/api-pelis.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { interfazPeliculas } from '../../model/interfazPeliculas.interface';
@Component({
  selector: 'app-lista-peliculas',
  templateUrl: './lista-peliculas.page.html',
  styleUrls: ['./lista-peliculas.page.scss'],
})
export class ListaPeliculasPage implements OnInit {

  results: Observable<interfazPeliculas>;
  term: '';
  type: '';
  constructor(private apiPelisService: ApiPelisService) { }

  ngOnInit() {
  }

  searchChanged(e): void{
    this.results = this.apiPelisService.searchMovies(this.term, this.type);
  }

}
