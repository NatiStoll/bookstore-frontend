import { Injectable } from '@angular/core';
import { Book, Category } from '../models/book.model';
import { GlobalConstants } from 'src/app/commom/global-constants';
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

  public findAll(): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.apiURL}/books`
     
      );
  }

  public findById(id: string): Observable<Book> {
    return this.http.get<Book>(`${this.apiURL}/books/${id}`);
  }

  public update(book: Book): Observable<Book> {
    
    return this.http.put<Book>(`${this.apiURL}/books/${book.id}`, book)
  }

  public remove(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiURL}/books/${id}`);
  }
  public findAllCategory(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.apiURL}/categories`)
  }
  public findCategorybyId(category_id: string): Observable<Category> {
    return this.http.get<Category>(`${this.apiURL}/categories/${category_id}`);
  }

  private setHeaders() {
    let token = localStorage.getItem(GlobalConstants.USER_TOKEN) as string;
    token = token?.replaceAll('"','')
    return { headers: { Authorization: `Bearer ${token}`}};
  }
}
