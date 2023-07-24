import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { GlobalConstants } from 'src/app/commom/global-constants';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private router: Router) {}

  private setHeaders(): string {
    let token = localStorage.getItem(GlobalConstants.USER_TOKEN) as string;
    token = token?.replaceAll('"','')
    return `Bearer ${token}`;
  }

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (
      request.url.includes('/auth/login') ||
      request.url.includes('/users/create')
    ) {
      return next.handle(request);
    }

    let token = localStorage.getItem(GlobalConstants.USER_TOKEN);
    token = token!.replaceAll('"','')

    const modifiedRequest = request.clone({
      setHeaders: {
        Authorization: this.setHeaders(),
      },
    });

    return next.handle(modifiedRequest);
  }

}
