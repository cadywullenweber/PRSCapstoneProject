import { Component, OnInit } from '@angular/core';
import { User } from '../user.class';
import { UserService } from '../user.service'

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users : User[] = [];
  errorMessage = "";
  
  constructor(private userService: UserService) { }

  ngOnInit(): void {

    this.userService.list().subscribe(
      data => {
        this.users = data;
      },
      error => {
        this.errorMessage = error;
      }
    )
  }

}
