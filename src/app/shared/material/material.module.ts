import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
// import { ZipCodeMaskPipe } from './pipes/zip-code-mask.pipe';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
    MatFormFieldModule,
  ],
  exports: [
    MatToolbarModule,
    MatButtonModule, 
    MatIconModule,
    MatSnackBarModule,
    MatFormFieldModule,
    ReactiveFormsModule],
})
export class MaterialModule {}
