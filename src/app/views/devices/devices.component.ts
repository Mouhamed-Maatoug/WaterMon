import { Component } from '@angular/core';
import { environment } from 'src/environnement/environnement ';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.css']
})
export class DevicesComponent {

  title : string = 'Devices' ;
 public  dataSource : {EUI : string , Name : string , state : string}[] =
  [
    {
      EUI : 'eui-00AB000014222201' ,
      Name :  'dev1',
      state: 'connected'

    },
    {
      EUI : 'eui-00AB000014222202' ,
      Name :  'dev2',
      state: 'connected'

    },
    {
      EUI : 'eui-00AB000014222203' ,
      Name :  'dev3',
      state: 'connected'
    },
    {
      EUI : 'eui-00AB000014222204' ,
      Name :  'dev4',
      state: 'disconnected'
    },
    {
      EUI : 'eui-00AB000014222205' ,
      Name :  'dev5',
      state: 'connected'

    },
    {
      EUI : 'eui-00AB000014222206' ,
      Name :  'dev6',
      state: 'disconnected'

    },
    {
      EUI : 'eui-00AB000014222207' ,
      Name :  'dev7',
      state: 'disconnected'
    }


  ]
  public devicesApi : string = environment.devicesApi

  constructor(){

  }

}
