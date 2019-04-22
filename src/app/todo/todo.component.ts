import { Component, OnInit } from '@angular/core';
import { TodoServiceService } from './../todo-service.service';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  public todos: Array<any>;
  public inputed: String;



  constructor(private todoServ: TodoServiceService) {
    this.todos = todoServ.getTodos();
  }

  addTodo(){
    this.todoServ.addTodo(this.inputed);
    this.inputed = '';
  }

  deletTodo(id: Number){
    this.todoServ.deletTodo(id);
  }

  checkTodo(id: Number){
    this.todoServ.checkTodo(id);
  }


  ngOnInit() {
  }

}
