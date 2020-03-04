import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service'
import { ToastSrvService} from '../toast-srv.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  users : any;
  qtns : any;
  pipeval: number

  constructor(private data: DataService, private toast: ToastSrvService) { }

  ngOnInit() {
    this.pipeval = 2;
    console.log('history',history)
    this.data.firstService().subscribe(data => {
      this.users = data
      console.log('users', this.users)
    });

  }

  postData (data) {
    this.data.firstPost(data).subscribe(resp => {
      console.log('successfully posted')
      this.toast.Success('successfully posted')
    })
  }


}
