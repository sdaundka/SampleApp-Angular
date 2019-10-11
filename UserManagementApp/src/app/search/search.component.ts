import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../user/user';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  firstName:string;
  url = 'http://localhost:8080/users';
  http:HttpClient;
  user:User;

  constructor(http:HttpClient) {
    this.http = http;
   }

  ngOnInit() {
  }

  onSearchUserDetails(){
    this.user = null;
    this.http.get<User>(this.url+'/'+this.firstName).subscribe(response => {
      console.log('Searched Data : '+JSON.stringify(response));
      this.user = response;
    });
  }

}
