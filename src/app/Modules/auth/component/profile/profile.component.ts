import { Component, Inject, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { ToastrService } from 'ngx-toastr';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ChangePasswordComponent } from '../change-password/change-password.component';
import { IProfile } from '../interface/profile';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit{
  imgSrc:any;
  userData:any;
  imageUrl:string='https://upskilling-egypt.com/3003';
  constructor(private _Toastr:ToastrService,private _AuthService:AuthService,
    public dialogRef: MatDialogRef<ProfileComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,){}
    onNoClick(): void {
      this.dialogRef.close();
    }
  ngOnInit(): void {
    this.updateProfileUser()
  }
  profileForm=new FormGroup({
    userName:new FormControl(null,[Validators.required]),
    email:new FormControl(null,[Validators.required]),
    country:new FormControl(null,[Validators.required]),
    phoneNumber:new FormControl(null,[Validators.required]),
    confirmPassword:new FormControl(null,[Validators.required]),
    profileImage:new FormControl(null)
  })
  onSubmit(data:FormGroup){
    let myData=new FormData();
    myData.append('userName',data.value.userName),
    myData.append('email',data.value.email),
    myData.append('country',data.value.country),
    myData.append('phoneNumber',data.value.phoneNumber),
    myData.append('confirmPassword',data.value.confirmPassword),
    myData.append('profileImage',this.imgSrc,this.imgSrc.name)
    this._AuthService.profileUser(myData).subscribe({
      next:(res)=>{
        console.log(res)
      },
      error:(err)=>{
        console.log(err)
      },
      complete:()=>{
        this._Toastr.success('Success',"Updated Profile Successfuly")
      }
    })

  }
  updateProfileUser(){
    this._AuthService.getCurrentUser().subscribe({
      next:(res)=>{
        console.log(res)
        this.userData=res;
      },
      error:(err)=>{
        console.log(err)
      },
      complete:()=>{
        this.imgSrc=this.imageUrl+this.userData.imagePath
        this.profileForm.patchValue({
          userName:this.userData.userName,
          email:this.userData.email,
          country:this.userData.country,
          phoneNumber:this.userData.phoneNumber,
          confirmPassword:this.userData.confirmPassword,
          profileImage:this.userData.imagePath,
        })
      }
    })
  }
  files: File[] = [];

  onSelect(event:any) {
    this.imgSrc=event.addedFiles[0];
    this.profileForm.get('profileImage')?.setValue(this.imgSrc)
    console.log(event);
    this.files.push(...event.addedFiles);
  }

 onRemove(event:any) {
  console.log(event);
  this.files.splice(this.files.indexOf(event), 1);
}

}
