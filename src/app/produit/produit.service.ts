import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import{Observable} from 'rxjs';
import {API_URLS} from '../config/api.url.config';
import { Produit } from '../shared/Produit';


@Injectable()
export class ProduitService
{
 
   constructor(private http : HttpClient)
   {

   }

   getProduits():Observable<Produit[]>
   {
      
    return this.http.get<Produit[]>(API_URLS.PRODUIS_URL);
   }
   addProduit(prod :Produit):Observable<any>
   {
      return this.http.post(API_URLS.PRODUIS_URL,prod);
   }
   updateProduit(prod :Produit):Observable<any>
   {
      return this.http.put(API_URLS.PRODUIS_URL,prod);
   }
   deleteProduit(id :number):Observable<any>
   {
      //return this.http.delete<Produit>('$'+API_URLS.PRODUIS_URL + "/${prod}");
      console.log('id = '+id);
      return this.http.delete<Produit>(API_URLS.PRODUIS_URL+'/'+id);
      
      
     
   }
  
   errorHandler(error: HttpErrorResponse){
      return Observable.throw(error.message || "Server Error");
    }
}