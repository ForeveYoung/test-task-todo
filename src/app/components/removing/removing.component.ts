import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../models/todo.model';
import { ActionsService } from '../../services/actions.service';

@Component({
  selector: 'app-removing',
  templateUrl: './removing.component.html',
  styleUrls: ['./removing.component.scss',
              '../add-task/add-task.component.scss']
})
export class RemovingComponent {

  @Input() choosedItem: Todo;
  @Input() todos: Todo[]=[];
  @Output() removeTodoItem: EventEmitter<Todo> = new EventEmitter();
  constructor(public actionsService: ActionsService) { }

  deleteItem() {
    this.actionsService.displayRemoveAlert = false;
    this.removeTodoItem.emit(this.choosedItem)
  }

  onCancel() {
    this.actionsService.displayRemoveAlert = false;
  }
}
