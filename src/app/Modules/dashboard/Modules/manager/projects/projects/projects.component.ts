/*import { DeletProjectComponent } from './component/add-edit-project/delet-project/delet-project.component';
import { Manager } from './../../interfac/iproject';
import { Component, OnInit } from '@angular/core';
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
    localStorage.setItem('action','add New');
  }




  
getProjects(){
  this._ManagerService.getAllProjects().subscribe({
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
     console.log('--------complet project-------------');
     
    }
  })



}



editProject(item:Iproject,action:string){
console.log(item,action);
this._ManagerService.getItemProject(item,action);
localStorage.setItem('action','edit');
this._Router.navigate(['/dashboard/manager/add-edit'])
}
viewProject(item:Iproject,action:string){
  localStorage.setItem('action','view');
  this._Router.navigate(['/dashboard/manager/add-edit'])
  this._ManagerService.getItemProject(item,action);
}








openDialog(item:Iproject): void {
  const dialogRef = this.dialog.open(DeletProjectComponent, {
    data: {isData:item},
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed',result);
    console.log(result);
    if(result){
this.deletProject(result)
    }
  });
}

deletProject(id:any){
this._ManagerService.deletProject(id).subscribe({
  next:(res)=> {
    console.log(res);
    
  },
  error:(err)=> {
    console.log(err);
    
  }, 
  complete:()=> {
    console.log('------complet delet -----');
    this.getProjects();
  },
})
}
  










handlePageEvent(e: PageEvent) {
  this.pageEvent = e;
  this.length = e.length;
  this.pageSize = e.pageSize;
  this.pageIndex = e.pageIndex;
  this.getProjects()
}





}*/
