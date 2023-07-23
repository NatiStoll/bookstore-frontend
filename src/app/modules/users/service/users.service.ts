import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { GlobalConstants } from 'src/commom/global-constants';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private apiURL: string = GlobalConstants.API_URL


  constructor(private http: HttpClient) {


  // public findAll(): Observable<User[]> {
  //   return this.http.get<User[]>(`${this.apiURL}/users`);
  // }

//  public findById(id: string): Observable<User> {
//   return this.http.get<User>(`${this.apiURL}/users/${id}`);
  }

  public create(user: User): Observable<any> {
    return this.http.post<any>(`${this.apiURL}/users/`, user);
  }

  // public update(user: User): Observable<any> {
  //   return this.http.put<User>(`${this.apiURL}/users/${user.id}`, user);
  // }

  // public delete(id: string): Observable<void> {
  //   return this.http.delete<void>(`${this.apiURL}/users/${id}`);
  // }

  // public getAddressByZipCode(zipCode: string): Observable<AddressDto> {
  //   return this.http.get<AddressDto>(
  //     `https://viacep.com.br/ws/${zipCode}/json/`
  //   );
  // }

  private setHeaders() {
     const token = localStorage.getItem(GlobalConstants.USER_TOKEN);
     return { headers: { Authorization: `Bearer ${token}` } };
  }
}
