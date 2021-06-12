import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Todo } from 'src/app/models/todo.model';
import { ActionsService } from 'src/app/services/actions.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent {

  @Input()todos:Todo[] = [];
  taskForm: FormGroup = this.fb.group({
    task : ['', Validators.required ]
  })
  userId: number = 201;
  constructor(private actionsService: ActionsService,
              private fb: FormBuilder) { }

  addTask() { 
    const config = {
      userId: this.userId,
      title: this.taskForm.value.task,
      completed: false
    }
    this.actionsService.addToDo(config).subscribe(
      (todo)=>{
        this.taskForm.reset();
        this.todos.unshift(todo);
        this.userId++;
      },
      (e) => console.error(e)
    )
  }

}