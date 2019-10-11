import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {HttpRequest} from '@angular/common/http';
import { Address } from './address';
import { Contact } from './contact';

export class User {

  firstName:string;
  lastName:string;
  address:Address;
  contact:Contact;

  constructor(firstName?:string, lastName?:string, address?:Address, contact?:Contact){
    this.firstName = firstName;
    this.lastName = lastName;
    this.address = address;
    this.contact = contact;
  }


}
