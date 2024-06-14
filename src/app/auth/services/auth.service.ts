import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environments } from '@environments/environments';
import { Observable } from 'rxjs';
import { LoginRequest, LoginResponse } from '../interface/auth.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = environments.baseUrl;

  constructor(private http: HttpClient, private router: Router) {}

  login(loginrequest: LoginRequest): Observable<LoginResponse>{
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<LoginResponse>(`${this.baseUrl}api/authentication/sign-in`, loginrequest, { headers });
  }

  logout(){
    localStorage.removeItem('token');
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }

  getToken(): string | null{
    return localStorage.getItem('token');
  }
}
