import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Usuario',
  templateUrl: './Usuario.component.html',
  styleUrls: ['./Usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  
  nombre = "Rodolfo"
  apellido = "Mondoñedo"
  email = "rodolñedo@ghotmail.com"
  direccion = "Santo Domingo de Guzmán 18, 4D, 47009, Valladolid"
  
  constructor() { }

  ngOnInit() {
  }

}
