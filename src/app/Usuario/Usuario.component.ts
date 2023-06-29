import { Component, OnInit } from '@angular/core';
import { PasarUserService } from '../services/pasarUser.service';

@Component({
  selector: 'app-Usuario',
  templateUrl: './Usuario.component.html',
  styleUrls: ['./Usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  
  nombre = "";
  apellido = "";
  email = "";
  direccion = "";
  
  constructor(private pasarUserService: PasarUserService) { }

  ngOnInit() {
    
    this.pasarUserService.selectedUser$.subscribe(user=>{
      this.nombre=user.userName;
      this.apellido=user.userLastname;
      this.email=user.email;
      this.direccion=user.adress;
    });

      // this.existUser = data.data;
      // console.log(this.existUser);
  }

}
