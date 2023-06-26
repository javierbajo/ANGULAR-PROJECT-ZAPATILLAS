import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RequestService } from '../services/request.service';
import { ShoeInterface } from '../models/shoe.model';

@Component({
  selector: 'app-TarjetaZapatilla',
  templateUrl: './TarjetaZapatilla.component.html',
  styleUrls: ['./TarjetaZapatilla.component.css']
})
export class TarjetaZapatillaComponent implements OnInit {

  shoeList: ShoeInterface[]=[];
  shoeItem:any;
  shoeItemName:string="";
  
  constructor(private ruta:ActivatedRoute, private requestService:RequestService) { 
    this.ruta.params.subscribe(params=>{
      console.log(params['id']);
      this.shoeItemName=params['id'];
    })
  }

  ngOnInit() {
    this.getShoes();
  }
  private getShoes(){
    this.requestService.getApiShoes().subscribe((data: ShoeInterface[]) => {
      this.shoeList=data;
      console.log(data)
      this.shoeItem=this.shoeList.find(item=> item.shoeName=this.shoeItemName);
      console.log(this.shoeItem);
    })
  }
}
