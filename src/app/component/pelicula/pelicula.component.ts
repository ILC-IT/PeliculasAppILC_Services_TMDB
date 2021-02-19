import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import peliculas from '../../../assets/movies.json';

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
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    // this.route.snapshot.paramMap.get('id');
    // this.route.snapshot.paramMap.get('title');
    this.route.queryParams.subscribe(params => {
      //console.log(params);
      this.idPelicula = params.id;
      this.titulo = params.titulo;
      this.pelicula = peliculas.filter((res) => {
        let idPeliculaNum = +this.idPelicula; //Convertimos string a numero
        if (res.id === idPeliculaNum){
          return res;
        }
      });
    });
    this.urlFondo = "https://image.tmdb.org/t/p/w1920_and_h800_multi_faces" + this.pelicula[0].backdrop_path;

  }



}
