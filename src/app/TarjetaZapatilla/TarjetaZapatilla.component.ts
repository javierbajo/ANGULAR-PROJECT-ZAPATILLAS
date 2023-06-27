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

  // shoeList: ShoeInterface[]=[];
  shoeItem!: ShoeInterface;

  
  constructor(private ruta:ActivatedRoute, private requestService:RequestService) { 
   
  }

  ngOnInit() {
    this.ruta.params.subscribe(params=>{
      console.log(params['id']);
      this.getShoeDetail(params['id']);
    })
  }

  private getShoeDetail(id:string){
    this.requestService.getApiShoeDetail(id).subscribe((pepito: ShoeInterface[]) => {
      console.log(pepito)
      this.shoeItem=pepito[0];
      console.log(this.shoeItem);
    })
  }
}
