import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
})

export class RequestService {

constructor(private httpClient:HttpClient) { } // aquí se importa la función que enlaza con las APIs

getShoes(): Observable<any> {
    return this.httpClient.get("https://api-zapatillas.vercel.app/shoes"); // este es el que hace la petición GET a la API
}

}
 