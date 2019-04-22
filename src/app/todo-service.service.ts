import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {
public todoList: Array<any> = [{descr: 'One', flag: false, id: 0}];
public counter: Number = 1;

public getTodos(): Array<any> {
  return this.todoList;
};
public addTodo(item: String) {
  this.todoList.push({descr: item, flag: false, id: this.counter});
  this.counter = this.counter + 1;
  console.log(this.todoList);
}
public checkTodo(id: Number) {
  for (let i = 0; i < this.todoList.length; i++) {
    if (this.todoList[i].id === id) {
      this.todoList[i].flag = !this.todoList[i].flag
      console.log(this.todoList);
    }
  }
}
public deletTodo(id: Number) {
  for (let i = 0; i < this.todoList.length; i++) {
    if (this.todoList[i].id === id) {
      this.todoList.splice(i, 1);
      console.log(this.todoList);
    }
  }
}

  constructor() { }
}
