import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAccountComponent } from './components/create-account/create-account.component';
import { TodolistComponent } from './components/todolist/todolist.component';


const routes: Routes = [
  { path:'', component: CreateAccountComponent},
  { path:'todolist', component:TodolistComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
