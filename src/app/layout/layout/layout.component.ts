import { Component } from '@angular/core';

import { Observable, Subject, map, takeUntil } from 'rxjs';
import { SharedService } from 'src/app/shared/services/shared.service';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {

  private sidbarMaxWidth! : number
  private sidbarMinWidth! : number
  private $destroy : Subject<boolean> = new Subject<boolean>();
  private isSidbarOpen = true;  

  constructor(private sharedService : SharedService,){
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
