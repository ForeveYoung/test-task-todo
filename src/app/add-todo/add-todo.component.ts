import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GetTodosService } from '../get-todos.service';
import { Todo } from '../models/todo-item.model';


@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {

  constructor(private getData:GetTodosService, private addTodoHttp:HttpClient) { }
  todoList: any;

  ngOnInit(){
    this.getData.getTodos().subscribe(
      (data:any) => {
        this.todoList = data;
      }
    )
  }

  onAddTask(opt:any){
    if(opt !== ' ' ){
      this.addTodoHttp.post('https://jsonplaceholder.typicode.com/todos', {
    userId: Math.round(Math.random() * 1000),
    title: opt,
    completed: false
  }).subscribe(
    todo => {
      this.todoList.push(todo);
      console.log(todo);
      console.log(this.todoList);
      
    }
  )
    }
  

    // console.log(this.todoList.title);
    
  }

}