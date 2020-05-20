import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
serverUrl:any = "http://localhost:8000"
signinForm : FormGroup;
regUser:boolean = true;
  message: any;
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.signinForm = new FormGroup({
      'username': new FormControl('', [Validators.required]),
      'password': new FormControl('', [Validators.required])
    });
  }

  registerUser(){
    let reqObj = {
      "username": this.signinForm.controls.username.value,
      "password": this.signinForm.controls.password.value
    }
    console.log(reqObj)
    const config = {headers: new HttpHeaders().set('Content-Type', 'application/json')};
    this.httpClient.post(this.serverUrl+"/register",reqObj,config).subscribe((data:any)=>{
      console.log(data)
      if(data.status){
        this.message = data.message
      }
    })
  }
  loginUser(){

    let reqObj = {
      "username": this.signinForm.controls.username.value,
      "password": this.signinForm.controls.password.value
    }
    console.log(reqObj)
    const config = {headers: new HttpHeaders().set('Content-Type', 'application/json')};
    this.httpClient.post(this.serverUrl+"/login",reqObj,config).subscribe((data:any)=>{
      console.log(data)
      if(data.status){
        this.message = data.token
      }
      else{
        this.message = data.message
      }
    })
  }
}
