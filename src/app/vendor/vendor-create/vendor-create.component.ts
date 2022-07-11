import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Vendor } from '../vendor.class';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-vendor-create',
  templateUrl: './vendor-create.component.html',
  styleUrls: ['./vendor-create.component.css']
})
export class VendorCreateComponent implements OnInit {
  vendor = new Vendor;
  vendorForm: FormGroup = new FormGroup({});
  errorMessage = "";

  constructor(  
    private vendorService: VendorService,
    private router: Router,
    ) { }
 
    ngOnInit(): void {
    this.vendorForm = new FormGroup(
      {
        name: new FormControl(this.vendor.name, 
          [ Validators.required, 
            Validators.maxLength(30)
          ]),
  
        address: new FormControl(this.vendor.address, 
          [ Validators.required, 
            Validators.maxLength(30)
          ]),
    
        city: new FormControl(this.vendor.city, 
          [ 
            Validators.maxLength(30)
          ]),
  
        state: new FormControl(this.vendor.state, 
          [ 
            Validators.maxLength(30)
          ]),

        zip: new FormControl(this.vendor.zip, 
          [ 

           ]),

        phone: new FormControl(this.vendor.phone, 
          [  

          ]),

        email: new FormControl(this.vendor.email,
          [

          ])

    })
  }
    onSubmit() {
      if (this.vendorForm.invalid) {
        // TODO: let the user know
        return;
      }
  
      // get the vendor data from the form
      const newVendor = {
        ... this.vendor,
        ... this.vendorForm.value
      }
  
      // call the Vendor service to post the data
      this.vendorService.postData(newVendor).subscribe(
        resp => {
          this.vendor = resp as Vendor;
          // now, redirect to the list
          //this.router.navigateByUrl("/user-list");
        },
          
      );
    }

}
