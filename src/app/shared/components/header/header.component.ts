import { Component, EventEmitter, Output } from '@angular/core';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private sharedService : SharedService) {

  }
  public toggelDrawer() : void{
    this.sharedService.toggelDrawer()
  }
}
