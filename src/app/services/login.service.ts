import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  login(data:any){
    //Hariamos un post para enviar los datos al servicio
    // return this.httpClient.post(url, data).pipe(
    //   catchError(this.handleError('error', data))
    // )
    console.log(data)
    const user = {
      name: 'Pepito',
      email: 'pepito@gmail.com',
      sessionId: 'asdasdasdasd'
    }
    localStorage.setItem("userData", JSON.stringify(user))
  }

  logout(){
    localStorage.clear();

  }
}
