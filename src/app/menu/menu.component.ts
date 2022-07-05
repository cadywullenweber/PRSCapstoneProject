import { Component, OnInit } from '@angular/core';
import { MenuItem } from './menu-item.class';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menuitems: MenuItem[]=[];

  constructor() { }

  ngOnInit(): void {
    this.menuitems = [
      new MenuItem("Home","/home", true),
      new MenuItem("Users","/user-list", true),
      new MenuItem("Vendors","/vendor-list", true),
      new MenuItem("Products","/product-list", true),
      new MenuItem("Requests","/request-list", true),
      new MenuItem("About","/about", true),
      //more will go here
    ]
  }

}
