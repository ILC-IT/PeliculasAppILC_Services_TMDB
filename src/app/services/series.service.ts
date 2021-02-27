import { Injectable } from '@angular/core';
import series from '../../assets/series.json';
import { HttpClient } from '@angular/common/http';
import { environment } from "../../environments/environment";
import { map } from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class SeriesService {

  seriesTotal = series;
  apiUrl = "https://api.themoviedb.org/3/tv/";
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

  getSeriesPopularity(){
    let copia = JSON.parse(JSON.stringify(series));
    let popular = this.sortJSON(copia, 'vote_average', 'desc');
    return popular;
  }

  getSeriesPopularity_name(modo: string){
    let copia = JSON.parse(JSON.stringify(series));
    let popular = this.sortJSON(copia, 'name', modo);
    return popular;
  }

  getSerie(id){
    const url = `${this.apiUrl}${id}?${environment.apiKey}&language=${this.language}`;
    return this.httpClient.get(url);
  }

  getTopRated(){
    const url = `${this.apiUrl}top_rated?${environment.apiKey}&language=${this.language}`;
    return this.httpClient.get(url).pipe(map((data:any) =>{
      return data.results;
    }));
  }

  getCredits(id){
    const url = `${this.apiUrl}${id}/credits?${environment.apiKey}&language=${this.language}`;
    return this.httpClient.get(url).pipe(map((data:any) =>{
      return data.cast; //asi devolvemos la parte cast de data
    }));
  }

  getLatest(){
    const url = `${this.apiUrl}latest?${environment.apiKey}&language=${this.language}`;
    return this.httpClient.get(url).pipe(map((data:any) =>{
      let myData = Object.entries(data).map((e) => ( { [e[0]]: e[1] } ));
      return myData.slice(0, 5);
    }));
  }

  getTemporada(id, temporada){
    const url = `${this.apiUrl}${id}/season/${temporada}?${environment.apiKey}&language=${this.language}`;
    return this.httpClient.get(url);
  }
}