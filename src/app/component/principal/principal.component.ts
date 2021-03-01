import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import { PeliculasService } from "../../services/peliculas.service";
import { SeriesService } from "../../services/series.service";

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  seriesData: any;
  peliculasData: any; //de manera predefinida es public

  constructor(private router: Router, private peliculasService: PeliculasService, private seriesService: SeriesService) { }

  ngOnInit() {
    this.peliculasService.getPopular().subscribe((data: any) =>{ //podemos definir una clase pelicula y poner data: pelicula
      this.peliculasData = data;
      //console.log(data);
      console.log("principal peliculas populares")
    });

    this.seriesService.getTopRated().subscribe((data: any) =>{ //podemos definir una clase serie y poner data: serie
    // this.seriesService.getLatest().subscribe((data: any) =>{
      this.seriesData = data;
      //console.log(data);
      console.log("principal series top rated")
    });
  }

  sendParams(id, titulo){
    this.router.navigate(['/pelicula'], {queryParams: {'id': id, 'titulo': titulo}});
  }

  sendParams2(id, titulo){
    this.router.navigate(['/serie'], {queryParams: {'id': id, 'titulo': titulo}});
  }

}
