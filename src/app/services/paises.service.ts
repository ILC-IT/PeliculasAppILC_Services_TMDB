import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  constructor( private httpClient: HttpClient) { }

  getPaises(){
    return this.httpClient.get("https://restcountries.com/v2/regionalbloc/eu").pipe(map( (res: any[]) => {
      return res.map(pais => ({ nombre: pais.name, capital: pais.capital }));
    }));
  }
}
