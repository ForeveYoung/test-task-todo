import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { AddTodo, Todo } from '../models/todo.model';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ActionsService {

  displayEdit: boolean = false;
  displayAdd: boolean = false;
  displayRemoveAlert: boolean = false;
  constructor(public http: HttpClient) { }

  addToDo(config: AddTodo) {
    return this.http.post<AddTodo>('https://jsonplaceholder.typicode.com/todos', config)
      .pipe(catchError(e => throwError(e)));
  }

  getTodos() {
    return this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos')
      .pipe(catchError(e => throwError(e)));
  }
  
  deleteTodos(id: number) {
    return this.http.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .pipe(catchError(e => throwError(e)));
  }

  editTodos(id: number, editedTitle: string) {
    return this.http.put(`https://jsonplaceholder.typicode.com/todos/${id}`, editedTitle)
  }
}
