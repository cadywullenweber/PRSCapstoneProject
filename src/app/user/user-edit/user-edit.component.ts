import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user.class';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  user: User = new User();
  userid: number = 0;
  errorMessage = "";
  userForm: FormGroup = new FormGroup({});
  
  constructor(
    private userService: UserService,
    private router: ActivatedRoute,
    private routes: Router
  ) { }

  ngOnInit(): void {
    this.userForm = new FormGroup(
      {
        username: new FormControl(this.user.username, 
          [ Validators.required, 
            Validators.maxLength(30)
          ]),
      
        password: new FormControl(this.user.password, 
          [ Validators.required, 
            Validators.maxLength(30)
          ]),

        firstname: new FormControl(this.user.firstname, 
          [ Validators.required, 
            Validators.maxLength(30)
          ]),
  
        lastname: new FormControl(this.user.lastname, 
          [ Validators.required, 
            Validators.maxLength(30)
          ]),
    
        phone: new FormControl(this.user.phone, 
          [ 
            Validators.maxLength(30)
          ]),
  
        email: new FormControl(this.user.email, 
          [ Validators.email, 
            Validators.maxLength(30)
          ]),

        isReviewer: new FormControl(this.user.isReviewer, 
          [  ]),

        isAdmin: new FormControl(this.user.isAdmin, 
          [  ]),

    })
    this.userid = this.router.snapshot.params["id"]
    this.userService.getUser(this.userid).subscribe(
      {
        next: (data) => {
          this.userForm.patchValue(this.user);
        },
        error: (e: any) => this.errorMessage = "Error: " + e
      }
    );
  }
  onSubmit() {
    if (this.userForm.invalid){
      this.errorMessage = "Form is invalid.";
      this.errorMessage += this.userForm.errors;
      //<span *ngIf="userForm.controls['name'].errors">Please enter a name</span>
      
      return;}
   
      const putUser = {
        ... this.user,
        ... this.userForm.value
      }
      this.userService.updateUser(putUser, this.user.id).subscribe(
        {next: (data: User) => {
          this.user = data,
          this.routes.navigateByUrl("/user-list");
        },
       error: (e: any) => this.errorMessage = "Error: " + e,
       }
      );
    }
   }
   