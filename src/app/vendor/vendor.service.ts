import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Vendor } from './vendor.class';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class VendorService {

  //fields
  private vendorsUrl = environment.PRSwebApiURL + "/api/vendors"

  constructor(private http: HttpClient) { }

  //methods
  list():Observable<Vendor[]>{
    return this.http.get(this.vendorsUrl) as Observable<Vendor[]>
  }

  getVendor(id:number): Observable<Vendor>{
    return this.http.get(this.vendorsUrl + "/" + id) as Observable<Vendor>
  }

  postData(data: Vendor): Observable<any> {
    return this.http.post(this.vendorsUrl, data)
  }

  updateVendor(data: Vendor, id: number): Observable<Vendor> {
    return this.http.put(this.vendorsUrl + "/" + id, data) as Observable<Vendor>
  }
}
