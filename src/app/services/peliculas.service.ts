import { Injectable } from '@angular/core';
import peliculas from '../../assets/movies.json';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  peliculasTotal = peliculas;
  constructor() { }

  getPopular(){
    return peliculas.slice(0, 5);
  }

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

  getMoviesPopularity(){
    let copia = JSON.parse(JSON.stringify(peliculas));
    let popular = this.sortJSON(copia, 'vote_average', 'desc');
    return popular;
  }

  getMoviesPopularity_title(modo: string){
    let copia = JSON.parse(JSON.stringify(peliculas));
    let popular = this.sortJSON(copia, 'title', modo);
    return popular;
  }

  getPelicula(id){
    return this.peliculasTotal.filter((res) =>{
      let idPelNum = +id;
      if (res.id === idPelNum){
        return res;
      }
    });
  }
}