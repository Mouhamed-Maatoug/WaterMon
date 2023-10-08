import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { LoginService } from './login.service';
import { environment } from 'src/environnement/environnement ';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserCommandService {

 private  apiUrl :String =  environment.apiUrl;

  constructor(private http : HttpClient ,private auth :LoginService) { }

  public postUser(command : any) : Observable<User>{
    console.log("UserComm Service Create") ;
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'JWT '+this.auth.getToken()});
    let options = { headers: headers };
    return this.http.post<User>(this.apiUrl+ "users" + "usercommand" , command , options) ;
  }

  // public getUser():Observable<User>{
  //   return
  // }

  readAll(){

  }
}
