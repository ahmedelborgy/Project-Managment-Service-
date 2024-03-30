//import { DeleteProjectComponent } from './component/add-edit-project/delete-project/delete-project.component';
import { Iproject, Manager } from '../../interface/iproject';
import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ProjectService } from './service/project.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DeleteComponent } from 'src/app/Modules/shared/delete/delete.component';
import { DeleteProjectComponent } from './component/delete-project/delete-project.component';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})

export class ProjectsComponent implements OnInit {
  constructor(
    public dialog: MatDialog
    ,private _ProjectService:ProjectService, private _Router:Router){
  }
 
  tableProjects:any;
  Projects:any[]=[];
  length=20;
  pageSize=5;
  pageIndex=0;
  pageNumber=1;
  pageSizeOptions=[5,10,20];
  pageEvent:PageEvent|any;
  searchKey:string='';
  ngOnInit(): void {
    this.getProjects();
   localStorage.setItem('action','add New');
  }
  getProjects(){
    let params={
      pageSize:this.pageSize,
      pageNumber:this.pageNumber,
      title:this.searchKey
    }
    this._ProjectService.getAllProjects(params).subscribe({
      next:(res)=>{
        console.log(res)
        this.tableProjects=res;
      this.Projects=res.data
      },
      error:(err)=>{
        console.log(err)
      },
    })
  }
  
  editProject(item:Iproject,action:string){
    console.log(item,action);
    this._ProjectService.getItemProject(item,action);
    localStorage.setItem('action','edit');
    this._Router.navigate(['/dashboard/manager/add-edit'])
    }
    viewProject(item:Iproject,action:string){
      localStorage.setItem('action','view');
      this._Router.navigate(['/dashboard/manager/add-edit'])
      this._ProjectService.getItemProject(item,action);
    }
    openDialog(item:Iproject): void {
      const dialogRef = this.dialog.open(DeleteProjectComponent, {
        data: {isData:item},
      });
    
      dialogRef.afterClosed().subscribe((result: any) => {
        console.log('The dialog was closed',result);
        console.log(result);
        if(result){
         this.deletProject(result)
        }
      });
    }
    
    deletProject(id:any){
    this._ProjectService.deletProject(id).subscribe({
      next:(res)=> {
        console.log(res);
        
      },
      error:(err)=> {
        console.log(err);
        
      }, 
      complete:()=> {
        //console.log('complet delete');
        this.getProjects();
      },
    })
    }

handlePageEvent(e: PageEvent) {
  this.pageEvent = e;
  this.length = e.length;
  this.pageSize = e.pageSize;
  this.pageNumber = e.pageIndex;
  this.getProjects();
}


}
