import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/router';
import { MenuItem } from './menu-item.class';
import { UserLoginComponent } from '../user/user-login/user-login.component';
import { Router } from '@angular/router';
import { SystemService } from '../core/system.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {   

  menuitems: MenuItem[]=[];

  constructor(private router: Router) { }

  ngOnInit(): void {
  
    
  
    this.menuitems = [
      new MenuItem("Home","/home", true),
      new MenuItem("Users","/user-list", true),
      new MenuItem("Vendors","/vendor-list", true),
      new MenuItem("Products","/product-list", true),
      new MenuItem("Requests","/request-list", true),
      new MenuItem("About","/about", true),
      new MenuItem("Logout","/user-login", true),
      //more will go here

    ]

  }

}
