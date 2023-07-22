import { Injectable } from '@angular/core';
import { Book, BookRequest, Categoria} from '../models/book.model';
import { GlobalConstants } from 'src/commom/global-constants';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private apiURL = GlobalConstants.API_URL;

  constructor(private http: HttpClient) { }

  public create(book: BookRequest, categoria_id: number): Observable<Book> {
    return this.http.post<Book>(`${this.apiURL}/livros?id_categoria=${categoria_id}`, book);
  }

  public findAll(): Observable<Partial<Book>[]> {
    return this.http.get<Book[]>(`${this.apiURL}/livros`);
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
  public findAllCategory(): Observable<Categoria[]>{
    return this.http.get<Categoria[]>(`${this.apiURL}/categorias`)
  }
}
