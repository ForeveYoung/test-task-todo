import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Todo } from 'src/app/models/todo.model';
import { ActionsService } from 'src/app/services/actions.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit, OnDestroy {

  todoList: Todo[] = [];
  clickedItem: Todo;
  choosedItem: Todo;
  subscription: Subscription;
  removeItemSubscription: Subscription;
  constructor(public actionService: ActionsService) { }

  ngOnInit(): void {
    this.subscription = this.actionService.getTodos().subscribe(
      (res: Todo[]) => {
        this.todoList = res;    
      },
      (e) => console.log(e)
    )
  }

  onDelete(item: Todo) {    
    this.actionService.displayRemoveAlert = true;
    this.choosedItem = item;
  }

  onAdd() {
    this.actionService.displayAdd = true;
  }

  onEdit(item: Todo) {
    this.actionService.displayEdit = true;
    this.clickedItem = item;        
  }

  editTodoItem(title: string) {
    this.todoList.forEach( item => {      
      if (item.id === this.clickedItem.id) {
        item.title = title;
      }
    })
  }

  removeTodoItem() {
    this.todoList = this.todoList.filter((item: Todo) => item.id != this.choosedItem.id)
    this.removeItemSubscription = this.actionService.deleteTodos(this.choosedItem.id).subscribe(
      (res) => console.log(res),
      (e) => console.log(e)
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.removeItemSubscription.unsubscribe();
  }


}
