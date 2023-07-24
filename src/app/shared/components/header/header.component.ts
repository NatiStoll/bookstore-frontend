import { Component } from '@angular/core';
import { AuthService } from 'src/app/modules/auth/service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private authService: AuthService, private router: Router) {}
  public logout(): void {
    this.authService.logout();
    this.router.navigate(['/auth/login']);
  }
}
