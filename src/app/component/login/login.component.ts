import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormBuilder, FormGroup, Validators} from "@angular/forms";
import { Router } from '@angular/router'
import { LoginService } from "../../services/login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  dataRegistro: any;
  formularioLogin: FormGroup;
  verForm: boolean = true; //para ver el formulario
  date = new Date();
  registro = {
    usuarioo: '',
    contrasenaa: ''
  }

  constructor(private formBuilder: FormBuilder, private router: Router, private loginService: LoginService) { 
    this.getData(); //esto antes de que inicie el formulario
    this.initForm();
  }

  ngOnInit() {
  }

  getData(){
    if (this.router.getCurrentNavigation().extras.state) {
      const data = this.router.getCurrentNavigation().extras.state;
      this.registro = data.data;
      console.log(this.registro);
      this.dataRegistro = data.registro;
    }
  }

  initForm(){
    this.formularioLogin = this.formBuilder.group({
      usuarioo: [this.registro.usuarioo, [Validators.required, Validators.minLength(3)]],
      contrasenaa: [this.registro.contrasenaa, [Validators.required, Validators.minLength(3)]]
    });
  }

  sendForm(){
    if (this.formularioLogin.status == "INVALID"){
      return;
    }
    console.log(this.formularioLogin);
    const info = this.loginService.login(this.dataRegistro); //habria que hacer subscribe
    console.log(info);
    this.registro = this.formularioLogin.value;
    this.router.navigate(['/principal'], {state: { 'registro': this.registro }}); 
    //this.verForm = false;
  }

  sendData(){
    console.log(this.registro);
  }

  editar(){
    this.verForm = true;
  }

  resetForm(){
    this.formularioLogin.reset();
    this.formularioLogin.markAsUntouched();
    this.formularioLogin.setValue({
      usuarioo: '',
      contrasenaa: ''
    });
  }

}
