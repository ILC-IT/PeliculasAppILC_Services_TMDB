import { Component, OnInit } from '@angular/core';
import series from '../../../assets/series.json';

@Component({
  selector: 'app-series-list',
  templateUrl: './series-list.component.html',
  styleUrls: ['./series-list.component.css']
})
export class SeriesListComponent implements OnInit {

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

  seriesData: any;
  copia: any;

  constructor() {
    this.copia = JSON.parse(JSON.stringify(series));
    this.seriesData = series;
   }

  flag: boolean = false;
  private ordenar(){
    this.flag = !this.flag;
    if (this.flag) {
      this.seriesData = this.sortJSON(this.copia, 'name', 'asc');
    }else{
      this.seriesData = series;
    }
  }

  ngOnInit() {
  }

}
