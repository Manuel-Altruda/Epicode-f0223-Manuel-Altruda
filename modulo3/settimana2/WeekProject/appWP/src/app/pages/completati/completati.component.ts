import { Component, OnInit } from '@angular/core';
import { Todo, TodosService } from 'src/app/services/todos.service';

@Component({
  selector: 'app-completati',
  templateUrl: './completati.component.html',
  styleUrls: ['./completati.component.scss']
})
export class CompletedComponent implements OnInit {

  todos: Todo[] = [];
  isLoading: boolean = true;
  loading: any;

  constructor(private todosService: TodosService) { }

  ngOnInit(): void {
    this.loadCompletedTodos();
  }

  loadCompletedTodos(): void {
    this.todosService.getAllTodos()
     .then(todos => {

        this.todos = todos.filter(todo => todo.completed);
        this.isLoading = false;

        setTimeout(() => {
          this.isLoading = true;
        }, 2000);

      });
  }

  removeTodoById(id: number): void {
    this.todosService.removeTodoById(id)
      .then(() => {
        this.todos = this.todos.filter(todo => todo.id !== id);
      });
  }

}

