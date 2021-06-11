import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { GetTodosService } from './get-todos.service';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TodoItemComponent,
    CreateAccountComponent,
    AddTodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [GetTodosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
