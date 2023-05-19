import { Component } from '@angular/core';

interface Todo {
  name: string;
  description?: string;
  deleted?: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Todo Application';
  todos: Todo[] = [];
  deletedTodos: Todo[] = [];
  newTodoName: string = '';
  newTodoDescription: string = '';

  /**
   * Adds a new todo to the list of todos.
   */
  addTodo(): void {
    if (this.newTodoName && this.newTodoName.trim() !== '') {
      const newTodo: Todo = {
        name: this.newTodoName,
        description: this.newTodoDescription
      };
      this.todos.push(newTodo);
      this.newTodoName = '';
      this.newTodoDescription = '';
    }
  }

  /**
   * Tracks todos by their unique identifier.
   * Replace `todo.name` with an appropriate unique identifier for your todos.
   *
   * @param index The index of the todo item.
   * @param todo The todo item.
   * @returns The unique identifier for the todo.
   */
  trackByTodo(index: number, todo: Todo): string {
    return todo.name;
  }

  /**
   * Deletes a todo from the list of todos and applies the flip-out animation.
   *
   * @param todo The todo item to be deleted.
   */
  deleteTodo(todo: Todo): void {
    const index = this.todos.indexOf(todo);
    if (index !== -1) {
      this.todos[index].deleted = true;
      setTimeout(() => {
        this.todos.splice(index, 1);
      }, 500); // Delay removal to allow animation
    }
  }

  /**
   * Moves a todo from the deleted todos back to the list of todos.
   *
   * @param todo The deleted todo item to be restored.
   */
  deleteTodoFromDeleted(todo: Todo): void {
    const index = this.deletedTodos.indexOf(todo);
    if (index !== -1) {
      this.deletedTodos.splice(index, 1);
      this.todos.push(todo);
    }
  }
}
