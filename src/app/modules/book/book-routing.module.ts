import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListBookComponent } from './components/list-book/list-book.component';
import { CreateBookComponent } from './components/create-book/create-book.component';

const routes: Routes = [
  {
    path: '',
    component: ListBookComponent,
  },
  {
    path: 'create',
    component: CreateBookComponent,
  },
  {
    path: 'edit/:id',
    component: CreateBookComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookRoutingModule {}
