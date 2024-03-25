//import { DeleteProjectComponent } from './component/add-edit-project/delete-project/delete-project.component';
import { Iproject, Manager } from '../../interface/iproject';
import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ProjectService } from './service/project.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DeleteComponent } from 'src/app/Modules/shared/delete/delete.component';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  constructor(public dialog: MatDialog,private _ProjectService:ProjectService, private _Router:Router){
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
      const dialogRef = this.dialog.open(DeleteComponent, {
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
        console.log('complet delet');
        //this.getProjects();
      },
    })
    }
  /*tableProject:any;
projects:any[]=[]
  totalNumberOfRecords: any;
  dialog: any;
  pageEvent: PageEvent | undefined;
  length: any;
  pageSize: any;
  pageIndex: any;
  constructor(private _ProjectService:ProjectService, private _Router:Router){}
  ngOnInit(): void {
    //this.getProjects(data:any)
   // localStorage.setItem('action','add New');
  }
getProjects(data:any){
  this._ProjectService.getAllProjects(data).subscribe({
    next:(res)=>{
      console.log(res)
      this.totalNumberOfRecords=res.totalNumberOfRecords;
      console.log(this.totalNumberOfRecords);
      
      this.tableProject=res;
      this.projects=res.data
      console.log(this.projects);
      
      
    },
    error:(err)=>{
      console.log(err)
    },
    complete:()=>{
    // console.log('compelet project');
     
    }
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
  const dialogRef = this.dialog.open(DeletProjectComponent, {
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
    console.log('complet delet');
    //this.getProjects();
  },
})
}
handlePageEvent(e: PageEvent) {
  this.pageEvent = e;
  this.length = e.length;
  this.pageSize = e.pageSize;
  this.pageIndex = e.pageIndex;
  //this.getProjects()
}*/
handlePageEvent(e: PageEvent) {
  this.pageEvent = e;
  this.length = e.length;
  this.pageSize = e.pageSize;
  this.pageIndex = e.pageIndex;
  this.getProjects()
}
ngOnInit(): void {
  this.getProjects()
}}
