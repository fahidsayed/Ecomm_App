import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptorInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token=localStorage.getItem('ecomm_jwt');
    if(token){
      const cloneReq = request.clone({
        headers:request.headers.set('Authorization','Bearer '+token)
      });
      return next.handle(cloneReq);      
    }else{
      return next.handle(request);
    }
  }
}
