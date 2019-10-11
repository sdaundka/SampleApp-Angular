import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {HttpRequest} from '@angular/common/http';
import { Address } from './address';

export class Contact {

  mobile:String;
  email:String;

  constructor(mobile?:string, email?:string){
    this.mobile = mobile;
    this.email = email;
  }


}
