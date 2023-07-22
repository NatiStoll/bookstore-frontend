import { Component, OnInit } from '@angular/core';
import { Book,  StatusBook } from '../../models/book.model';
import { Validators, FormControl, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { BookService } from '../../service/book.service';
import { SnackbarService } from 'src/app/shared/service/snackbar.service';
import { HttpErrorResponse } from '@angular/common/http';


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
  public id?: number;
  public categoria_id?: number;
  public title = "Register Book"
 

  public bookForm!: FormGroup;

  readStatus: StatusReadBook[] = [
    {value: StatusBook.READ, viewValue: 'Read'},
    {value: StatusBook.NOT_READ, viewValue: 'Reading'},
    {value:StatusBook.READING, viewValue: 'Not Read'},
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
  
    if (this.id) {
      this.title = 'Editar Usuário';
      console.log(this.id);
      // if(this.book){

      //   this.categoria_id = this.book.categoria.id;
      this.updateForm(this.id,
        //  this.categoria_id
         );
      // }
      this.getBookById(String(this.id));
    }
  }

  private updateForm(id: number,
    //  categoria_id: number
     ): void {
    this.bookForm.patchValue(this.book as Book);
    this.bookForm.patchValue({ id:id,
      // categoria: { id: categoria_id } 
   });
  


  }
  public buildForm(): void {
    this.bookForm = new FormGroup({
      id: new FormControl(),
      titulo: new FormControl(null, [
        Validators.required,
        Validators.pattern('^[a-zA-ZÀ-ÿ]{2,}(?: [a-zA-ZÀ-ÿ]+){1,}$'),
      ]),
      nomeAutor: new FormControl(null, [
        Validators.required,
        Validators.pattern('^[a-zA-ZÀ-ÿ]{2,}(?: [a-zA-ZÀ-ÿ]+){1,}$'),
      ]),
      categoria: new FormGroup({
          id: new FormControl(),
          nome: new FormControl(),
          descricao: new FormControl(),
        }),
      status: new FormControl(null)

  });
  }

  onCancel(): void{
    this.router.navigate(['/book']);
  }

  onSubmit(){
    const book: Book = this.bookForm.getRawValue();
    const category: number = book.categoria.id;
    if (this.id) {
      this.update(book);
    } else {
      this.save(book, category);
    }
    console.log(book);
  }


  public update(book: Book): void {
    this.bookService
      .update(book)
      // .pipe(first())
      .subscribe({
        error: (err) => {
          this.snackbarService.openSnackBar(err.error.message);
        },
        complete: () => {
          this.router.navigate(['/book']);
        },
      });
  }
  public save(book: Book, category: number): void {
  this.bookService
  .create(book, category)
  // .pipe(first())
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
          this.updateForm(this.book.id
            // , this.book.categoria.id
            );
        },
        error: (err: HttpErrorResponse) => {
          this.snackbarService.openSnackBar(
            err.error.message || 'Houve um erro. Por favor, tente novamente.'
          );
        },
      });
  }

}

