import { Component, OnInit } from '@angular/core';
import { ApiPelisService } from '../../services/api-pelis.service';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-detalle-pelicula',
  templateUrl: './detalle-pelicula.page.html',
  styleUrls: ['./detalle-pelicula.page.scss'],
})
export class DetallePeliculaPage implements OnInit {

  content: object = null;

  constructor( private apiPeliService: ApiPelisService , private activatedRoute: ActivatedRoute ) { }

  ngOnInit() {

    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.apiPeliService.getDetails(id).subscribe(result => this.content = result);
  }

}
