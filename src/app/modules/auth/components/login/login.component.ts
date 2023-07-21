import { Router, ActivatedRoute } from '@angular/router';
import { SnackbarService } from 'src/app/shared/service/snackbar.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  hide = true;
  public email?: string;
  public password?: string;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private snackbarService: SnackbarService
  ) {}

  login(){
    this.router.navigate(['/book/list']);
  }

  register(){
    this.router.navigate(['/users/create']);
  }
}


