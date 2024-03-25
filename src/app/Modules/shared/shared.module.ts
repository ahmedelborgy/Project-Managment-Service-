import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatMenuModule} from '@angular/material/menu';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { ToastrModule} from 'ngx-toastr';
import { DeleteComponent } from './delete/delete.component';


@NgModule({
  declarations: [
    HeaderComponent,
    DeleteComponent
  ],
  imports:[
    CommonModule,
    HttpClientModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,MatButtonModule,
    MatMenuModule,
    MatButtonModule,
    MatPaginatorModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    NgxDropzoneModule,
    ToastrModule.forRoot({
     closeButton:true,
      
    })
  ],
  exports: [HttpClientModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatButtonModule,
    MatPaginatorModule,
    MatDialogModule,
    MatFormFieldModule,MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    NgxDropzoneModule,
    ToastrModule,
]
})
export class SharedModule { }
