import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTodoComponent } from './add-todo/add-todo.component';
//import { CreateAccountComponent } from './create-account/create-account.component';

const routes: Routes = [
  // {path: ' ', component: CreateAccountComponent},
   { path: 'add-todo', component: AddTodoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
