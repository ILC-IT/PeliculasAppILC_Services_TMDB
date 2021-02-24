import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-puntuacion',
  templateUrl: './puntuacion.component.html',
  styleUrls: ['./puntuacion.component.css']
})
export class PuntuacionComponent implements OnInit {
  @Input() puntuacion: number;
  constructor() { 
    console.log(this.puntuacion);
  }

  ngOnInit() {
  }

}
