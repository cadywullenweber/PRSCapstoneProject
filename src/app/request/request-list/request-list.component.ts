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
  requests : UserRequest[] = [];


  constructor(private requestService: RequestService,
    private userService: UserService) { }

  ngOnInit(): void {
    this.requestService.list().subscribe(
      data => {
        this.requests = data;
        //this.getUsers();
      }
    )
  }
//getUsers()

//mergeRequestsUsers()

}
