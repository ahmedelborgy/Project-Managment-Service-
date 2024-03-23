import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectService } from './service/project.service';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  tableProject:any;
  projects:any[]=[]
  constructor(private _ProjectService:ProjectService, private _Router:Router){}
  ngOnInit(): void {
    this.getProjects()
  }
getProjects(){
  this._ProjectService.getAllProjects().subscribe({
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
