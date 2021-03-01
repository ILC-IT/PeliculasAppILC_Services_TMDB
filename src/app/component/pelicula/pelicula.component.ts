import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from "@angular/router";
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
  urlPoster: string = '';
  credits: any = {};
  loading: boolean = true;

  constructor(private route: ActivatedRoute, private peliculasService: PeliculasService, private snackBar: MatSnackBar) { }

  ngOnInit() {
    // this.route.snapshot.paramMap.get('id');
    // this.route.snapshot.paramMap.get('title');
    this.route.queryParams.subscribe((params: any) => {
      this.idPelicula = params.id;
      this.titulo = params.titulo;
      this.peliculasService.getPelicula(this.idPelicula).subscribe((data: any) =>{
        //console.log(data);
        this.pelicula = data;
        this.urlFondo = "https://image.tmdb.org/t/p/w1920_and_h800_multi_faces" + this.pelicula.backdrop_path;
        this.urlPoster = "https://image.tmdb.org/t/p/w220_and_h330_face" + this.pelicula.poster_path;
      }), (error: any) =>{
        console.log(error);
      }
      this.peliculasService.getCredits(this.idPelicula).subscribe((data: any) =>{
        //console.log(data); //se puede quitar el pipe del service y hacer data.cast
        this.credits = data;
        this.loading = false;
      })
    }); 
  }

  userPuntuacion(event){
    console.log(event)
    this.snackBar.open('Puntuación del usuario: ' + event,'close', {
      duration: 3000,
    });
  }
}
