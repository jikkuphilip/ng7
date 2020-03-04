import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import {DataService} from './data.service'

@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate {
constructor (private auth: DataService, private route : Router) {

}

canActivate () {
  if (this.auth.isLogged()) {
    return true
  }
  else {
    this.route.navigate([''])
    return false
  }
}
  
}
