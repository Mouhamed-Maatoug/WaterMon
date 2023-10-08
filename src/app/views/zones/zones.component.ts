import { Component } from '@angular/core';
import { environment } from 'src/environnement/environnement ';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginService } from 'src/app/shared/services/login.service';

@Component({
  selector: 'app-zones',
  templateUrl: './zones.component.html',
  styleUrls: ['./zones.component.css']
})
export class ZonesComponent {
  public columnName = ['name' , 'ttnid', 'location']
  constructor(private http : HttpClient ,  private auth : LoginService){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'JWT '+ this.auth.getToken()});
    const options = { headers: headers };
     this.http.get<any[]> ('http://192.168.1.13:3000/api/v1/zones' ,  options).subscribe(data =>  {
      this.ZonedataSource =data
      console.log(this.ZonedataSource)
    })
  }
  public zonesApi = environment.zonesApi
  title = "Zones" ;
  public  ZonedataSource : any[] =[]

}
