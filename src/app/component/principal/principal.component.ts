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
    this.peliculasData = this.peliculasService.getPopular();
    this.seriesData = this.seriesService.getPopular();
  }

  sendParams(id, titulo){
    this.router.navigate(['/pelicula'], {queryParams: {'id': id, 'titulo': titulo}});
  }

  sendParams2(id, titulo){
    this.router.navigate(['/serie'], {queryParams: {'id': id, 'titulo': titulo}});
  }

}
