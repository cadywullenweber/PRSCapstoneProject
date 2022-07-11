import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from './user.class';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  //fields
  private usersUrl = environment.PRSwebApiURL + "/api/users"
  

  //dependency injection
  constructor(private http: HttpClient) {}

  //methods
  login(username:string, password:string)
  {
    let loginUrl = this.usersUrl + "/" + username + "/" + password;
    return this.http.get(loginUrl);
  }

  list():Observable<User[]>{
    return this.http.get(this.usersUrl) as Observable<User[]>
  }

  getUser(id:number):Observable<User> {
    return this.http.get(this.usersUrl + "/" + id) as Observable<User>
  }

  postData(data: User): Observable<any> {
    return this.http.post(this.usersUrl, data)
  }

  updateUser(data: User, id: number): Observable<User> {
    return this.http.put(this.usersUrl + "/" + id, data) as Observable<User>
  }

}
