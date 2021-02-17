import { Component, OnInit } from '@angular/core';
import series from '../../../assets/series.json';

@Component({
  selector: 'app-series-list',
  templateUrl: './series-list.component.html',
  styleUrls: ['./series-list.component.css']
})
export class SeriesListComponent implements OnInit {

  seriesData: any;
  constructor() {
    this.seriesData = series;
   }

  ngOnInit() {
  }

}
