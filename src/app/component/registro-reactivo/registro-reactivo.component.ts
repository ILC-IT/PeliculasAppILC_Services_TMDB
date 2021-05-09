import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormBuilder, FormGroup, Validators} from "@angular/forms";
import { PaisesService } from 'src/app/services/paises.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-registro-reactivo',
  templateUrl: './registro-reactivo.component.html',
  styleUrls: ['./registro-reactivo.component.css']
})
export class RegistroReactivoComponent implements OnInit {

  formularioRegistro: FormGroup;
  paises: any[] = [];
  ciudades = ['Ponferrada', 'Leon', 'Astorga', 'Bembibre', 'Cacabelos'];
  verForm: boolean = true; //para ver el formulario
  //registro: any;
  date = new Date();
  registro = {
    nombree: '',
    apellidoss: '',
    emaill: '',
    telefonoo: '',
    ciudadd: '',
    direccionn: {
      callee: '',
      numeroo: ''
    },
    paiss: '',
    nacimiento: '',
    genero: ''
  }

  constructor( private formBuilder: FormBuilder, private paisesService: PaisesService, private router: Router) { 
    this.getData(); //esto antes de que inicie el formulario
    this.initForm();
    //this.getData();
  }

  ngOnInit() {
    this.paisesService.getPaises().subscribe((paises)=>{
      this.paises = paises;
    })
  }

  getData(){
    if (this.router.getCurrentNavigation().extras.state) {
      const data = this.router.getCurrentNavigation().extras.state;
      this.registro = data.data;
      console.log(this.registro);
    }
  }

  initForm(){
    this.formularioRegistro = this.formBuilder.group({
      nombree: [this.registro.nombree, [Validators.required, Validators.minLength(3)]],
      apellidoss: [this.registro.apellidoss, [Validators.required, Validators.minLength(3)]],
      emaill: [this.registro.emaill, [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
      telefonoo: [this.registro.telefonoo, [Validators.required, Validators.minLength(12)]],
      ciudadd: [this.registro.ciudadd, Validators.required],
      direccionn: this.formBuilder.group({
        callee: [this.registro.direccionn.callee, Validators.required],
        numeroo: [this.registro.direccionn.numeroo, Validators.required]
      }),
      paiss: [this.registro.paiss, Validators.required],
      nacimiento: [this.registro.nacimiento, Validators.required],
      genero: [this.registro.genero, Validators.required]
    });
  }

  sendForm(){
    if (this.formularioRegistro.status == "INVALID"){
      return;
    }
    console.log(this.formularioRegistro);
    //console.log(this.formularioRegistro.value);
    this.registro = this.formularioRegistro.value;
    this.router.navigate(['registroconfirmar'], {state: { 'registro': this.registro }}); 
    //this.verForm = false;
  }

  sendData(){
    console.log(this.registro);
  }

  editar(){
    this.verForm = true;
  }

  resetForm(){
    this.formularioRegistro.reset();
    // console.log(this.formularioRegistro);
    this.formularioRegistro.markAsUntouched();
    // Object.keys(this.formularioRegistro.controls).forEach(key => {
    //   this.formularioRegistro.controls[key].setErrors(null);
    // });
    this.formularioRegistro.setValue({
      nombree: '',
      apellidoss: '',
      emaill: 'test@test.com',
      telefonoo: '+34',
      ciudadd: '',
      direccionn: {
        callee: '',
        numeroo: ''
      },
      paiss: '',
      nacimiento: '',
      genero: ''
    });
  }

}
