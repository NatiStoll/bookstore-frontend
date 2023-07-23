import { Component, OnInit } from '@angular/core';
import { BookService } from '../../service/book.service';
import { Book } from '../../models/book.model';
import { first } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { SnackbarService } from 'src/app/shared/service/snackbar.service';

@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.scss']
})
export class ListBookComponent implements OnInit {
  public books!: Partial<Book>[];
  public id_categoria?: number;
  public book!: Book;

  constructor(  private router: Router,
    private route: ActivatedRoute,
    private bookService: BookService,
    private snackbarService: SnackbarService){}

  ngOnInit(): void {
      this.getBooks();
      
  }

  public getBooks(): void  {
    this.bookService
      .findAll()
      .pipe(first())
      .subscribe({
        next: (response) => {
          this.books = response;
        },
        error: (err) => {
          this.snackbarService.openSnackBar(err.error.message);
        },
      })
  }

  onDelete(id: string): void {
    this.bookService.remove(id).pipe(
      first())
      .subscribe({
        error: (err) => {
          this.snackbarService.openSnackBar(err.error.message);
        },
        complete: () => {
          this.getBooks();
        },
      });
  }
}
