import { Injectable, Injector } from '@angular/core';
import {HttpInterceptor} from '@angular/common/http';
import {DataService} from './data.service'

@Injectable({
  providedIn: 'root'
})
export class TokenService implements HttpInterceptor {

  constructor(private injector: Injector, private data:DataService) { }


  intercept (req, next) {
    // let authSrv = this.injector.get(DataService);

    let tokenizedReq = req.clone ({
      setHeaders: {
        Authorization: this.data.getToken() ? `Token ${this.data.getToken()}` : ''
      }
    })

    return next.handle(tokenizedReq)
  }
}
