import { Injectable } from '@angular/core';
import { Book, BookRequest, Category } from '../models/book.model';
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
    return this.http.post<Book>(`${this.apiURL}/books`, book, this.setHeaders());
  }

  public findAll(): Observable<Partial<Book>[]> {
    const header = this.setHeaders();
    return this.http.get<Partial<Book>[]>(`${this.apiURL}/books`, header);
  }

  public findById(id: string): Observable<Book> {
    return this.http.get<Book>(`${this.apiURL}/books/${id}`, this.setHeaders());
  }

  public update(book: Book): Observable<Book> {
    
    return this.http.put<Book>(`${this.apiURL}/books/${book.id}`, book, this.setHeaders())
  }

  public remove(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiURL}/books/${id}`, this.setHeaders());
  }
  public findAllCategory(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.apiURL}/categories`, this.setHeaders())
  }
  public findCategorybyId(category_id: string): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.apiURL}/categories/${category_id}`, this.setHeaders());
  }

  private setHeaders() {
    let token = localStorage.getItem(GlobalConstants.USER_TOKEN) as string;
    token = token?.replaceAll('"','')
    return { headers: { Authorization: `Bearer ${token}`}};
  }
}
