import { Component, OnInit } from '@angular/core';
import { Book, StatusBook } from '../../models/book.model';
import { Validators, FormControl, FormGroup } from '@angular/forms';
import { SnackbarService } from 'src/app/shared/service/snackbar.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../../service/book.service';



interface StatusReadBook {
  value: StatusBook;
  viewValue: string;
}
@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.scss']
})
export class CreateBookComponent implements OnInit {

  public books!: Book[];
  public book?: Book;
  public id?: string;
  public title = "Register Book"

  public bookForm!: FormGroup;

  readStatus: StatusReadBook[] = [
    { value: StatusBook.READ, viewValue: 'Read' },
    { value: StatusBook.NOT_READ, viewValue: 'Reading' },
    { value: StatusBook.READING, viewValue: 'Not Read' },
  ];
  selectedStatus = this.readStatus[2];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private snackbarService: SnackbarService,
    private bookService: BookService
  ) { }

  ngOnInit(): void {
    this.buildForm();
  }
  public buildForm(): void {
    this.bookForm = new FormGroup({
      id: new FormControl(),
      title: new FormControl(null, [
        Validators.required,
        Validators.pattern('^[a-zA-ZÀ-ÿ]{2,}(?: [a-zA-ZÀ-ÿ]+){1,}$'),
      ]),
      author: new FormControl(null, [
        Validators.required,
        Validators.pattern('^[a-zA-ZÀ-ÿ]{2,}(?: [a-zA-ZÀ-ÿ]+){1,}$'),
      ]),
      category: new FormControl(null, [
        Validators.required,
        Validators.pattern('^[a-zA-ZÀ-ÿ]{2,}(?: [a-zA-ZÀ-ÿ]+){1,}$'),
      ]),
      status: new FormControl(null,
        [Validators.required]
      )
    });
  }

  public onSubmit(): void {
    this.book = this.bookForm.getRawValue();
    console.log(this.book);
    if (this.id) {
      // this.update(book);
    } else {
      // this.save(book);
    }
    this.router.navigate(['/book']);
  }

  public onCancel(): void {
    this.router.navigate(['/book']);
  }

}
