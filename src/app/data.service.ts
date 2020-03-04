import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  firstService () {
    let params1: any = {userid:1}
    return this.http.get<any>('https://jsonplaceholder.typicode.com/posts/1/comments',{params:params1})
  }

  firstPost(data) {
    return this.http.post('https://jsonplaceholder.typicode.com/posts',data)
  }
  userLogin(data){
    return this.http.post(environment.BASE_URL+'api-auth-token/',data);
  }

  getToken() {
    return localStorage.getItem('token')
  }

  isLogged() {
    return !!localStorage.getItem('token')
  }
}
