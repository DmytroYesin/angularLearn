import { Component } from '@angular/core';
import { UserListComponent } from './user-list/user-list.component';
import { UserTableComponent } from './user-table/user-table.component';
import { MuServiceService } from './mu-service.service';
import { TodoComponent } from './todo/todo.component';
import { TodoServiceService } from './todo-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ MuServiceService, TodoServiceService ]
})
export class AppComponent {
  title = 'my-app';

  dateNow : Date = new Date();

  onButtonClicked(){
    this.title = "button clicked!";
  }
}
