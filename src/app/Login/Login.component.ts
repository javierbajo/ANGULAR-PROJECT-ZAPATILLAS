import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RequestUserService } from '../services/requestUser.service';
import { UserInterface } from '../models/user.model';

@Component({
  selector: 'app-Login',
  templateUrl: './Login.component.html',
  styleUrls: ['./Login.component.css']
})
export class LoginComponent implements OnInit {

  @Output() existUser = new EventEmitter<any>();

  userList: UserInterface[]=[];
  logUser: UserInterface|undefined;

  constructor(private requestUserService:RequestUserService) { }

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
  

  findUser(){
    return this.userList.find(item => item.email === this.email && item.password  === this.password );
  }

  pasarUserAlPadre():void{
    this.existUser.emit(this.logUser);
    }
  login() {
    console.log(this.email);
    console.log(this.password);
    console.log(this.userList);
    this.logUser = this.findUser();
    console.log(this.logUser);
    this.email="";
    this.password="";
    this.pasarUserAlPadre();
  }




   

  


 
/*
  const [user, setUser] = useState(null);
  const [loginError, setLoginError] = useState("");

  const loginUser = (formData) => {
    const existUser = userList.find(
      (user) =>
        user.email === formData.email && user.password === formData.password
    );

    if (existUser) {
      // Segundo estado del user, información del usuario logado
      setUser(existUser);
      setLoginError("");
      navigate("/");
    } else {
      // tercer estado del user, usuario no encontrado
      setUser(false);
      setLoginError("Usuario o contraseña incorrecta");
    }
  };
*/


}
