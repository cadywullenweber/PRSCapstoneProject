import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product.class';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product!: Product;
  productid: number = 0;
  errorMessage = "";

  constructor(
    private productService: ProductService,
    private router: ActivatedRoute
    ) { }

  ngOnInit(): void {

    this.productid = this.router.snapshot.params["id"]

    this.productService.getProduct(this.productid).subscribe(
    {
      next: (data) => this.product = data,
      error: (e:any) => this.errorMessage = "Error: " + e,
    }
    );

  }

}
