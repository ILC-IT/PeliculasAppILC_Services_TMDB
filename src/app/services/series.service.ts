import { Injectable } from '@angular/core';
import series from '../../assets/series.json';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {

  seriesTotal = series;
  constructor() { }

  getPopular(){
    return series.slice(0, 5);
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
    return this.seriesTotal.filter((res) =>{
      let idPelNum = +id;
      if (res.id === idPelNum){
        return res;
      }
    });
  }
}