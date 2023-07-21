import { Injectable } from '@angular/core';
import { Book } from '../models/book.model';
import { GlobalConstants } from 'src/commom/global-constants';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private apiURL = GlobalConstants.API_URL;

  constructor(private http: HttpClient) { }

  public create(book: Book): Observable<Book> {
    return this.http.post<Book>(`${this.apiURL}/livros?categoria=${book.categoria.id}`, book);
  }

  public findAll(id_categoria: number): Observable<Partial<Book[]>> {
    return this.http.get<Book[]>(`${this.apiURL}/livros?categoria=${id_categoria}`);
  }

  public findById(id: string): Observable<Book>{
    return this.http.get<Book>(`${this.apiURL}/livros/${id}`);
  }

  public update(book: Book): Observable<Book>{
    return this.http.put<Book>(`${this.apiURL}/livros/${book.id}`, book)
  }

  public remove(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiURL}/livros/${id}`);
  }
}
