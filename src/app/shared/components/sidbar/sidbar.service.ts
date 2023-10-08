import { Injectable } from '@angular/core';
import { Navigation } from 'src/app/models/navigation';

@Injectable({
  providedIn: 'root'
})
export class SidbarService {

  constructor() { }
  navigation : Navigation[] = [
    new Navigation(0 , 'zones' , 'map' , '/watermon/zones'),
    new Navigation(0 , 'devices' , 'sensors' , '/watermon/devices'),
    new Navigation(0 , 'users' , 'group' , '/watermon/users'),
    new Navigation(0 , 'alerts' , 'notifications' , '/watermon/alerts'),
    new Navigation(0 , 'schedulers' , 'today' , '/watermon/schedulers'),
  ]
}
