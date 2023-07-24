import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalConstants } from 'src/app/commom/global-constants';
import { LoginResponse } from '../models/login-response.model';
import { LoginCredentials } from '../models/login-credentials.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiURL = GlobalConstants.API_URL;


  constructor(private http: HttpClient) { }

  public login(credentials: LoginCredentials){

    return this.http.post<LoginResponse>(`${this.apiURL}/sessions`, credentials);
  }

  public logout(): void {
    localStorage.removeItem(GlobalConstants.USER);
    localStorage.removeItem(GlobalConstants.USER_TOKEN);
  }

  
  isLoggedIn(): boolean {
    const token = localStorage.getItem(GlobalConstants.USER_TOKEN);
    return !!token;
  }
}
