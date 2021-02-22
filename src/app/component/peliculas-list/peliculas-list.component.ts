import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { PeliculasService } from "../../services/peliculas.service";

@Component({
  selector: 'app-peliculas-list',
  templateUrl: './peliculas-list.component.html',
  styleUrls: ['./peliculas-list.component.css']
})
export class PeliculasListComponent implements OnInit {

  peliculasData: any;

  constructor(private router: Router, private peliculasService: PeliculasService) { 
  }
  
  flag: boolean = false;
  private ordenar_nombre(){
    this.flag = !this.flag;
    if (this.flag) {
      this.peliculasData = this.peliculasService.getMoviesPopularity_title('asc');
    }else{
      this.peliculasData = this.peliculasService.peliculasTotal;
    }
  }

  flag_votos: boolean = false;
  private ordenar_votos(){
    this.flag_votos = !this.flag_votos;
    if (this.flag_votos) {
      this.peliculasData = this.peliculasService.getMoviesPopularity();
    }else{
      this.peliculasData = this.peliculasService.peliculasTotal;
    }
  }

  ngOnInit() {
    this.peliculasData = this.peliculasService.peliculasTotal;
  }

  sendParams(id, titulo){
    this.router.navigate(['/pelicula'], {queryParams: {'id': id, 'titulo': titulo}});
  }

}
