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
    if(UserLogin){
    const token=btoa(UserLogin.username + ':' + UserLogin.password);
    // enregistre the login info in the cookie
    this.cookieservice.set('token',token);
    const headers = new HttpHeaders({ Authorization: 'Basic ' + token });
    const rep= this.http.get(API_URLS.USER_URL,{headers:headers}).subscribe(rep=>{
      if(rep && rep['name'])
      {
        this.authenticated=true;
      }else
      {
        this.authenticated=false;
      }
      // check that callback is valide statment and execute it
      return callback && callback();
      });
     }
      else
      {
        this.authenticated=false;
        return'';
      }
   
  }

  Logout(callback)
  {
    return callback && callback();
  }

}
