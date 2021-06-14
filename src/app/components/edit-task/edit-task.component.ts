import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Todo } from 'src/app/models/todo.model';
import { ActionsService } from 'src/app/services/actions.service';
import { AddTaskComponent } from '../add-task/add-task.component';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss',
              '../add-task/add-task.component.scss']
})
export class EditTaskComponent extends AddTaskComponent implements OnInit, OnDestroy {

  @Input() clickedItem: Todo;
  @Output() editTodoItem: EventEmitter<string> = new EventEmitter();
  editForm: FormGroup = this.fb.group({
    editTask : ['', Validators.required ]
  });
  subscription: Subscription;

  constructor(public actionsService: ActionsService,
              protected fb: FormBuilder) {
                super(actionsService, fb);
              }

  ngOnInit(): void { 
    this.editForm.get('editTask')?.patchValue(this.clickedItem.title);  
    this.taskForm.value.task = this.clickedItem.title;    
  }

  editTask(item: Todo){
    this.subscription = this.actionsService.editTodos(this.clickedItem.id, this.editForm.value.editTask).subscribe(
      (res: object) => {
        this.editTodoItem.emit(this.editForm.value.editTask);
        this.actionsService.displayEdit = false;        
      },
      (e) => console.error(e)
    )
  }

  onCancel() {
    this.actionsService.displayEdit = false;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
