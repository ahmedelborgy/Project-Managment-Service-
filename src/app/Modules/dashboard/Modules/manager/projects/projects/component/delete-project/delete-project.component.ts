import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Iproject } from '../../../../interface/iproject';

@Component({
  selector: 'app-delete-project',
  templateUrl: './delete-project.component.html',
  styleUrls: ['./delete-project.component.scss'],
})
export class DeleteProjectComponent {
  constructor(
    public dialogRef: MatDialogRef<DeleteProjectComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Iproject
  ) {
    console.log(data);
    console.log(data.isData.title);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
