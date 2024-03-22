import { Component, OnInit } from '@angular/core';
import { ManagerService } from '../../services/manager.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  tableProject:any;
  projects:any[]=[]
  constructor(private _ManagerService:ManagerService, private _Router:Router){}
  ngOnInit(): void {
    this.getProjects()
  }
getProjects(){
  this._ManagerService.getAllProjects().subscribe({
    next:(res)=>{
      console.log(res)
      this.tableProject=res;
      this.projects=res.data
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
