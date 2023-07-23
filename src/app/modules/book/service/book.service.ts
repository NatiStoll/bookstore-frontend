import { Injectable } from '@angular/core';
import { Book, BookRequest, Categoria } from '../models/book.model';
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
    return this.http.post<Book>(`${this.apiURL}/books`, book);
  }

  public findAll(): Observable<Partial<Book>[]> {
    const header = this.setHeaders();
    console.log(header);
    return this.http.get<Partial<Book>[]>(`${this.apiURL}/books`, header);
  }

  public findById(id: string): Observable<Book> {
    return this.http.get<Book>(`${this.apiURL}/books/${id}`, this.setHeaders());
  }

  public update(book: Book): Observable<Book> {
    const header = this.setHeaders();
    return this.http.put<Book>(`${this.apiURL}/books/${book.id}`, book)
  }

  public remove(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiURL}/books/${id}`);
  }
  public findAllCategory(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(`${this.apiURL}/categories`, this.setHeaders())
  }
  public findCategorybyId(category_id: string): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(`${this.apiURL}/categories/${category_id}`)
  }

  private setHeaders() {
    let token = localStorage.getItem(GlobalConstants.USER_TOKEN) as string;
    token = token?.replaceAll('"','')
    return { headers: { Authorization: `Bearer ${token}`}};
  }
}
