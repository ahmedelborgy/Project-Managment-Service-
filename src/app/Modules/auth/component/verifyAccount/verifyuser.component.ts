import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthService } from '../../service/auth.service';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-verifyuser',
  templateUrl: './verifyuser.component.html',
  styleUrls: ['./verifyuser.component.scss']
})
export class VerifyuserComponent {
  constructor(private _AuthService:AuthService,
    public dialogRef: MatDialogRef<VerifyuserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}
  verifyCode=new FormGroup({
    email:new FormControl(null),
    code:new FormControl(null)
  })
onVerify(data:any){
this._AuthService.verifyUser(data).subscribe({
  next:(res)=>{
    console.log(res)
  },
  error:(err)=>{
    console.log(err)
  },
  complete:()=>{

  }
})
}
  onNoClick(): void {
    this.dialogRef.close();
  }
}
