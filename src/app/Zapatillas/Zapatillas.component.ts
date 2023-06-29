import { Component, OnInit } from '@angular/core';
import { RequestService } from '../services/request.service';
import { ShoeInterface} from '../models/shoe.model';
import { PasarUserService } from '../services/pasarUser.service';

@Component({
  selector: 'app-Zapatillas',
  templateUrl: './Zapatillas.component.html',
  styleUrls: ['./Zapatillas.component.css']
})
export class ZapatillasComponent {

  nombre = "";

  shoeList: ShoeInterface[]=[];

  constructor(private requestService:RequestService) { }

  ngOnInit() {
    this.getShoes();
  }
  
  private getShoes(){
    this.requestService.getApiShoes().subscribe((data: ShoeInterface[]) => {
      this.shoeList=data;
      console.log(data)
    })
  }





} 
