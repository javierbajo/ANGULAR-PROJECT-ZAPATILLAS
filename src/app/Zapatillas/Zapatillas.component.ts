import { Component, OnInit } from '@angular/core';
import { RequestService } from '../services/request.service';
import { FruitInterface} from '../models/fruit.model';

@Component({
  selector: 'app-Zapatillas',
  templateUrl: './Zapatillas.component.html',
  styleUrls: ['./Zapatillas.component.css']
})
export class ZapatillasComponent {

  fruitList: FruitInterface[]=[];

  constructor(private requestService:RequestService) { }

  ngOnInit() {
    this.getFruits();
  }
  
  private getFruits(){
    this.requestService.getFruits().subscribe((data: FruitInterface[]) => {
      this.fruitList=data;
      console.log(data)
    })
  }





} 
