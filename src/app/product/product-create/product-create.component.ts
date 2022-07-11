import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from '../product.class';
import { ProductService } from '../product.service';
import { __importDefault } from 'tslib';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  
  product = new Product;
  productForm: FormGroup = new FormGroup({});
  errorMessage = "";

  constructor(
    private productSvc: ProductService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.productForm = new FormGroup(
      {
        partnbr: new FormControl(this.product.partnbr,
        [Validators.required,
        Validators.maxLength(30)]),
        
        name: new FormControl(this.product.name,
          [Validators.required,
            Validators.maxLength(30)]),

        price: new FormControl(this.product.price),

        unit: new FormControl(this.product.unit,
          [Validators.required,
            Validators.maxLength(30)]),

        photopath: new FormControl(this.product.photopath),

        vendorid: new FormControl(this.product.vendorid)
      })
  }
  onSubmit(){
    if(this.productForm.invalid){
      return;
    }

    const newProduct = {
      ... this.product,
      ... this.productForm.value
    }
    
    this.productSvc.postData(newProduct).subscribe(
      resp => {
        this.product = resp as Product;
      },

    );

  }
}
