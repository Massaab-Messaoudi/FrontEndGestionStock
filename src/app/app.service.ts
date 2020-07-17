import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import{API_URLS} from './config/api.url.config';
import{Produit} from './shared/Produit';

@Injectable()
export class AppService {
 
  authenticated:boolean=false;
  constructor(private http:HttpClient) { 
    
  }
  /**
   * 
   * @param UserLogin in this obj we found the username and the pw
   * @param callback the function (method) of the work to do after the send of the req to the server
   */
  login(UserLogin,callback)
  {
    /**
     * check if credentials!=null 
     */
    
    if(UserLogin && UserLogin.username=="root"&&UserLogin.password=='root')
    {


     // btoa meth js for encryp username && pw
      const token=btoa(UserLogin.username + ':' + UserLogin.password);
      const header=new HttpHeaders(UserLogin? {authorization : 'Basic ' + token } : {});
     
      this.http.get(API_URLS.USER_URL,{headers:header}).subscribe(rep=>{
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
      return '';
    }
  } 

  Login(UserLogin,callback){
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(UserLogin.username + ':' + UserLogin.password) });
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
