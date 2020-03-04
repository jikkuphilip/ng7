import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import {HttpClient} from '@angular/common/http';
import {DataService} from 'src/app/data.service';
import {ToastSrvService} from '../toast-srv.service'
import { from } from 'rxjs';
import {Router} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: object = {}

  constructor(private toast: ToastSrvService, private route: Router, private http:HttpClient,private apisrv:DataService) { }

  ngOnInit() {
  }

  login () {
    console.log(localStorage.getItem('token'))
    this.apisrv.userLogin(this.user).subscribe((res:any) => {
      res.token ? localStorage.setItem('token', res.token) : ''
      let token = res.token
      if (token) {
         this.route.navigate(['home'],{state: {data: {user:this.user}}})
      this.toast.Success('successfully loggedin')
      console.log('locxalstorage',localStorage.getItem('token'))
      }
    })
    

  }

}
