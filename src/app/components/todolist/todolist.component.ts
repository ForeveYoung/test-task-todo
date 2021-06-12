import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo.model';
import { ActionsService } from 'src/app/services/actions.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit {

  todoList: Todo[] = [];
  constructor(public actionService: ActionsService) { }

  ngOnInit(): void {
    this.actionService.getTodos().subscribe(
      (res: Todo[]) => {
        this.todoList = res;    
      }
    )
  }
}
