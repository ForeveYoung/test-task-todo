import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateAccountComponent } from './components/create-account/create-account.component';
import { TodolistComponent } from './components/todolist/todolist.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { EditTaskComponent } from './components/edit-task/edit-task.component';
import { RemovingComponent } from './components/removing/removing.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateAccountComponent,
    TodolistComponent,
    AddTaskComponent,
    EditTaskComponent,
    RemovingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
