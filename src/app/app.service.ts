import { Injectable } from '@angular/core';


@Injectable()
export class AppService {
  authenticated:boolean=false;
  constructor() { }
  /**
   * 
   * @param UserLogin in this obj we found the username and the pw
   * @param callback the function (method) of the work to do after the send of the req to the server
   */
  Login(UserLogin,callback)
  {
    /**
     * check if credentials!=null && username and the pw are correct
     */
    if(UserLogin && UserLogin.username == 'root' && UserLogin.password == "root")
    {
      this.authenticated=true;
      // check that callback is valide statment and execute it
       return callback && callback();
    }else
    {
      this.authenticated=false;
    }

   return '';
  } 
}
