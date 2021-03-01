import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from "@angular/router";
import { SeriesService } from "../../services/series.service";

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})
export class SerieComponent implements OnInit {
  idSerie: string = '';
  titulo: string = '';
  serie: any = {};
  urlFondo: string = '';
  urlPoster: string = '';
  temporadaPoster: string = '';
  credits: any = {};
  ult_temp: string = '';
  temporadaData: any = {};
  loading: boolean = true;

  constructor(private route: ActivatedRoute, private seriesService: SeriesService, private snackBar: MatSnackBar) { }

  ngOnInit() {
    // this.route.snapshot.paramMap.get('id');
    // this.route.snapshot.paramMap.get('name');
    this.route.queryParams.subscribe((params: any) => {
      this.idSerie = params.id;
      this.titulo = params.name;
      this.seriesService.getSerie(this.idSerie).subscribe((data: any)=>{
        //console.log(data);
        this.serie = data;
        this.urlFondo = "https://image.tmdb.org/t/p/w1920_and_h800_multi_faces" + this.serie.backdrop_path;
        this.urlPoster = "https://image.tmdb.org/t/p/w220_and_h330_face" + this.serie.poster_path;
        this.ult_temp = data.number_of_seasons;
        //console.log("temporada getserie " + this.ult_temp)
        this.seriesService.getTemporada(this.idSerie, this.ult_temp).subscribe((data: any) =>{
          //console.log(data);
          //console.log("temporada gettemporada " + this.ult_temp)
          this.temporadaData = data;
          this.temporadaPoster = "https://image.tmdb.org/t/p/w220_and_h330_face" + this.temporadaData.poster_path;
        })
      }), (error: any) =>{
        console.log(error);
      }
      this.seriesService.getCredits(this.idSerie).subscribe((data: any) =>{
        //console.log(data); //se puede quitar el pipe del service y hacer data.cast
        //console.log("temporada getcredits " + this.ult_temp)
        this.credits = data;
        this.loading = false;
      })
    });
  }

  userPuntuacion(event){
    // console.log(event)
    this.snackBar.open('Puntuación del usuario: ' + event,'close', {
      duration: 3000,
    });
  }
}