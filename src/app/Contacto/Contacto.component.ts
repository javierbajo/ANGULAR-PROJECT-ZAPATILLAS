import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Contacto',
  templateUrl: './Contacto.component.html',
  styleUrls: ['./Contacto.component.css']
})
export class ContactoComponent implements OnInit {


  public message:string ="";
  public email:string =""
  public phoneNumber:string =""
  constructor() { }

  ngOnInit() {
  }

  sendMessage(){
    console.log("mensaje enviado");
    // aquí iría la función que enviaría el mensaje al email
    this.phoneNumber="";
    this.email="";
    this.message="";

  }
}
