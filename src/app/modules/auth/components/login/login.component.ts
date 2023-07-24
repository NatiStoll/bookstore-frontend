import { Router, ActivatedRoute } from '@angular/router';
import { SnackbarService } from 'src/app/shared/service/snackbar.service';
import { Component } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { LoginCredentials } from '../../models/login-credentials.model';
import { first } from 'rxjs';
import { GlobalConstants } from 'src/app/commom/global-constants';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  hide = true;
  public email?: string;
  public password?: string;
  public user?: string;
  constructor(
    private router: Router,
    private authService: AuthService,
    private route: ActivatedRoute,
    private snackbarService: SnackbarService
  ) { }

  login() {
    const payload: LoginCredentials = {
      email: this.email!,
      password: this.password!
    };
    this.authService
      .login(payload)
      .pipe(first())
      .subscribe({
        next: response => {
          localStorage.setItem(GlobalConstants.USER, JSON.stringify(response.user));
          localStorage.setItem(GlobalConstants.USER_TOKEN, JSON.stringify(response.token));
          this.user = response.user.name;
        },
        error: err => {
          console.log(err);
          this.snackbarService.openSnackBar(err.error.message);
        },
        complete: () => {
          this.router.navigate(['/book'])
        }
      })
  }

  register() {
    this.router.navigate(['/users/create']);
  }
}


