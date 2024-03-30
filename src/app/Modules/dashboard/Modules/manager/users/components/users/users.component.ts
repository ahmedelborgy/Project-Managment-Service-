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

pathUserImg=`https://upskilling-egypt.com:3003/`;
  tableUsers:any;
  Users:any[]=[];
  length=20;
  pageSize=5;
  pageIndex=0;
  pageNumber=1;
  pageSizeOptions=[5,10,20];
  pageEvent:PageEvent|any;
  searchKey: string = '';
  selectedFilter: string = '';

  constructor(public dialog: MatDialog,
    private _UserService:UserService,private _HelperService:HelperService){}
  ngOnInit(): void {
    this.getAllUsers()
   
  }
  
getAllUsers(){
  let params = {
    pageSize: this.pageSize,
    pageNumber: this.pageNumber,
    userName: '',
    email: '',
    country: ''
  };

  if (this.selectedFilter === 'userName') {
    params.userName = this.searchKey;
  } else if (this.selectedFilter === 'email') {
    params.email = this.searchKey;
  } else if (this.selectedFilter === 'country') {
    params.country = this.searchKey;
  } else {
    params.userName = this.searchKey;
    params.email = this.searchKey;
    params.country = this.searchKey;
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
  console.log(dataItem);
  
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
  this.pageNumber = e.pageIndex;
  this.getAllUsers()
}
}

