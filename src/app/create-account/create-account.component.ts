import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent implements OnInit {

  constructor(private httpClient:HttpClient) { }
  form:FormGroup = new FormGroup({
    name : new FormControl('', Validators.required),
    username : new FormControl('', Validators.required),
    email : new FormControl('', [Validators.required, Validators.email]),
    number : new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$") , Validators.maxLength(10)]),
    adress : new FormControl('', Validators.required),
    city : new FormControl('', Validators.required),
    zip : new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.maxLength(5)]),
  })
  
  users: any;
  name:any;
  username: any;
  email: any;
  number: any;
  adress: any;
  suite: any;
  city: any;
  zip: any;



  getData(){
    this.httpClient.get('https://jsonplaceholder.typicode.com/users').subscribe(
      (data:any) => {
        this.users = data;
        console.log(this.users);
        
      }
    )
  }

  ngOnInit(): void {
    this.getData();
  }

  addUser(){
    this.httpClient.post('https://jsonplaceholder.typicode.com/users', {
      name: this.name,
      username: this.username,
      email: this.email,
      phone: this.number,
      address: {
          street: this.adress,
          suite: this.suite,
          city: this.city,
          zipcode: this.zip
      }
    
    }).subscribe(
      (todo:any)=>{
        this.users.push(todo);
      }

    )
    console.log('after request');
    
    this.getData();
    
  }

}
 