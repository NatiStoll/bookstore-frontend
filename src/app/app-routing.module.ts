import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
  {
    path: 'auth',
    loadChildren: () =>
      import('./modules/auth/auth.module').then((m) => m.AuthModule),
     
  },

  {
    path: 'users',
    loadChildren: () =>
      import('./modules/users/users.module').then((m) => m.UsersModule),
      
     
  },
  
  {
    path: 'book',
    loadChildren: () =>
      import('./modules/book/book.module').then((m) => m.BookModule),
      canActivate: [AuthGuard]
  },

  {
    path: '**',
    component: NotFoundComponent,
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
