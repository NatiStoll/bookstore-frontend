import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../../service/users.service';
import { SnackbarService } from 'src/app/shared/service/snackbar.service';



@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {

  public users!: User[];
  public user?: User;
  public id?: string;
  public title = "Create User"

  public userForm!: FormGroup;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private usersService: UsersService,
    private snackbarService: SnackbarService
  ) { }

  ngOnInit(): void {
    this.buildForm();
  }
  public buildForm(): void {
    this.userForm = new FormGroup({
      id: new FormControl(),
      name: new FormControl(null, [
        Validators.required,
        Validators.pattern('^[a-zA-ZÀ-ÿ]{2,}(?: [a-zA-ZÀ-ÿ]+){1,}$'),
      ]),
      email: new FormControl(null, [
        Validators.required,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
      ]),
      password: new FormControl(null, [Validators.required]),
    });
  }

  public onSubmit(): void {
    this.user = this.userForm.getRawValue();
    console.log(this.user);
    if (this.id) {
      // this.update(user);
    } else {
      // this.save(user);
    }
    this.router.navigate(['/auth/login']);
  }

  public onCancel(): void {
    this.router.navigate(['/auth/login']);
  }

}
