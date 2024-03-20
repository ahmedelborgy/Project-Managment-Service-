import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class GlobalInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
   
   
    //const token=localStorage.getItem('token');
  //  const basUrl:string='https://upskilling-egypt.com:3003/docs/#/Users/post_api_v1/'
   //const basUrl:string='https://upskilling-egypt.com:3003/api/v1/'
    const token = localStorage.getItem('userToken');
    const baseUrl: string = 'https://upskilling-egypt.com:3003/api/v1/';
  
    let Headers = request.clone({
      url: baseUrl + request.url,
      setHeaders:{
        'Authorization':`Bearer ${token}`
      }
    })
    return next.handle(Headers)
};

}


