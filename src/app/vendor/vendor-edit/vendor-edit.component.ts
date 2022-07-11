import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Vendor } from '../vendor.class';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-vendor-edit',
  templateUrl: './vendor-edit.component.html',
  styleUrls: ['./vendor-edit.component.css']
})
export class VendorEditComponent implements OnInit {

  vendor: Vendor = new Vendor();
  vendorid: number = 0;
  errorMessage = "";
  vendorForm: FormGroup = new FormGroup({});
  
  constructor(
    private vendorService: VendorService,
    private router: ActivatedRoute,
    private routes: Router
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
      if (this.vendorForm.invalid){
        this.errorMessage = "Form is invalid.";
        this.errorMessage += this.vendorForm.errors;
        //<span *ngIf="userForm.controls['name'].errors">Please enter a name</span>
        
        return;}
     
        const putVendor = {
          ... this.vendor,
          ... this.vendorForm.value
        }
        this.vendorService.updateVendor(putVendor, this.vendor.id).subscribe(
          {next: (data: Vendor) => {
            this.vendor = data,
            this.routes.navigateByUrl("/user-list");
          },
         error: (e: any) => this.errorMessage = "Error: " + e,
         }
        );
      }
     }
    