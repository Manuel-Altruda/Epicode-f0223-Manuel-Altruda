import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  private todos: Todo[] = [];
  private loading = false;

  constructor() { }

  getAllTodos(): Promise<Todo[]> {
    if (this.loading) {
      return new Promise<Todo[]>((resolve) => {
        setTimeout(() => {
          resolve(this.todos);

        }, 2000);
      });
    } else {

      return new Promise<Todo[]>((resolve) => {
      setTimeout(() => {
        fetch('/assets/db.json')
          .then(response => response.json())
          .then(data => {
            this.todos = data.todos;
            this.loading = false;
            resolve(this.todos);
          });
      }, 2000);
    });
  }
}

  addTodo(todo: Todo): Promise<Todo> {
    return new Promise<Todo>((resolve) => {
      setTimeout(() => {
        const newTodo: Todo = {
          id: this.generateId(),
          title: todo.title,
          img: todo.img,
          completed: false
        };
        this.todos.push(newTodo);
        resolve(newTodo);
      }, 2000);
    });
  }

  removeTodoById(id: number): Promise<void> {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        const index = this.todos.findIndex(todo => todo.id === id);
        if (index !== -1) {
          this.todos.splice(index, 1);
        }
        resolve();
      }, 2000);
    });
  }

  updateTodoById(id: number, changes: Partial<Todo>): Promise<Todo | null> {
    return new Promise<Todo | null>((resolve) => {
      setTimeout(() => {
        const todo = this.todos.find(t => t.id === id);
        if (todo) {
          Object.assign(todo, changes);
          resolve(todo);
        } else {
          resolve(null);
        }
      }, 2000);
    });
  }

  private generateId(): number {
    const maxId = this.todos.reduce((max, todo) => (todo.id > max ? todo.id : max), 0);
    return maxId + 1;
  }
}

export interface Todo {
  img: undefined;
  id: number;
  title: string;
  completed: boolean;
}
