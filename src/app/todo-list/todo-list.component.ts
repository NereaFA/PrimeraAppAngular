import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  todoList: string[] = ['Sacar al gato', "Montar un puzzle de mortadelo y filemon", "Investigar al investigador", "Terminar un crucigrama"]
}
