import { Component, OnInit } from '@angular/core';
import { ManagerService } from '../../services/manager.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  tableUsers:any;
  Users:any[]=[]
  constructor(private _ManagerService:ManagerService){}
  ngOnInit(): void {
    this.getAllUsers()
  }
getAllUsers(){
  this._ManagerService.getUsers().subscribe({
    next:(res)=>{
      debugger
      console.log(res)
      this.tableUsers=res;
      this.Users=res.data
      console.log(this.tableUsers)
    
    },
    error:(err)=>{
      console.log(err)
    },
    complete:()=>{
      //tostar
    }
  })
}
}
