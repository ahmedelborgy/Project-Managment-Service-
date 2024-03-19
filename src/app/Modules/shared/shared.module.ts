import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';

import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,MatButtonModule
  ],
  exports: [
    HttpClientModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,MatButtonModule
  ],
})
export class SharedModule {}
