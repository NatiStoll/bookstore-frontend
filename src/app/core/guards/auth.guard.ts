import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from 'src/app/modules/auth/service/auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {

  constructor(private AuthService: AuthService,
              private router: Router) { }

  canActivate(
route: ActivatedRouteSnapshot, state: RouterStateSnapshot,
  ): Observable<boolean> | boolean{
   if (this.AuthService.isLoggedIn()){
    return true;
   }
   this.router.navigate(['/auth/login']);
   return false;
  }
}
