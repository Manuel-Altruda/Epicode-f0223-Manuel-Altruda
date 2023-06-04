import { Component, OnInit } from '@angular/core';
import { Todo, TodosService } from 'src/app/services/todos.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [];
  loading: boolean = true;
  newTodoTitle: string = '';
  loadCompletedTodos: any;

  constructor(private todosService: TodosService) {}

  ngOnInit(): void {
    this.loadTodos();
  }

  loadTodos(): void {
    this.loading = true;
    this.todosService.getAllTodos().then((todos) => {
      this.todos = todos;
      this.loading = true;

      setTimeout(() => {
        this.loading = false;
      });
    });
  }

  addTodo(): void {
    if (this.newTodoTitle.trim() === '') {
      return;
    }
    const newTodo: Todo = {
      id: 0,
      title: this.newTodoTitle,
      completed: false,
    };

    this.loading = true;

    setTimeout(() => {
      this.todosService.addTodo(newTodo).then((todo) => {
        this.todos.push(todo);
        this.newTodoTitle = '';
        this.loading = false;
      });
    }, 2000);

    if (newTodo.completed) {
      this.todosService.addTodoToCompleted(newTodo.id).then(() => {
        this.loadCompletedTodos();
      });
    }
  }

  removeTodoById(id: number): void {
    this.todosService.removeTodoById(id).then(() => {
      this.todos = this.todos.filter((todo) => todo.id !== id);
    });
  }

  updateTodoById(id: number, changes: Partial<Todo>): void {
    this.todosService.updateTodoById(id, changes).then((updatedTodo) => {
      if (updatedTodo) {
        const index = this.todos.findIndex((todo) => todo.id === id);
        if (index !== -1) {
          this.todos[index] = updatedTodo;
        }
      }
    });
  }
}
