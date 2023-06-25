import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestUserService {

constructor(private httpClient:HttpClient) { }


getApiUsers(): Observable<any>{
  return this.httpClient.get("https://api-zapatillas.vercel.app/users");
}

postData(regUser: any): Observable<any>{
  return this.httpClient.post('https://api-zapatillas.vercel.app/users', regUser) }

}
