import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Product } from './product.class';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  //fields
  private productsUrl = environment.PRSwebApiURL + "/api/products"

  constructor(private http: HttpClient) { }

  //methods
  list():Observable<Product[]>{
    return this.http.get(this.productsUrl) as Observable<Product[]>
  }

  getProduct(id:number):Observable<Product> {
    return this.http.get(this.productsUrl + "/" + id) as Observable<Product>
  }

  postData(data: Product): Observable<any> {
    return this.http.post(this.productsUrl, data)
  }

  updateProduct(data: Product, id: number): Observable<Product>{
    return this.http.put(this.productsUrl + "/" + id, data) as Observable<Product>
  }
}
