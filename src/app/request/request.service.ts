import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UserRequest } from './request.class';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  //fields
  private requestsUrl = environment.PRSwebApiURL + "/api/requests"

  constructor(private http: HttpClient) { }

  //methods
  list():Observable<UserRequest[]>{
    return this.http.get(this.requestsUrl) as Observable<UserRequest[]>
  }
}