import { Component, OnInit } from '@angular/core';
import { BookService } from '../../service/book.service';
import { Book } from '../../models/book.model';
import { first } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { SnackbarService } from 'src/app/shared/service/snackbar.service';
import { Category } from '../../models/book.model';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.scss']
})
export class ListBookComponent implements OnInit {
  public books!: Book[];
  public book!: Book;
  public category!: Category;
  public categories!: Category[];

  constructor(  private router: Router,
    private route: ActivatedRoute,
    private bookService: BookService,
    private snackbarService: SnackbarService){}

  ngOnInit(): void {
      this.getBooks();
      this.getAllCategory();
   
      
      
  }
  getCategoryName(category_id?: string | undefined): string {
    const foundCategory = this.categories.find(cat => cat.id === category_id);
    return foundCategory ? foundCategory.name : "undefined";
  }


 
  public getBooks(): void {
    this.bookService.findAll().pipe(first()).subscribe({
      next: (response) => {
        this.books = response;
      },
      error: (err) => {
        this.snackbarService.openSnackBar(err.error.message);
      },
    });
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

  public getCategorybyId(id_category: string){
    this.bookService.findCategorybyId(id_category)
    .subscribe({
      next: (response: Category) => {
        this.category = response;
        console.log(this.category);
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

public getAllCategory(){
  this.bookService.findAllCategory()
  .subscribe({
    next: (response: Category[]) => {
      this.categories = response;
      console.log(response);
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
