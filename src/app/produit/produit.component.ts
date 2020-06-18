import { Component, OnInit } from '@angular/core';
import {ProduiMockService} from './produit.mock.service';
import{Produit} from '../shared/Produit';
@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {
  produits:Produit[];
  constructor(private produitservice:ProduiMockService) { }

  ngOnInit(): void {
    this.produits=this.produitservice.getproduit();
  }

}
