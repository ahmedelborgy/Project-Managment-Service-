import { Component } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';
import { Validators,FormControl,FormGroup } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  constructor(private _AuthService:AuthService, private _Router:Router){}
  ngOnInit(): void {
    
  }
  hide:boolean=true;
  hiden:boolean=true;
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
    },
    complete:()=>{
     //toster
    }
  })
  
  }
  
}