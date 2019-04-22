import { Component, OnInit } from '@angular/core';
import { MuServiceService } from './../mu-service.service';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent implements OnInit {

  public users: Array<any>;

  constructor(private userService: MuServiceService) {
    this.users = userService.getUsers();
  }

  ngOnInit() {
  }

}
