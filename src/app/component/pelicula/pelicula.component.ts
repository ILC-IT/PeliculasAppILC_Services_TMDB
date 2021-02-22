import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { PeliculasService } from "../../services/peliculas.service";

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {
  idPelicula: string = '';
  titulo: string = '';
  pelicula: any = {};
  urlFondo: string = '';
  constructor(private route: ActivatedRoute, private router: Router, private peliculasService: PeliculasService) { }

  ngOnInit() {
    // this.route.snapshot.paramMap.get('id');
    // this.route.snapshot.paramMap.get('title');
    this.route.queryParams.subscribe(params => {
      this.idPelicula = params.id;
      this.titulo = params.titulo;
      this.pelicula = this.peliculasService.getPelicula(this.idPelicula);
    });
    this.urlFondo = "https://image.tmdb.org/t/p/w1920_and_h800_multi_faces" + this.pelicula[0].backdrop_path;
  }
}
