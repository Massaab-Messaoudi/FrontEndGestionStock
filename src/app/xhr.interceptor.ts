import { HttpInterceptor,HttpRequest,HttpHandler, HttpHeaders, HttpEvent} from "@angular/common/http"
import{Observable} from 'rxjs';
import { Injectable } from '@angular/core';
@Injectable()
export class XhrInterceptor implements HttpInterceptor
{
   
   intercept(req: HttpRequest<any>, next: HttpHandler):Observable<HttpEvent<any>>
   {

   const token =   btoa('root' + ':' + 'root');
   const headers = new HttpHeaders({ Authorization: 'Basic ' + token });
   // the methode clone for make a copy (give me a copy of tell object)
   const xhr=req.clone({
      headers:req.headers.set('authorization','Basic '+ token)
   });
 
    return next.handle(xhr);
   }
}