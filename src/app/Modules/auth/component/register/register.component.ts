import { Component } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';
import { Validators,FormControl,FormGroup } from '@angular/forms';
import { VerifyuserComponent } from '../verifyAccount/verifyuser.component';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  constructor(private _Toastr:ToastrService,public dialog: MatDialog,private _AuthService:AuthService, private _Router:Router){}
  ngOnInit(): void {
    
  }
  hide:boolean=true;
  hiden:boolean=true;
  imgSrc:any;
  registerForm = new FormGroup({
    userName:new FormControl(null,[Validators.required,Validators.maxLength(10),Validators.minLength(5)]),
    email:new FormControl(null,[Validators.required,Validators.email]),
    country:new FormControl(null,[Validators.required]),
    phoneNumber:new FormControl(null,[Validators.required]),
    password:new FormControl(null,[Validators.required,Validators.pattern('^(?=.*[A-Z])(?=.*[a-z])(?=.*\\d)[A-Za-z\\d!$%@#£€*?&]{5,12}$')]),
    confirmPassword:new FormControl(null,[Validators.required,Validators.pattern('^(?=.*[A-Z])(?=.*[a-z])(?=.*\\d)[A-Za-z\\d!$%@#£€*?&]{5,12}$')]),
    profileImage:new FormControl(null)
  })
  onSubmit(data:FormGroup){
  console.log(data)
  let myData= new FormData;
  myData.append('userName',data.value.userName);
  myData.append('email',data.value.email);
  myData.append('country',data.value.country);
  myData.append('phoneNumber',data.value.phoneNumber);
  myData.append('password',data.value.password);
  myData.append('confirmPassword',data.value.confirmPassword);
  myData.append('profileImage',data.value.profileImage)
  this._AuthService.userRegister(myData).subscribe({
    next:(res)=>{
      console.log(res)
    },
    error:(err)=>{
      console.log(err)
      this._Toastr.error('Try again', 'Register not sucess');
    },
    complete:()=>{
      this._Toastr.success('Success', 'Register sucess');
    }
  })
  
  }
  files: File[] = [];

 onSelect(event:any) {
  this.imgSrc=event.addedFiles[0];
  console.log(this.imgSrc);
  this.files.push(...event.addedFiles);
}

 onRemove(event:any) {
  console.log(event);
  this.files.splice(this.files.indexOf(event), 1);
}
  openDialog(): void {
    const dialogRef = this.dialog.open(VerifyuserComponent, {
      data: {},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed',result);
      if(result){
        this.verifyUserAccount(result)
      }
    });
  }
verifyUserAccount(data:any){
  this._AuthService.verifyUser(data).subscribe({
    next:(res)=>{
      console.log(res)
    },
    error:(err)=>{
      console.log(err)
      this._Toastr.error('Try again', 'Activated Account not sucess');
    },complete:()=>{
      this._Toastr.success('Successfuly', 'Activated Account Successfuly');
       this._Router.navigateByUrl('/auth/login')
    }
  })
}
}