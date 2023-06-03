import { Component, OnInit } from '@angular/core';
import { Todo, TodosService } from 'src/app/services/todos.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [];
  isLoading: boolean = true;
  loading: any;
  newTodoTitle: string = '';

  constructor(private todosService: TodosService) { }

  ngOnInit(): void {
    this.loadTodos();
  }

  loadTodos(): void {
    this.todosService.getAllTodos()
      .then(todos => {

        this.todos = todos
        this.isLoading = false;

        setTimeout(() => {
          this.isLoading = true;
        }, 2000);

      });
  }

  addTodo(): void {
    if (this.newTodoTitle.trim() === '') {
      return;
    }
    const newTodo: Todo = {
      id: 0,
      title: this.newTodoTitle,
      img: undefined,
      completed: false,
    };

    this.todosService.addTodo(newTodo)

      .then(todo => {

        this.todos.push(todo);
        this.newTodoTitle = '';

      });
  }

  removeTodoById(id: number): void {
    this.todosService.removeTodoById(id)
      .then(() => {
        this.todos = this.todos.filter(todo => todo.id !== id);
      });
  }

  updateTodoById(id: number, changes: Partial<Todo>): void {
    this.todosService.updateTodoById(id, changes)
      .then(updatedTodo => {
        if (updatedTodo) {
          const index = this.todos.findIndex(todo => todo.id === id);
          if (index !== -1) {
            this.todos[index] = updatedTodo;
          }
        }
      });
  }
}
