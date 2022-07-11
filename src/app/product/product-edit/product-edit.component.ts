import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product.class';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  product: Product = new Product();
  productid: number = 0;
  errorMessage = "";
  productForm: FormGroup = new FormGroup({});

  constructor(
    private productService: ProductService,
    private router: ActivatedRoute,
    private routes: Router
  ) { }

  ngOnInit(): void {

    this.productForm = new FormGroup(
  {
    partNbr: new FormControl(this.product.partnbr,
      [Validators.required,
        Validators.maxLength(30)]),

    name: new FormControl(this.product.name,
      [Validators.required,
        Validators.maxLength(30)]),
    
    price: new FormControl(this.product.price,
      [Validators.required,
      Validators.min(0)]),

    unit: new FormControl(this.product.unit,
      [Validators.required,
        Validators.maxLength(30)]),
    
    photoPath: new FormControl(this.product.photopath,
      [Validators.maxLength(255)]),

    vendorId: new FormControl(this.product.vendorid,
      [Validators.required])
  })
    
    this.productid = this.router.snapshot.params["id"]
    this.productService.getProduct(this.productid).subscribe(
    
    { next: (data) => {
        this.product = data;
        this.productForm.patchValue(this.product);
      },
      error:(e: any) => this.errorMessage = "Error: " + e
    }
    );
  }

onSubmit() {
 if (this.productForm.invalid){
   this.errorMessage = "Form is invalid.";
   this.errorMessage += this.productForm.errors;
   //<span *ngIf="productForm.controls['name'].errors">Please enter a name</span>
   
   return;}

   const putProduct = {
     ... this.product,
     ... this.productForm.value
   }
   this.productService.updateProduct(putProduct, this.product.id).subscribe(
     {next: (data: Product) => {
       this.product = data,
       this.routes.navigateByUrl("/product-list");
     },
    error: (e: any) => this.errorMessage = "Error: " + e,
    }
   );
 }
}
