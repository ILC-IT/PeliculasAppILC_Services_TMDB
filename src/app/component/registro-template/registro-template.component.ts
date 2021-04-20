import { Component, OnInit } from '@angular/core';
import { NgForm} from "@angular/forms";
import { PaisesService } from "src/app/services/paises.service";

@Component({
  selector: 'app-registro-template',
  templateUrl: './registro-template.component.html',
  styleUrls: ['./registro-template.component.css']
})
export class RegistroTemplateComponent implements OnInit {

  usuario = { //esto para que lo cargue el formulario la primera vez automaticamente
    nombre: '',
    apellidos: '',
    email: '',
    telefono: ''
  }
  ciudades = ['Ponferrada', 'Leon', 'Astorga', 'Bembibre', 'Cacabelos'];
  paises: any[] = [];

  constructor(private paisesService: PaisesService) { }

  ngOnInit() {
    this.paisesService.getPaises().subscribe( paises => {
      this.paises = paises;
      //console.log(paises);
    });
  }

  send(form: NgForm){
    //console.log("enviar formulario");
    if (form.invalid){
      console.log('Formulario no valido');
      return;
    }
    console.log(form.value);
  }

}
