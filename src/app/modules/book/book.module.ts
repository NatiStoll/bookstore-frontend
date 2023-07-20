import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateBookComponent } from './components/create-book/create-book.component';
import { ListBookComponent } from './components/list-book/list-book.component';
import { BookRoutingModule } from './book-routing.module';

@NgModule({
  declarations: [CreateBookComponent, ListBookComponent],
  imports: [CommonModule, BookRoutingModule],
  exports: [CreateBookComponent, ListBookComponent]
})
export class BookModule {}
