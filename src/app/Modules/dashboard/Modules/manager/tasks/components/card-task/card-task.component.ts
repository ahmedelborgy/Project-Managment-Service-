import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DeleteComponent } from 'src/app/Modules/shared/delete/delete.component';

@Component({
  selector: 'app-card-task',
  templateUrl: './card-task.component.html',
  styleUrls: ['./card-task.component.scss']
})
export class CardTaskComponent {
  constructor(
    public dialogRef: MatDialogRef<DeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
