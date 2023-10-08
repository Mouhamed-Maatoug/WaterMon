import { Component } from '@angular/core';

@Component({
  selector: 'app-zones',
  templateUrl: './zones.component.html',
  styleUrls: ['./zones.component.css']
})
export class ZonesComponent {


  title = "Zones" ;
  public  ZonedataSource : {Name : string , location : string , ttnid : string}[] =[
    {
      Name : "zone1" ,
      location : "sousse" ,
      ttnid : "ttn-zone-sousse"
    },
    {
      Name : "zone2" ,
      location : "mahdia" ,
      ttnid : "ttn-zone-mahdia"
    },
    {
      Name : "zone3" ,
      location : "mahdia" ,
      ttnid : "ttn-zone-mahdia"
    }
  ]
}
