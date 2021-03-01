import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PeliculasService } from "../../services/peliculas.service";

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  loading:boolean = true;
  peliculasData: any = {};
  query: string;

  constructor(private router: ActivatedRoute, private peliculasService: PeliculasService, private route: Router) { }

  ngOnInit() {
    this.query = this.router.snapshot.paramMap.get('query');
    this.peliculasService.searchMovie(this.query).subscribe((data:any)=>{
      this.peliculasData = data.results;
      this.loading = false;
      //Añadir mensaje para cuando no encuentre datos
    });
  }
  sendParams(id, titulo){
    this.route.navigate(['/pelicula'], {queryParams: {'id': id, 'titulo': titulo}});
  }

}
