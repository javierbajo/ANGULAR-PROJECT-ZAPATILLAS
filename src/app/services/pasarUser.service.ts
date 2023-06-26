import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PasarUserService {
@Output() disparadorUser: EventEmitter<any> = new EventEmitter();
constructor() { }

}
