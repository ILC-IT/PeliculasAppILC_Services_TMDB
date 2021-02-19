import { Component, OnInit } from '@angular/core';
import series from '../../../assets/series.json';
import peliculas from '../../../assets/movies.json';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  public seriesData: any = series.slice(0, 5);
  public peliculasData: any = peliculas.slice(0, 5);

  constructor(private router: Router) { }

  ngOnInit() {
    //console.log(this.seriesData);
  }

  sendParams(id, titulo){
    this.router.navigate(['/pelicula'], {queryParams: {'id': id, 'titulo': titulo}});
  }

}
