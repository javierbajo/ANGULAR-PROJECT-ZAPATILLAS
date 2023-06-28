import { Component, OnInit } from '@angular/core';
import { PasarUserService } from '../services/pasarUser.service';
import { UserInterface } from '../models/user.model';

@Component({
  selector: 'app-Nav',
  templateUrl: './Nav.component.html',
  styleUrls: ['./Nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private pasarUserService: PasarUserService) { }

  public user!: UserInterface;
  public resetUser: UserInterface ={
  email: "",
  userName: "",
  userLastname: "",
  adress: "",
  password: ""

  }

  
  ngOnInit() {
    this.pasarUserService.selectedUser$.subscribe(user=>{
      this.user = user;
    });
  }

  // logout(){
  //   this.pasarUserService.selectedUser$.subscribe(user=>{
  //     this.user = this.resetUser;
  // })
  // }
}
