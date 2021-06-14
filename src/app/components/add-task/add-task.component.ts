import { Component, Input, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Todo, AddTodo } from 'src/app/models/todo.model';
import { ActionsService } from 'src/app/services/actions.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnDestroy {

  @Input()todos: AddTodo[] = [];
  taskForm: FormGroup = this.fb.group({
    task : ['', Validators.required ]
  })
  userId: number = Math.random();
  subscription: Subscription;

  constructor(protected actionsService: ActionsService,
              protected fb: FormBuilder) { }

  addTask() { 
    const config = {
      userId: this.userId,
      title: this.taskForm.value.task,
      completed: false,
    }    

    this.subscription = this.actionsService.addToDo(config).subscribe(
      (todo)=>{
        this.taskForm.reset();
        this.todos.unshift(todo);
      },
      (e) => console.error(e)
    )
    this.actionsService.displayAdd = false;
  }

  onCancel() {
    this.actionsService.displayAdd = false;
  }

  ngOnDestroy() {
    //this.subscription.unsubscribe();
  }
}
