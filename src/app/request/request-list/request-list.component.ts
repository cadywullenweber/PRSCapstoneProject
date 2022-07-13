import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';
import { UserRequest } from '../request.class'
import { UserService } from 'src/app/user/user.service';
import { User } from 'src/app/user/user.class';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent implements OnInit {
  requests: UserRequest[] = [];
  users: User[] = [];
  errorMessage = "";

  constructor(private requestService: RequestService,
    private userService: UserService) { }

  ngOnInit(): void {

    this.requestService.list().subscribe(
      {
        next: (data) => {
          this.requests = data;
          this.getUsers();
        },
        error: (e: any) => this.errorMessage = e
      }
    );
  }
  getUsers() {
    this.userService.list().subscribe(
      {
        next: (data) => {
          this.users = data;
          //alert(JSON.stringify(this.users))
          this.mergeRequestsUsers();
        },
        error: (e: any) => this.errorMessage = e
      }
    );
  }

  mergeRequestsUsers() {
    for (let req of this.requests) {
      console.log(req.id)
      var u = this.users.find(u => u.id == req.userId);
      if (u) {
        req.user = u;
      }
    }
    //alert(JSON.stringify(this.requests))
  }
}
