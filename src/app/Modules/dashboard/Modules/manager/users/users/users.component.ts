import { Component, OnInit } from '@angular/core';
import { ManagerService } from '../../services/manager.service';
import { PageEvent } from '@angular/material/paginator';
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
  constructor(private _ManagerService:ManagerService){}
  ngOnInit(): void {
    this.getAllUsers()
  }
getAllUsers(){
  let params={
    pageSize:this.pageSize,
    pageNumber:this.pageNumber,
  }
  this._ManagerService.getUsers(params).subscribe({
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
handlePageEvent(e: PageEvent) {
  this.pageEvent = e;
  this.length = e.length;
  this.pageSize = e.pageSize;
  this.pageIndex = e.pageIndex;
  this.getAllUsers()
}
}

