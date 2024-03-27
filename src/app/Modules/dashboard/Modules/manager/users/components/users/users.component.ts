import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { UserService } from '../../service/user.service';
import { HelperService } from 'src/app/core/helper-services/helper.service';
import { ConfirmUserComponent } from '../confirm-user/confirm-user/confirm-user.component';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CardTaskComponent } from '../../../tasks/components/card-task/card-task.component';
import { ViewUserComponent } from '../view-user/view-user.component';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  tableUsers:any;
  Users:any[]=[]
  length=20;
  pageSize=5;
  pageIndex=0;
  pageNumber=1;
  pageSizeOptions=[5,10,20];
  pageEvent:PageEvent|any;
  searchKey:string='';
  constructor(public dialog: MatDialog,
    private _UserService:UserService,private _HelperService:HelperService){}
  ngOnInit(): void {
    this.getAllUsers()
  }
getAllUsers(){
  let params={
    pageSize:this.pageSize,
    pageNumber:this.pageNumber,
    userName:this.searchKey
  }
  this._UserService.getUsers(params).subscribe({
    next:(res)=>{
      console.log(res)
      this.tableUsers=res;
      this.Users=res.data
    },
    error:(err)=>{
      console.log(err)
    },
    complete:()=>{
      //tostar
    }
  })
}
openDialog(dataItem:any) {
  const dialogRef = this.dialog.open(ConfirmUserComponent, {
    data:dataItem
  });
  dialogRef.afterClosed().subscribe(result => {
    console.log(`Dialog result: ${result}`);
    if(result){
      this.onToggleBlockUser(result)
    }
}
  )
}
openDialogView(dataItem:any) {
  const dialogRef = this.dialog.open(ViewUserComponent, {
    data:dataItem
  });
  dialogRef.afterClosed().subscribe(result => {
    console.log(`Dialog result: ${result}`);
   if(result){
    this.onViewUser(result)
   }
}
  )
}

onViewUser(id:number){
  this._UserService.onViewUser(id).subscribe({
    next:(res)=>{
      console.log(res)
    },
    error:(err)=>{
      console.log(err)
    }
  })
}
onToggleBlockUser(id:number){
this._UserService.onToggleActivaUser(id).subscribe({
  next:(res)=>{
    console.log(res)
  },
  error:(err)=>{
    console.log(err)
  },
  complete:()=>{
    this.getAllUsers()
  }
})

}
handlePageEvent(e: PageEvent) {
  this.pageEvent = e;
  this.length = e.length;
  this.pageSize = e.pageSize;
  this.pageIndex = e.pageIndex;
  this.getAllUsers()
}
}

