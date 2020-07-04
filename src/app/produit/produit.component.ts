import { Component, OnInit } from '@angular/core';
import{ProduitService} from './produit.service'
import{Produit} from '../shared/Produit';
import{FormGroup,FormBuilder,Validators} from '@angular/forms';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {

  // save the selected produit to be edited here
  public selectedProduit:Produit;
  public produits:Produit[];
  public errorMsg;
  produitsform:FormGroup;
  operation:string='add';
  constructor(private produitservice:ProduitService,private fb:FormBuilder) 
  {
    // init the form
    this.createForm();

   }

  ngOnInit(): void {
    this.initProduit ();
    this.LoadProduit();
  }
  LoadProduit() :void 
  {

    this.produitservice.getProduits()
    .subscribe(data => this.produits = data,
              error => this.errorMsg = error);
  }
  

  addProduit() : void
  {
   
    // get the value from the formulaire
    const prod = this.produitsform.value;
    this.produitservice.addProduit(prod).subscribe
    (
       res => 
       {
          this.LoadProduit();
          this.initProduit(); // initialize the formulaire
       }
    );
  }

  updateProduit() : void
  {
    // get the value from the formulaire
    const prod = this.produitsform.value;
    this.produitservice.updateProduit(this.selectedProduit).subscribe
    (
       res => 
       {
          this.initProduit();
          this.LoadProduit();
       }
    );
    

  }

  deleteProduit():void
  {
    
    
    this.produitservice.deleteProduit(this.selectedProduit.ref).subscribe
    (
      res => 
      {
        this.selectedProduit=new Produit();
        this.LoadProduit();
      }
    );
  }

  /**
   * initilisation of the var selecetdProduit 
   */
  initProduit() : void
  {
    this.selectedProduit=new Produit();
    // init the form
    this.createForm();
  }
  /**
   * initialisation of the formulaire
   */
  createForm():void
  {
    this.produitsform=this.fb.group
    ({
      ref:['',Validators.required], //champ obligatoire
      quantitie:'',
      prixunit:''
    });
  }
}
