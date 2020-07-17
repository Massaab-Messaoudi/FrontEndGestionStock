import { HttpInterceptor,HttpRequest,HttpHandler, HttpHeaders, HttpEvent} from "@angular/common/http"
import{Observable} from 'rxjs';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
@Injectable()
export class XhrInterceptor implements HttpInterceptor
{
   constructor(private cookieservice:CookieService)
   {

   }
   intercept(req: HttpRequest<any>, next: HttpHandler):Observable<HttpEvent<any>>
   {
   // get the registrted login info from the login
   const token =   this.cookieservice.get('token');
  
   const headers = new HttpHeaders({ Authorization: 'Basic ' + token });
   // the methode clone for make a copy (give me a copy of tell object)
   const xhr=req.clone({
      headers:req.headers.set('authorization','Basic '+ token)
   });
 
    return next.handle(xhr);
   }
}