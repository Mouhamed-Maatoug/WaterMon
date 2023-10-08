import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  public SIDBAR_MINWIDTH: number = 64
  public SIDBAR_MAXWIDTH : number = 230
  constructor() { }

  isDrawerOpen : BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  $isDrawerOpen : Observable<boolean> = this.isDrawerOpen.asObservable(); //

  public toggelDrawer(): void{
    this.isDrawerOpen.next(!this.isDrawerOpen.getValue());
  }
}