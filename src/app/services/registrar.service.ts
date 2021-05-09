import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class RegistrarService {

  constructor(private httpClient: HttpClient) { }

  registrarData(data:any){
    //Hariamos un post para enviar los datos al servicio
    // return this.httpClient.post(url, data).pipe(
    //   catchError(this.handleError('error', data))
    // )
    return 'ok'
  }

}
