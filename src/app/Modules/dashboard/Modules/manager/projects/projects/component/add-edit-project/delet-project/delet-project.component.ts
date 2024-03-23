import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Iproject } from '../../../../../interfac/iproject';

@Component({
  selector: 'app-delet-project',
  templateUrl: './delet-project.component.html',
  styleUrls: ['./delet-project.component.scss']
})
export class DeletProjectComponent {
  constructor(
    public dialogRef: MatDialogRef<DeletProjectComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Iproject,
  ) {
    console.log(data);
    console.log(data.isData.title
      );
    
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
