import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { DataService } from 'src/app/shared/services/data.service';
import { User } from 'src/app/models/user';
import { CommonMethod } from 'src/app/util/common-method';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import {FormsModule} from '@angular/forms';
import { TableComponent } from 'src/app/shared/components/table/table.component';
import { SharedModule } from 'src/app/shared/shared.module';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    FormsModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatDialogModule,
    SharedModule

  ],
})
export class UsersComponent {
  // displayedColumns: string[] = ['id', 'firstName', 'email', 'action'];
  // dataSource: MatTableDataSource<User>;
  // commoMethode: CommonMethod = new CommonMethod();
  public userData!: User[]
  @ViewChild('table' , {static : true}) table! : TableComponent


  constructor(private dataService: DataService , private dialog: MatDialog) {
    // this.dataSource = new MatTableDataSource(this.userData);
   this.userData = this.dataService.Users;

  }

  ngAfterViewInit() {
    // this.table.data = this.dataService.Users;
    // this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;
  }

  // applyFilter(event: Event) {
  //   const filterValue = (event.target as HTMLInputElement).value;
  //   this.dataSource.filter = filterValue.trim().toLowerCase();

  //   if (this.dataSource.paginator) {
  //     this.dataSource.paginator.firstPage();
  //   }
  // }
  // public addUser() : void {
  //   this.dialog.open(UserDialogComponent)
  // }

  // public editUser(user : User) : void {

  //   console.log(user)
  //   const dialogRef = this.dialog.open(UserDialogComponent , {
  //     data  : user
  //   })

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log(result);

  //   });

  // }
  // public deleteUser(id: number): void {
  //   console.log();
  //   this.commoMethode.deleteArrayRow(id, this.userData);
  //   console.log(this.userData);
  //   this.dataSource = new MatTableDataSource(this.userData)
  //   this.dataSource.paginator = this.paginator;
  //   this.dataSource.sort = this.sort;
  // }



}
