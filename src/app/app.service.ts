import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import{API_URLS} from './config/api.url.config';
import{Produit} from './shared/Produit';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class AppService {
 
  authenticated:boolean=false;
  constructor(private http:HttpClient,private cookieservice:CookieService) { 
    
  }

    /**
   * 
   * @param UserLogin in this obj we found the username and the pw
   * @param callback the function (method) of the work to do after the send of the req to the server
   */
  Login(UserLogin,callback){
    const token=btoa(UserLogin.username + ':' + UserLogin.password);
    // enregistre the login info in the cookie
    this.cookieservice.set('token',token);
    const headers = new HttpHeaders({ Authorization: 'Basic ' + token });
    const rep= this.http.get("http://localhost:8080/",{headers,responseType: 'text' as 'json'});
    rep.subscribe((data => {
      if(data=='logged successfully')
      {
        this.authenticated=true; 
        return callback && callback();
      }
      else
      {
        this.authenticated=false;
        return'';
      }
    }));
  }
  getProduit()
  {
    let username='root'
    let password='root'
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
   return  this.http.get<Produit[]>("http://localhost:8080/api/produit",{headers});
  }
}
