import { Component, OnInit } from '@angular/core';
import{ProduitService} from './produit.service'
import{Produit} from '../shared/Produit';
import{FormGroup,FormBuilder,Validators} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

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
  constructor(private produitservice:ProduitService,private fb:FormBuilder,private route:ActivatedRoute) 
  {
    // init the form
    this.createForm();

   }

  ngOnInit(): void {
    this.initProduit ();
    // get the liste of produit from the server by the using 'produit.resolver.ts' and 'app.routing.module.ts'
    this.produits=this.route.snapshot.data.produits;
  }

  /**
   * get the liste of produit using 'HttpClient'
   */
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
    
    
    this.produitservice.deleteProduit(this.selectedProduit.id).subscribe
    (
      res => 
      {
        this.selectedProduit=new Produit();
        this.LoadProduit();
        this.operation='add';
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
