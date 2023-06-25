import { Component, OnInit } from '@angular/core';

import { RequestUserService } from '../services/requestUser.service';

@Component({
  selector: 'app-Registro',
  templateUrl: './Registro.component.html',
  styleUrls: ['./Registro.component.css']
})
export class RegistroComponent implements OnInit {

  email: string ="";
  password: string ="";
  confirmPassword: string ="";
  userName: string ="";
  userLastname: string ="";
  adress: string ="";


  constructor(private requestUserService:RequestUserService) { }

  register() {
    console.log(this.userName);
    console.log(this.userLastname);
    console.log(this.adress);
    console.log(this.email);
    console.log(this.password);
    console.log(this.confirmPassword);
    if(this.password==this.confirmPassword){
      this.registerUser();
    }else{console.log('los passwords no coinciden')};
    this.userName="";
    this.userLastname="";
    this.adress="";
    this.email="";
    this.password="";
    this.confirmPassword="";

  }

  public registerUser(){
    this.requestUserService.postData({
      userName: this.email, 
      userLastname: this.userName,
      adress: this.adress,
      email: this.email,
      password:this.password
    }).subscribe((data)=> console.log(`Usuario ${data.email} registrado`));
  }

  ngOnInit() {
  }

}
