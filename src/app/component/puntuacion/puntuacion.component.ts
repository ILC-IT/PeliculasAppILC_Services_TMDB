import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-puntuacion',
  templateUrl: './puntuacion.component.html',
  styleUrls: ['./puntuacion.component.css']
})
export class PuntuacionComponent implements OnInit {
  @Input() puntuacion: number;
  @Output() newPuntuacion = new EventEmitter<number>();

  constructor() { 
    //console.log(this.puntuacion);
  }

  ngOnInit() {
  }

  sendPuntuacion(value: number){
    this.newPuntuacion.emit(value);
  }

}
