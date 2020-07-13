import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import{API_URLS} from './config/api.url.config';


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
  Login(UserLogin,callback)
  {
    /**
     * check if credentials!=null 
     */
    
    if(UserLogin && UserLogin.username=="root"&&UserLogin.password=='root')
    {
      this.authenticated=true;
      // check that callback is valide statment and execute it
      return callback && callback();

     /* // btoa meth js for encryp un and pw
      const token=btoa(UserLogin.username + ':' + UserLogin.password);
      const header=new HttpHeaders(UserLogin? {authorization : 'Basic' + token } : {});
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
      });*/
      
    }
    else
    {
      this.authenticated=false;
      return '';
    }

   
  } 
}
