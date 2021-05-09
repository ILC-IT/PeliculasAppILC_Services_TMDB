import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { RegistrarService } from "../../services/registrar.service";

@Component({
  selector: 'app-registro-comfirmar',
  templateUrl: './registro-comfirmar.component.html',
  styleUrls: ['./registro-comfirmar.component.css']
})
export class RegistroComfirmarComponent implements OnInit {
  
  dataRegistro: any;

  constructor(private router: Router, private registrarService: RegistrarService) {
    this.getData();
  }

  getData(){
    const data = this.router.getCurrentNavigation().extras.state; //aqui van los datos que le mandamos por state
    this.dataRegistro = data.registro;
  }

  sendData(){
    const info = this.registrarService.registrarData(this.dataRegistro); //habria que hacer subscribe
    console.log(info);
  }

  editar(){
    this.router.navigate(['registroreactivo'], { state: {'data': this.dataRegistro}});
  }

  ngOnInit() {
  }

}
