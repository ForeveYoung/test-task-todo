import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetTodosService {

  constructor(private getData:HttpClient) { }
  
  getTodos():Observable<any>{
    return this.getData.get('https://jsonplaceholder.typicode.com/todos');
  }
}
