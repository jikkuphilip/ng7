import { Injectable } from '@angular/core';
import {HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders} from '@angular/common/http' 
import { observable, Observable } from 'rxjs';
import { environment } from '../environments/environment';
@Injectable()
export class TokenInterceptorService implements HttpInterceptor {
  URL: string

  constructor() { }

  intercept (req:HttpRequest<any>,next:HttpHandler) : Observable<HttpEvent<any>> {
  let headers = new HttpHeaders ();
  this.URL = environment.BASE_URL+req.urlWithParams;
  const token = localStorage.getItem('token');
  if (token) {
    headers = headers.set('auth', token)
  }
  const authRequest = req.clone({headers:headers,url:this.URL});
  return next.handle(authRequest);


  }
} 