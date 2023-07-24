import { Component, OnInit } from '@angular/core';
import { Book, StatusBook } from '../../models/book.model';
import { Validators, FormControl, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { BookService } from '../../service/book.service';
import { SnackbarService } from 'src/app/shared/service/snackbar.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Category } from '../../models/book.model';


interface StatusReadBook{
  value: StatusBook;
  viewValue: string;
}
@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.scss']
})
export class CreateBookComponent implements OnInit{
  
  public books!: Book[];
  public book?: Book;
  public id?: string;
  public title = "Register Book"; 
  public categories?: Category[];
 

  public bookForm!: FormGroup;

  readStatus: StatusReadBook[] = [
    {value: StatusBook.READ, viewValue: StatusBook.READ},
    {value: StatusBook.NOT_READ, viewValue: StatusBook.READING},
    {value:StatusBook.READING, viewValue: StatusBook.NOT_READ},
 ];

 selectedStatus = this.readStatus[2].value;


 constructor(
  private router: Router,
  private route: ActivatedRoute,
  private bookService: BookService,
  private snackbarService: SnackbarService
) {}


  ngOnInit(): void {
    this.buildForm();
    this.id = this.route.snapshot.params['id'];
    this.getAllCategory();
    console.log("Categorias?")
    console.log(this.categories)
    if (this.id) {
      this.title ="Edit Book";
      console.log(this.id);
      this.updateForm(this.id);
      this.getBookById(String(this.id));
    }
  }

  private updateForm(id: string,

     ): void {
    this.bookForm.patchValue(this.book as Book);
    this.bookForm.patchValue({ id:id });
  }
  public buildForm(): void {
    this.bookForm = new FormGroup({
      id: new FormControl(),
      title: new FormControl(null, [
        Validators.required
      ]),
      author: new FormControl(null, [
        Validators.required,
        Validators.pattern('^[a-zA-ZÀ-ÿ]{2,}(?: [a-zA-ZÀ-ÿ]+){1,}$'),
      ]),
      category_id:  new FormControl(),
      status: new FormControl(null)
  });
  }

  onCancel(): void{
    this.router.navigate(['/book']);
  }

  onSubmit(){
    const book: Book = this.bookForm.getRawValue();
    if (this.id) {
      this.update(book);
    } else {
      this.save(book);
    }
    console.log(book);
  }


  public update(book: Book): void {
    this.bookService
      .update(book)
      .subscribe({
        error: (err) => {
          this.snackbarService.openSnackBar(err.error.message);
        },
        complete: () => {
          this.router.navigate(['/book']);
        },
      });
  }
  public save(book: Book): void {
  this.bookService
  .create(book)
  .subscribe({
    error: (err) => {
      this.snackbarService.openSnackBar(err.error.message);
    },
    complete: () => {
      this.router.navigate(['/book']);
    },
  });
  }

  private getBookById(id: string): void {
    this.bookService
      .findById(id)
      .subscribe({
        next: (response: Book) => {
          this.book = response;
          this.updateForm(this.book.id);
        },
        error: (err: HttpErrorResponse) => {
          this.snackbarService.openSnackBar(
            err.error.message || 'Erro ao buscar livro por id. Por favor, tente novamente.'
          );
        },
      });
  }

  public getAllCategory(){
    this.bookService.findAllCategory()
    .subscribe({
      next: (response: Category[]) => {
        this.categories = response;
      },
      error: (err: HttpErrorResponse) => {
        this.snackbarService.openSnackBar(
          err.error.message || 'Erro ao buscar categoria. Por favor, tente novamente.'
        );
      },
      complete: () => {
        console.log("Categorias ok")
      }
    });
}



}

