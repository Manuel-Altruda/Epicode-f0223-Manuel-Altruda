import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './pages/todo/todo.component';
import { CompletedComponent } from './pages/completati/completati.component';
import { TodosService } from './services/todos.service';
import { Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: TodoComponent },
  { path: 'completed', component: CompletedComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    CompletedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [TodosService],
  bootstrap: [AppComponent]
})

export class AppModule { }


