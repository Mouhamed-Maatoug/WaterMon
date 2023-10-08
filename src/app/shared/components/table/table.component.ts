import { Component, ElementRef, Input, Renderer2, Type, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable, filter } from 'rxjs';
import { AddDialogComponent } from '../add-dialog/add-dialog.component';
import { DataService } from '../../services/data.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent {
  @Input() data!: any[];
  @Input() column!: string[];
  @Input() displayFiled!: string[];
  @Input() disableCrudAction: boolean = false;
  @Input() title: string = 'title is a proprity binding of table';
  @Input() width : string = '100%'
  @Input() layouApi : string = ''
  @Input() action! : 'post' | 'get'

  @Input() enableOpenPopUpButton : boolean = true

  public columnsName!: any[];
  public displayedColumns!: string[];
  public dataForms : {column : string , type : string}[] = []
  public dataSource!: MatTableDataSource<any>;
  @ViewChild('Input',{static : true} ) fitler !  : ElementRef
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(
    private http : HttpClient ,
    private render : Renderer2 ,
    private dialog : MatDialog,
    private sharedDataService : DataService
    ){

      this.sharedDataService.getData(this.layouApi).subscribe(data => {
        console.log("retrivetData : " , data)
      })

  }
  ngOnInit() {
    this.pickListByColumnName();
  }
  ngAfterViewInit() {
    this.dataSource = new MatTableDataSource<any>(this.data);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort
  }




  private pickListByColumnName() {
    let firstObjectOfData = this.data[0];
    let columns = Object.keys(firstObjectOfData);
    columns.map(columnName => this.dataForms = [...this.dataForms , {column : columnName , type : typeof(columnName)}] )  ;
    if (this.displayFiled) {
      this.displayedColumns = this.displayFiled;
      if (!this.disableCrudAction) {
        this.displayedColumns = [...this.displayedColumns, 'action'];
      }

    } else {
      this.displayedColumns = columns;
      if (!this.disableCrudAction) {
        this.displayedColumns = [...this.displayedColumns, 'action'];
      }
    }
    this.columnsName = columns;
    console.log(this.columnsName)
  }
  applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();

      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
      }
    }

    public openAddNewFieledDialog(apiLayout : string ) : void {
        this.sharedDataService.dataFormsForCurrentOpenDialog = this.columnsName
        this.sharedDataService.titleOfCurrentlayoutOpenedForDialog = this.title
        this.dialog.open(AddDialogComponent ,{data : {api : apiLayout}})

      }


}
