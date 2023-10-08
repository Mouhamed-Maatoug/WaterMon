import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private url: string = 'http://192.168.1.13:3000/api/v1/';
  private logged: Boolean = false;
  private accessToken: string = '';

  private loggedInEvent = new EventEmitter<Boolean>();

  constructor(private httpclient: HttpClient) {}

  login(email: string | any, password:  string| null ): Observable<{message : string , accessToken : string}> {
    return this.httpclient.post<{message : string , accessToken : string}>(this.url + 'login', {
      email: email,
      password: password,
    });
  }

  IsLogged(): Boolean {
    return this.logged;
  }

  setLogged(b: Boolean) {
    this.loggedInEvent.emit(b);
    this.logged = b;
  }

  public setToken(token: string) {
    localStorage.setItem('token' , token)
  }

  public getToken(): string {
    return localStorage.getItem('token')?? 'null'
  }
}
