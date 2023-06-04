import { Component, OnInit } from '@angular/core';
import { Todo, TodosService } from 'src/app/services/todos.service';

@Component({
  selector: 'app-completati',
  templateUrl: './completati.component.html',
  styleUrls: ['./completati.component.scss']
})
export class CompletedComponent implements OnInit {
  completedTodos: Todo[] = [];
  todos: Todo[] = [];
  loading: boolean = true;


  constructor(private todosService: TodosService) { }

  ngOnInit(): void {
    this.loadCompletedTodos();
  }

  loadCompletedTodos(): void {
    this.todosService.getAllCompletedTodos()
     .then(completedTodos => {

        this.completedTodos = completedTodos.filter(todo => todo.completed);
        this.loading = true;

        setTimeout(() => {
          this.loading = false;
        }, );

      });
  }

  removeTodoById(id: number): void {
    this.todosService.removeTodoById(id)
      .then(() => {
        this.todos = this.todos.filter(todo => todo.id !== id);
      });
  }

}

