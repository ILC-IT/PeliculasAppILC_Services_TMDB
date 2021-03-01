import { Injectable } from '@angular/core';
import peliculas from '../../assets/movies.json';
import { HttpClient } from '@angular/common/http';
import { environment } from "../../environments/environment";
import { map } from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  peliculasTotal = peliculas;
  apiUrl = "https://api.themoviedb.org/3/movie/";
  language = 'es-ES';

  constructor(private httpClient: HttpClient) { }

  getPopular(){
    const url = `${this.apiUrl}popular?${environment.apiKey}&language=${this.language}`;
    return this.httpClient.get(url).pipe(map((data:any) =>{
      return data.results.slice(0, 5);
    })); 
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
    const url = `${this.apiUrl}${id}?${environment.apiKey}&language=${this.language}`;
    return this.httpClient.get(url);
  }

  getTopRated(page?){
    if(page){
      const url = `${this.apiUrl}top_rated?${environment.apiKey}&language=${this.language}&page=${page}`; 
      return this.httpClient.get(url).pipe(map((data:any) =>{
        return data.results; //asi devolvemos la parte cast de data
      }));    
    }else{
      const url = `${this.apiUrl}top_rated?${environment.apiKey}&language=${this.language}`;
      return this.httpClient.get(url);
    }
  }

  getCredits(id){
    const url = `${this.apiUrl}${id}/credits?${environment.apiKey}&language=${this.language}`;
    return this.httpClient.get(url).pipe(map((data:any) =>{
      return data.cast; //asi devolvemos la parte cast de data
    }));
  }

  searchMovie(query: string){
    const url = `https://api.themoviedb.org/3/search/movie?${environment.apiKey}&language=${this.language}&query=${query}`;
    return this.httpClient.get(url);
  }
}