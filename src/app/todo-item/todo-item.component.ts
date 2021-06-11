import { Component, OnInit } from '@angular/core';
import { GetTodosService } from '../get-todos.service';
import { Todo } from '../models/todo-item.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit{

  constructor(private getTodoData: GetTodosService) { }
  data: any;

  ngOnInit(){
      this.getTodoData.getTodos().subscribe(
        (data) => {
          this.data = data;
          console.log(data);
          
        }
      )

  }

  onEdit(item:any){
    console.log(item);
    
  }


  onRemove(id:number){
    this.data = this.data.filter((item:any) => item.userId != id);
    console.log(id);
    
  }



}
