import { Component, OnInit, Input } from '@angular/core';
//import { stat } from 'fs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {HttpRequest} from '@angular/common/http';
import { Address } from './address';
import { User } from './user';
import { Contact } from './contact';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  user:User;
  address: Address;
  contact: Contact;
  firstName:string;
  lastName:string;
  street:string;
  city:string;
  state:string;
  postalCode:string;
  mobile:string;
  email:string;

  url = 'http://localhost:8080/users';
  //person = { firstName : 'sadsa'};
  http:HttpClient;

  constructor(http: HttpClient) {
    /*this.user = {
      firstName : '',
      lastName : '',
      this.address : address,
      mobile : '',
      email : ''
    };*/
    this.http = http;
  }

  submitForm() {
    console.log('Submit');
  }

  logData(x){
    console.log(x.value);
  }

  onSubmit(){

    let address = new Address(this.street, this.city, this.state, this.postalCode);
    let contact = new Contact(this.mobile, this.email);
    let user = new User(this.firstName, this.lastName, address, contact);
    console.log('in submit : '+(JSON.stringify(user)));
    let headers = new Headers({ 'Content-Type': 'application/json' });
    //let options = new RequestOptions({ headers: headers });
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    //return this.http.post(this.url, book, options)
    this.http.post(this.url, JSON.stringify(user), httpOptions).subscribe(response => {
      console.log('Response status : '+response);
      this.user = response as any;
    });
  }
}
