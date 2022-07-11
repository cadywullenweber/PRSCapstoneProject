import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../user.class';
import { UserService } from '../user.service';
import { __importDefault } from 'tslib';
import { fromEventPattern } from 'rxjs';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  user = new User;
  userForm: FormGroup = new FormGroup({});
  errorMessage = "";

  constructor(  
    private userSvc: UserService,
    private router: Router,
    // private route: ActivatedRoute,
    // private systemSvc: SystemService
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
  }
  onSubmit() {
    if (this.userForm.invalid) {
      // TODO: let the user know
      return;
    }

    // get the user data from the form
    const newUser = {
      ... this.user,
      ... this.userForm.value
    }

    // call the user service to post the data
    this.userSvc.postData(newUser).subscribe(
      resp => {
        this.user = resp as User;
        // now, redirect to the list
        //this.router.navigateByUrl("/user-list");
      },
        
    );

  }
}