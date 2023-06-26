import { Component } from '@angular/core';
import { UserInterface } from './models/user.model';
import { PasarUserService } from './services/pasarUser.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Javi-Zapatillas';

  constructor(private pasarUserService: PasarUserService) {}

  existUser: UserInterface={
    userName:'', 
    email:'', 
    password:'',
    userLastname:'',
    adress:''
  }
  ngOnInit(): void{

    this.pasarUserService.disparadorUser.subscribe(data =>{
      console.log("Recibiendo usuario..." ,data);
      this.existUser = data.data;
      console.log(this.existUser);
    })
  }



  //setUser(nuevoUser: UserInterface|undefined){
  // this.existUser=this.nuevoUser;
  // }



}
  