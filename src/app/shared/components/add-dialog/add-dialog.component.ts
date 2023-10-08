import { Component , Inject} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-add-dialog',
  templateUrl: './add-dialog.component.html',
  styleUrls: ['./add-dialog.component.css']
})
export class AddDialogComponent {
  picker!: any
  columnsName :  string [] = []
  fieledDisplayed : string[]= [] ;
  isPermissionEnabledVar : boolean = false
  isListWithIdRef : boolean = false
  layoutTitle : string = ''
  constructor(
    public dialogRef: MatDialogRef<AddDialogComponent>,
     @Inject(MAT_DIALOG_DATA) public data : any,
     private sharedDataService : DataService
  ){
    console.log('Data received in dialog:', data);
  }
  ngOnInit(){
    this.setupForDialogByPickDataForms()
    this.isPermissionEnabledVar =  this.checkColumByName('permisionlevel' ,this.columnsName )
    this.isListWithIdRef =  this.checkColumByName('id' ,this.columnsName )
    if(this.isListWithIdRef){
      this.columnsName = this.columnsName.filter(column => column !== 'id')
    }
   console.log(this.isPermissionEnabledVar)

  }
  public checkIsPermissionEnabled() {

  }
  checkColumByName(name : string , data : string[]) : boolean{
    let checkResult : boolean = false
    let i : number = 0
   while(!checkResult && i<= data.length){
    data[i]=== name ?
      checkResult = true
      : i++
   }
   return checkResult
  }
  public close(): void {
    this.dialogRef.close();
  }
  private setupForDialogByPickDataForms() : void {
    this.columnsName = this.sharedDataService.dataFormsForCurrentOpenDialog
    this.layoutTitle = this.sharedDataService.titleOfCurrentlayoutOpenedForDialog
  }

  // for test check box :
  task: any = {
    name: 'devices',
    completed: false,
    color: 'primary',
    subtasks: [
      {name: 'Read', completed: false, color: 'primary'},
      {name: 'Write', completed: false, color: 'accent'},
    ],
  };
  allComplete: boolean = false;

  updateAllComplete() {
    this.allComplete = this.task.subtasks != null && this.task.subtasks.every((t: any )=> t.completed);
  }

  someComplete(): boolean {
    if (this.task.subtasks == null) {
      return false;
    }
    return this.task.subtasks.filter((t: any ) => t.completed).length > 0 && !this.allComplete;
  }

  setAll(completed: boolean) {
    this.allComplete = completed;
    if (this.task.subtasks == null) {
      return;
    }
    this.task.subtasks.forEach((t: any ) => (t.completed = completed));
  }
}
