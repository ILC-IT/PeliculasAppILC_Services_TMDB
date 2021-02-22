import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { SeriesService } from "../../services/series.service";

@Component({
  selector: 'app-series-list',
  templateUrl: './series-list.component.html',
  styleUrls: ['./series-list.component.css']
})
export class SeriesListComponent implements OnInit {

  seriesData: any;

  constructor(private router: Router, private seriesService: SeriesService) {
   }

  flag: boolean = false;
  private ordenar_nombre(){
    this.flag = !this.flag;
    if (this.flag) {
      this.seriesData = this.seriesService.getSeriesPopularity_name('asc');
    }else{
      this.seriesData = this.seriesService.seriesTotal;;
    } 
  }

  flag_votos: boolean = false;
  private ordenar_votos(){
    this.flag_votos = !this.flag_votos;
    if (this.flag_votos) {
      this.seriesData = this.seriesService.getSeriesPopularity();
    }else{
      this.seriesData = this.seriesService.seriesTotal;
    }
  }

  ngOnInit() {
    this.seriesData = this.seriesService.seriesTotal;
  }

  sendParams(id, titulo){
    this.router.navigate(['/serie'], {queryParams: {'id': id, 'titulo': titulo}});
  }

}
