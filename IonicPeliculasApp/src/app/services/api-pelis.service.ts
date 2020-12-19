import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { interfazPeliculas } from '../model/interfazPeliculas.interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApiPelisService {

  private  url: string = '';
  private apiKey: string = '660cbf6c';

  constructor(private http: HttpClient) { }
  

  searchMovies(title: string, type: string) {
    this.url = `https://www.omdbapi.com/?s=${encodeURI(title)}&type=${type}&apikey=${this.apiKey}`;
    return this.http.get<interfazPeliculas>(this.url).pipe(map(results => results['Search']));
  }
  getDetails(id: string){
    return this.http.get<interfazPeliculas>(`https://www.omdbapi.com/?i=${id}&plot=full&apikey=${this.apiKey}`);
  }
}
