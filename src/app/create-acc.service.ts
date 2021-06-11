import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CreateAccService {

  constructor(private http:HttpClient) { }
  
  createAcc():Observable<any>{
    const body = {
      name: "",
      username: "",
      email: "",
      phone: "",
      address: {
          street: "",
          suite: "",
          city: "",
          zipcode: ""
      }
    }
    return this.http.post('https://jsonplaceholder.typicode.com/users', body)
  }
}
