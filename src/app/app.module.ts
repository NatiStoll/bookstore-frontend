import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './modules/auth/auth.module';
import { SharedModule } from './shared/shared.module';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UsersModule } from './modules/users/users.module';
import { BookModule } from './modules/book/book.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './core/interceptors/auth.interceptor';
// import { HeaderComponent } from './shared/components/header/header.component';
// import { NotFoundComponent } from './shared/components/not-found/not-found.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,
            AppRoutingModule,
            SharedModule,
            AuthModule,
            MatButtonModule,
            BrowserAnimationsModule,
            UsersModule,
            BookModule,
            HttpClientModule,
  ],
  providers: [
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: AuthInterceptor,
    //   multi: true,
    // },
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: LoadingInterceptor,
    //   multi: true,
    // },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
