import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/product/product.class';
import { ProductService } from 'src/app/product/product.service';
import { User } from 'src/app/user/user.class';
import { UserService } from 'src/app/user/user.service';
import { RequestLine } from '../request-line.class';
import { UserRequest } from '../request.class';
import { RequestService } from '../request.service';


@Component({
  selector: 'app-request-detail',
  templateUrl: './request-detail.component.html',
  styleUrls: ['./request-detail.component.css']
})
export class RequestDetailComponent implements OnInit {
  requestid = 0;
  request!: UserRequest;
  users: User[] = [];
  requestlines: RequestLine[] | undefined;
  errorMessage = "";

  constructor(
    private requestService: RequestService,
    private userService: UserService,
    private router: ActivatedRoute) { }

  // add the following to your RequestService:
  // private requestlinessUrl = environment.backendUrl + "/api/requestlines";
  // getRequestLines(): Observable<Requestline[]> {
  //   return this.http.get(this.requestlinessUrl) as Observable<Requestline[]>
  // }

  ngOnInit(): void {

    this.requestid = this.router.snapshot.params["id"];

    // get the request using the passed in ID
    this.requestService.get(this.requestid).subscribe(
      {
        next: (data) => {
          this.request = data;
          // then go get the users
          alert(JSON.stringify(this.request))
          this.getUsers();
        },
        error: (e: any) => this.errorMessage = e
        // optional: , complete: console.log("complete")
      }
    );

  }

  getUsers() {
    // get the users
    this.userService.list().subscribe(
      {
        next: (data) => {
          this.users = data;
          // then merge request and users
          this.getRequestLines();
        },
        error: (e: any) => this.errorMessage = e
        // optional: , complete: console.log("complete")
      }
    );
  }
  getRequestLines() {
    // get the users
    this.requestService.getRequestLines().subscribe(
      {
        next: (data) => {
          this.requestlines = data;
          // then merge request and users
          this.mergeRequestsUsers();
          this.mergeRequestLines();
        },

        error: (e: any) => this.errorMessage = e

        // optional: , complete: console.log("complete")

      }

    );

  }

  mergeRequestsUsers() {
    // find user objects for each request
    var u = this.users.find(u => u.id == this.request.userId);
    if (u) {
      this.request.user = u; // add the user to the request
    }

  }

  mergeRequestLines() {
    // find request line objects for each request
    alert(JSON.stringify(this.requestlines))
    var rls = this.requestlines?.filter(rl => rl.requestId == this.requestid);
    if (rls) {
      alert(JSON.stringify(rls))
      this.request.requestlines = rls; // add the user to the request
      this.requestlines = rls;
    }

  }



}
