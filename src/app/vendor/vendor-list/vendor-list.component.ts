import { Component, OnInit } from '@angular/core';
import { Vendor } from '../vendor.class';
import { VendorService } from '../vendor.service'

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.css']
})
export class VendorListComponent implements OnInit {
  
  vendors : Vendor[] = [];
  errorMessage = "";

  constructor(private vendorService: VendorService) { }

  ngOnInit(): void {
    this.vendorService.list().subscribe(
      data => {
        this.vendors = data;
      },
      error => {
        this.errorMessage = error;
      }
    )
  }

}
