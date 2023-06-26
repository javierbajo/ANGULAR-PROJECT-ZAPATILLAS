import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RequestUserService } from '../services/requestUser.service';
import { UserInterface } from '../models/user.model';
import { PasarUserService } from '../services/pasarUser.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-Login',
  templateUrl: './Login.component.html',
  styleUrls: ['./Login.component.css']
})
export class LoginComponent implements OnInit {



  userList: UserInterface[]=[];
  logUser: UserInterface|undefined;

  constructor(private requestUserService:RequestUserService, private pasarUserService: PasarUserService, private router:Router) { }

  ngOnInit() {
    this.getUsers();
  }

  private getUsers(){
    this.requestUserService.getApiUsers().subscribe((data: UserInterface[]) => {
      this.userList=data;
      console.log(data)
      
    })
  }
  
  public email:string ="";
  public password:string ="";
  public usuarioNoExiste: boolean = false;
  

  findUser(){
    return this.userList.find(item => item.email === this.email && item.password  === this.password );
  }

 
  login() {
    console.log(this.email);
    console.log(this.password);
    console.log(this.userList);
    this.logUser = this.findUser();
    console.log(this.logUser);
    if(this.logUser){
    this.pasarUserService.disparadorUser.emit({data:this.logUser});
    this.usuarioNoExiste=false;
    this.router.navigate(['']); // me lleva a home
    }else this.usuarioNoExiste=true;
    this.email="";
    this.password="";

  }


}
