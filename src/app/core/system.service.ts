import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user/user.class';
import { UserService } from '../user/user.service';


@Injectable({
  providedIn: 'root'
})
export class SystemService {

  currentUser : User = new User();
  
  constructor( private router: Router ) { }

  login(user:User){
    this.currentUser = user;
    this.router.navigate(['/home']);
  }
}
