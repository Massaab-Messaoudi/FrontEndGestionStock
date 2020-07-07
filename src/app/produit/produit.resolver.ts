import { Injectable } from '@angular/core';
import {Resolve} from '@angular/router';
import{Produit} from '../shared/Produit';
import { ProduitService } from './produit.service';
import{Observable} from 'rxjs';


@Injectable()
export class ProduitResolver implements Resolve<Produit>
{

  constructor(private produitservice:ProduitService)
  {

  }  

  resolve():Observable<any>
  {
     return this.produitservice.getProduits();
  }

}