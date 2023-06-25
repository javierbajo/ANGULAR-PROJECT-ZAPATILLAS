import { Component } from '@angular/core';
import { UserInterface } from './models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Javi-Zapatillas';

  existUser: UserInterface={
    userName:'', 
    email:'', 
    password:'',
    userLastname:'',
    adress:''
  }

  //setUser(nuevoUser: UserInterface|undefined){
  // this.existUser=this.nuevoUser;
  // }



}
  