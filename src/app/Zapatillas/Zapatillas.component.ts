import { Component, OnInit } from '@angular/core';
import { RequestService } from '../services/request.service';
import { ShoeInterface} from '../models/shoe.model';

@Component({
  selector: 'app-Zapatillas',
  templateUrl: './Zapatillas.component.html',
  styleUrls: ['./Zapatillas.component.css']
})
export class ZapatillasComponent {

  shoeList: ShoeInterface[]=[];

  constructor(private requestService:RequestService) { }

  ngOnInit() {
    this.getShoes();
  }
  
  private getShoes(){
    this.requestService.getShoes().subscribe((data: ShoeInterface[]) => {
      this.shoeList=data;
      console.log(data)
    })
  }





} 
