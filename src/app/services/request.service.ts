import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
})

export class RequestService {
postData(arg0: { userName: string; userLastname: string; }) {
  throw new Error('Method not implemented.');
}

constructor(private httpClient:HttpClient) { } // aquí se importa la función que enlaza con las APIs

getApiShoes(): Observable<any> {
    return this.httpClient.get("https://api-zapatillas.vercel.app/shoes"); // este es el que hace la petición GET a la API
}
getApiShoeDetail(id:string): Observable<any> {
  return this.httpClient.get(`https://api-zapatillas.vercel.app/shoes/id/${id}`); // este es el que hace la petición GET a la API
}
}
 