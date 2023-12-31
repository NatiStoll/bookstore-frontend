import { NgModule } from '@angular/core';
import { CreateBookComponent } from './components/create-book/create-book.component';
import { ListBookComponent } from './components/list-book/list-book.component';
import { BookRoutingModule } from './book-routing.module';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { NgFor } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CreateBookComponent, ListBookComponent],
  imports: [BookRoutingModule, MaterialModule, NgFor, ReactiveFormsModule],
  exports: [CreateBookComponent, ListBookComponent]
})
export class BookModule {}
