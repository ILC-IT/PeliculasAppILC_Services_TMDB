import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormBuilder, FormGroup, Validators} from "@angular/forms";
import { MatSnackBar } from '@angular/material/snack-bar';
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

  constructor(private formBuilder: FormBuilder, private router: Router, private loginService: LoginService, private snackBar: MatSnackBar) { 
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
    if (this.formularioLogin.status === "INVALID"){
      return;
    }
    const user = {
      name: this.formularioLogin.value.usuarioo
    }
    //console.log(this.formularioLogin);
    // const info = this.loginService.login(this.dataRegistro); //habria que hacer subscribe
    // console.log(info);
    this.registro = this.formularioLogin.value;
    this.loginService.getToken().subscribe((res: any) => {
      if(res.success){
        this.loginService.login(this.formularioLogin.value, res.request_token).subscribe((res: any) => {
          if(res.success){
            this.loginService.getSessionId(res.request_token).subscribe((res: any) => {
              if(res.success){
                localStorage.setItem("session_Id", res.session_id);
                localStorage.setItem("userData", JSON.stringify(user));
                this.loginService.logged.next(true);
                this.router.navigate(['/principal'], {state: { 'registro': this.registro }});
              }
            });
          }
        },(error) =>{
          //console.log(error);
          this.snackBar.open(error.error.status_message, 'Cerrar', {duration: 3000});
        });
      } else{
        console.log('ERROR');
      }
    });
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
