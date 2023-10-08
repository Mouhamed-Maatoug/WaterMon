import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Device } from 'src/app/models/device';
import { User } from 'src/app/models/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
public dataFormsForCurrentOpenDialog :string[] = []
public titleOfCurrentlayoutOpenedForDialog : string = ''
public Users : User[]= [
  new User(0,'Mohamed' , 'Abbes' , 'medali@gamail.com', 28878217 ),
  new User(0,'Mohamed' , 'Maatoug' , 'mg@gamail.com', 29272307 ),
  new User(0,'lyly' , 'cat' , 'lylycat@gamail.com', 29272307 ),
]

  constructor(private http  : HttpClient) { }
public getData<T>(api : string): Observable<T> {
  return this.http.get<T>(api)
}


}
