import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalConstants } from 'src/commom/global-constants';
import { LoginResponse } from '../models/login-response.model';
import { LoginCredentials } from '../models/login-credentials.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiURL = GlobalConstants.API_URL;

  constructor(private http: HttpClient) { }

  public login(credentials: LoginCredentials){
    return this.http.post<LoginResponse>(`${this.apiURL}/sessions`, credentials);
  }
}
