import { Component, OnInit } from '@angular/core';
import { MuServiceService } from './../mu-service.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  public users: Array<any>;

  constructor(private userService: MuServiceService) {
    this.users = userService.getUsers();
  }

  ngOnInit() {
  }

}
