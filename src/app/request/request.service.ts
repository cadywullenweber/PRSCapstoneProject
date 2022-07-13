import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UserRequest } from './request.class';
import { Observable } from 'rxjs'
import { RequestLine } from './request-line.class';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  //fields
  private requestsUrl = environment.PRSwebApiURL + "/api/requests"
  private requestlinessUrl = environment.PRSwebApiURL + "/api/requestlines";

  constructor(private http: HttpClient) { }

  //methods
  list():Observable<UserRequest[]>{
    return this.http.get(this.requestsUrl) as Observable<UserRequest[]>
  }
  get(id:number):Observable<UserRequest>{
    return this.http.get(this.requestsUrl + "/" + id) as Observable<UserRequest>
  }
  getRequestLines(): Observable<RequestLine[]> {
  return this.http.get(this.requestlinessUrl) as Observable<RequestLine[]>
}
postData(data: Request): Observable<any> {
  return this.http.post(this.requestsUrl, data)
}
}