import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { Todo } from '../models/todo.model';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ActionsService {

  constructor(public http: HttpClient) { }

  addToDo(config: Todo) {
    return this.http.post<Todo>('https://jsonplaceholder.typicode.com/todos', config)
      .pipe(catchError(e => throwError(e)));
  }

  getTodos() {
    return this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos')
      .pipe(catchError(e => throwError(e)));
  }
}
