import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SystemService } from 'src/app/core/system.service';
import { User } from '../user.class';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  currentUser: User = new User;
  userLoginForm: FormGroup = new FormGroup({});
  errorMessage: string ="";

  constructor(private systemService: SystemService,
    private userService: UserService,
    private router: Router) { }

  ngOnInit(): void {
    this.userLoginForm = new FormGroup(
      
      {username: new FormControl("cady",
      [Validators.required,
      Validators.maxLength(30)]),
      
      password: new FormControl("password",
      [Validators.required,
      Validators.maxLength(30)])})
  }
  login()
    {
      const newUserLogin= {
      ... this.currentUser,
      ... this.userLoginForm.value
    }

    this.userService.login(newUserLogin.username, newUserLogin.password).subscribe(
      {
        next: (data) => {
          this.systemService.login(data as User)
          this.router.navigateByUrl("/home");
        },
        error: (e: any) => this.errorMessage = "Error: " + e
      }
    )
}
}
