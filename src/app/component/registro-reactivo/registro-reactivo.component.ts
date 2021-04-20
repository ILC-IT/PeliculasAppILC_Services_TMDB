import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormBuilder, FormGroup, Validators} from "@angular/forms";
import { PaisesService } from 'src/app/services/paises.service';

@Component({
  selector: 'app-registro-reactivo',
  templateUrl: './registro-reactivo.component.html',
  styleUrls: ['./registro-reactivo.component.css']
})
export class RegistroReactivoComponent implements OnInit {

  formularioRegistro: FormGroup;
  paises: any[] = [];
  ciudades = ['Ponferrada', 'Leon', 'Astorga', 'Bembibre', 'Cacabelos'];

  constructor( private formBuilder: FormBuilder, private paisesService: PaisesService) { 
    this.initForm();
  }

  ngOnInit() {
    this.paisesService.getPaises().subscribe((paises)=>{
      this.paises = paises;
    })
  }

  initForm(){
    this.formularioRegistro = this.formBuilder.group({
      nombree: ['', [Validators.required, Validators.minLength(3)]],
      apellidoss: ['', [Validators.required, Validators.minLength(3)]],
      emaill: ['test@test.com', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
      telefonoo: ['+34', [Validators.required, Validators.minLength(12)]],
      ciudadd: ['', Validators.required],
      paiss: ['', Validators.required],
      nacimiento: ['', Validators.required],
      genero: ['', Validators.required]
    });
  }

  sendForm(){
    if(this.formularioRegistro.status == "INVALID"){
      return;
    }
    console.log(this.formularioRegistro);
    //console.log(this.formularioRegistro.value);
  }

  resetForm(){
    //this.formularioRegistro.reset();
    this.formularioRegistro.setValue({
      nombree:'',
      apellidoss:'',
      emaill:'',
      telefonoo:'',
      ciudadd:'',
      paiss:'',
      nacimiento:'',
      genero:''
    });
    console.log(this.formularioRegistro);
    this.formularioRegistro.markAsUntouched();
  }

}
