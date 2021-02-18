import { Component, OnInit } from '@angular/core';
import peliculas from '../../../assets/movies.json';

@Component({
  selector: 'app-peliculas-list',
  templateUrl: './peliculas-list.component.html',
  styleUrls: ['./peliculas-list.component.css']
})
export class PeliculasListComponent implements OnInit {

  private sortJSON(data, key, orden) {
    return data.sort(function (a, b) {
        var x = a[key],
        y = b[key];

        if (orden === 'asc') {
            return ((x < y) ? -1 : ((x > y) ? 1 : 0));
        }

        if (orden === 'desc') {
            return ((x > y) ? -1 : ((x < y) ? 1 : 0));
        }
    });
  }

  peliculasData: any;
  copia: any;

  constructor() { 
    this.copia = JSON.parse(JSON.stringify(peliculas));
    this.peliculasData = peliculas;
  }
  
  flag: boolean = false;
  private ordenar(){
    this.flag = !this.flag;
    if (this.flag) {
      this.peliculasData = this.sortJSON(this.copia, 'title', 'asc');
    }else{
      this.peliculasData = peliculas;
    }
  }

  ngOnInit() {
  }

}
