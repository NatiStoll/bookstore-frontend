import { Component, OnInit } from '@angular/core';
import { BookService } from '../../service/book.service';
import { Book } from '../../models/book.model';
import { first } from 'rxjs';

@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.scss']
})
export class ListBookComponent implements OnInit {
  public books!: Book[];

  constructor(private bookService: BookService){}

  ngOnInit(): void {
      this.getBooks();
  }

  public getBooks() {
    this.bookService
      .findAll()
      .pipe(first())
      .subscribe({
        next: (response) => {
          this.books = response;
        },
        error: (err) => {
          console.log("Deu erro getBooks");
        }
      })
  }
}
