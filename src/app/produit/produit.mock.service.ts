//import the decorator injectable to be able to use (inject) this service in other component
import{Injectable} from'@angular/core'; 
import{Produit} from '../shared/Produit';
@Injectable()
export class ProduiMockService
{
   private Produits:Produit[]=[];
    constructor()
    {
     let P1: Produit = new Produit(1,'livre',50,20);
     let P2: Produit = new Produit(2,'Cahier',200,5.20);
     let P3: Produit = new Produit(3,'stylo',150,10);
     this.Produits.push(P1);
     this.Produits.push(P2);
     this.Produits.push(P3);
    }

    public getproduit():Produit[]
    {
      return this.Produits;  
    }
}
