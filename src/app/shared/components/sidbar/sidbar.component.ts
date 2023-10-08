import { Component, Input } from '@angular/core';
import { SharedService } from '../../services/shared.service';
import { SidbarService } from './sidbar.service';
import { Navigation } from 'src/app/models/navigation';
import { Observable, Subject, map, takeUntil } from 'rxjs';

@Component({
  selector: 'app-sidbar',
  templateUrl: './sidbar.component.html',
  styleUrls: ['./sidbar.component.css']
})
export class SidbarComponent {
  @Input() logo! : string 
  public sidbarData : Navigation[] = this.sidbarServices.navigation
  private $destroy : Subject<boolean> = new Subject<boolean>();
  public isSidbarOpen = true;  
  constructor(private sidbarServices : SidbarService , private sharedService : SharedService ) {
    this.getsidbarStatus().subscribe(data => this.getLogoImgSrc())
  }

  private getsidbarStatus() : Observable<boolean> {
    return this.sharedService.$isDrawerOpen.pipe(
      takeUntil(this.$destroy),
      map(status => this.isSidbarOpen = status)
    )
 }
 public getLogoImgSrc() : string {
  let logo : string = ''
  this.isSidbarOpen
  ? logo = '../../../../assets/images/logo.png'
  : logo =  '../../../../assets/images/logo6.png'
  return logo
 }

 




}
