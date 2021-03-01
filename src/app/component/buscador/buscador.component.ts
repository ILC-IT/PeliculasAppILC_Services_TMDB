import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PeliculasService } from "../../services/peliculas.service";
import { SeriesService } from "../../services/series.service";

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  loading:boolean = true;
  loading2:boolean = true;
  peliculasData: any = {};
  seriesData: any = {};
  query: string;

  constructor(private router: ActivatedRoute, private peliculasService: PeliculasService, private route: Router, private seriesService: SeriesService) { }

  ngOnInit() {
    this.query = this.router.snapshot.paramMap.get('query');
    this.peliculasService.searchMovie(this.query).subscribe((data:any)=>{
      this.peliculasData = data.results;
      this.loading = false;
      //Añadir mensaje para cuando no encuentre datos
    });
    this.seriesService.searchSerie(this.query).subscribe((data:any)=>{
      this.seriesData = data.results;
      this.loading2 = false;
      //Añadir mensaje para cuando no encuentre datos
    });
  }
  sendParams(id, titulo){
    this.route.navigate(['/pelicula'], {queryParams: {'id': id, 'titulo': titulo}});
  }

  sendParams2(id, titulo){
    this.route.navigate(['/serie'], {queryParams: {'id': id, 'titulo': titulo}});
  }

}
