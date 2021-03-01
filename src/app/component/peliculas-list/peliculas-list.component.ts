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
  votos: boolean = false;
  loading: boolean = true; // para esperar a que los datos esten disponibles y luego se "pintan" en pantalla
  actualPage: number = 0;

  constructor(private router: Router, private peliculasService: PeliculasService) { 
  }
  
  flag: boolean = false;
  private ordenar_nombre(modo: string){
    this.votos = false;
    this.flag = !this.flag;
    if (this.flag) {
      this.peliculasData = this.peliculasService.getMoviesPopularity_title(modo);
    }else{
      this.peliculasData = this.peliculasService.peliculasTotal;
    }
  }

  flag_votos: boolean = false;
  private ordenar_votos(){
    this.votos = true;
    this.flag_votos = !this.flag_votos;
    if (this.flag_votos) {
      this.peliculasData = this.peliculasService.getMoviesPopularity();
    }else{
      this.peliculasData = this.peliculasService.peliculasTotal;
    }
  }

  ngOnInit() {
    this.peliculasService.getTopRated().subscribe((data: any)=> {
      this.peliculasData = data.results;
      this.actualPage = data.page;
      this.loading = false;
      //console.log(data)
      console.log("peliculas toprated")
    }), (error: any) =>{
      console.log(error);
    };
  }

  sendParams(id, titulo){
    this.router.navigate(['/pelicula'], {queryParams: {'id': id, 'titulo': titulo}});
  }

  cargaMas(){
    this.actualPage += 1; 
    this.peliculasService.getTopRated(this.actualPage).subscribe((data:any)=>{
      this.peliculasData = this.peliculasData.concat(data);
    })
  }

}
