import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/service/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { ChangePasswordComponent } from '../../auth/component/change-password/change-password.component';
import { ProfileComponent } from '../../auth/component/profile/profile.component';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  constructor(private _AuthService:AuthService,
    private _Router:Router,
    public dialog: MatDialog
    ){}
  ngOnInit(): void {
    
  }
  userName=localStorage.getItem('userName');
 // email=localStorage.getItem('Email')
  myLogout(){
    this._AuthService.logOut();
  }
  openDialogChangePass(): void {
    const dialogRef = this.dialog.open(ChangePasswordComponent, {
      data: {name},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed',result);
    if(result!=undefined){
      this.onChangePassw(result);
     }
    });
  }
  openDialogProfile(): void {
    const dialogRef = this.dialog.open(ProfileComponent, {
      data: {name},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed',result);
   
    });
  }
   onChangePassw(changeForm:any){
    this._AuthService.ChangePassword(changeForm).subscribe({
      next:(res)=>{
        console.log(res)
      },
      error:(err)=>{
        console.log(err)
      },
      complete:()=>{
  this._Router.navigate(['/auth/login'])
      }
    })
    }











}

