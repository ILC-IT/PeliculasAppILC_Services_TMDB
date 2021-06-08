import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { catchError } from "rxjs/operators";
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  apiURL = 'https://api.themoviedb.org/3/authentication/';
  logged = new Subject();

  constructor(private httpClient: HttpClient) { }

  login(userData:any, token){
    //Hariamos un post para enviar los datos al servicio
    // return this.httpClient.post(url, data).pipe(
    //   catchError(this.handleError('error', data))
    // )
    //console.log(userData)
    // const user = {
    //   name: 'Pepito',
    //   email: 'pepito@gmail.com',
    //   sessionId: 'asdasdasdasd'
    // }
    // localStorage.setItem("userData", JSON.stringify(user))
    const url = `${this.apiURL}token/validate_with_login?${environment.apiKey}`;
    const body = {
      username: userData.usuarioo,
      password: userData.contrasenaa,
      request_token: token
    }
    return this.httpClient.post(url, body);
  }

  getToken(){
    const url = `${this.apiURL}token/new?${environment.apiKey}`;
    return this.httpClient.get(url);
  }

  getSessionId(token){
    const url = `${this.apiURL}session/new?${environment.apiKey}`;
    return this.httpClient.post(url, {request_token: token});
  }

  logout(){
    localStorage.clear();
    this.logged.next(false);
  }
}
