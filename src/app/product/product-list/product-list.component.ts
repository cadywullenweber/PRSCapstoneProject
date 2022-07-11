import { Component, OnInit } from '@angular/core';
import { Product } from '../product.class'
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
    products : Product[] = [];
  
    constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.list().subscribe(
      data => {
        this.products = data;
      }
    )
  }

}
