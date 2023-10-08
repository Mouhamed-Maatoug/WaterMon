import { Component } from '@angular/core';
import { SharedService } from './shared/services/shared.service';
import { Observable, Subject, map, takeUntil } from 'rxjs';
import {  MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private sidbarMaxWidth! : number
  private sidbarMinWidth! : number
  private $destroy : Subject<boolean> = new Subject<boolean>();
  private isSidbarOpen = true;

  constructor(private sharedService : SharedService, private matIconRegistry : MatIconRegistry , private domSanitizer : DomSanitizer){
    this.matIconRegistry.addSvgIcon('watermon' ,
    this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/images/icon2.svg') )
    this.sidbarMaxWidth = sharedService.SIDBAR_MAXWIDTH
    this.sidbarMinWidth = sharedService.SIDBAR_MINWIDTH
    this.getsidbarStatus().subscribe()

   }
   private getsidbarStatus() : Observable<boolean> {
      return this.sharedService.$isDrawerOpen.pipe(
        takeUntil(this.$destroy),
        map(status => this.isSidbarOpen = status)
      )
   }
  public sidbarWidth() : number {
    let sidbarWidth : number
      if(this.isSidbarOpen){
        sidbarWidth = this.sidbarMaxWidth
      }

      else {
        sidbarWidth = this.sidbarMinWidth
      }


      return sidbarWidth
    }

  private openSidbar(): void {
    this.isSidbarOpen = true
  }
  private closeSidbar(): void {
    this.isSidbarOpen = false
  }
  public toggleSidbar(): void {
    this.isSidbarOpen= !this.isSidbarOpen
  }
}
