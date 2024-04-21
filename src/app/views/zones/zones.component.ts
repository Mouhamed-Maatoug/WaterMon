import { Component, ViewChild } from '@angular/core';
import { Input, OnInit, Output } from '@angular/core';
import { environment } from 'src/environnement/environnement ';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginService } from 'src/app/shared/services/login.service';
import { MatTableDataSource } from '@angular/material/table';
import { Zone } from 'src/app/models/zone';
import { MatTableModule} from '@angular/material/table';
import {AfterViewInit} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { ZoneService } from 'src/app/shared/services/zone.service';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-zones',
  templateUrl: './zones.component.html',
  styleUrls: ['./zones.component.css']
})
export class ZonesComponent {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @Output() RefreshDevicesList: Observable<void> | undefined;

  displayedColumns: string[] = [ "name", "location","ttnid" ,"action" ] ;
  dataSource!: MatTableDataSource<Zone> ;
  ListOfZones : Array<Zone> | undefined;

  constructor(private auth : LoginService , private zoneservice : ZoneService ){

    /*
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'JWT '+ this.auth.getToken()});
    const options = { headers: headers };
     this.http.get<any[]> ('http://192.168.1.13:3000/api/v1/zones' ,  options).subscribe(data =>  {
      this.ZonedataSource =data
      console.log(this.ZonedataSource)
    })
    */

    console.log("ZonelistComponent ngOnInit") ;
    this.RefreshListOfZones() ;
    this.RefreshDevicesList?.subscribe(() =>{
      this.RefreshListOfZones() ;
    }) ;
  }

  RefreshListOfZones()
  {
      this.zoneservice.getListOfZones().subscribe( data => {
      this.ListOfZones = data ;
      this.dataSource = new MatTableDataSource(this.ListOfZones) ;
      this.dataSource.sort = this.sort ;
      this.dataSource.paginator = this.paginator ;

     }) ;
  }

  public zonesApi = environment.zonesApi
  title = "Zones" ;
  public  ZonedataSource : any[] =[]

  ngAfterViewInit() {
   /* this.dataSource = new MatTableDataSource<any>(this.ZonedataSource);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort*/
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }



  // public openAddNewFieledDialog(apiLayout : string ) : void {
  //     this.sharedDataService.dataFormsForCurrentOpenDialog = this.columnsName
  //     this.sharedDataService.titleOfCurrentlayoutOpenedForDialog = this.title
  //     this.dialog.open(AddDialogComponent ,{data : {api : apiLayout}})

  //   }


}

//}
