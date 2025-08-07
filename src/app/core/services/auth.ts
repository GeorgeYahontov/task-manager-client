import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { Observable, tap } from 'rxjs';
import { ApiRoutes } from '@common/constants/api-routes.constant';
import { LoggerService } from '@core/services/logger.service';
import { AuthResponse } from '../models/auth-response.model';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private http = inject(HttpClient);
  private logger = inject(LoggerService);

  login(credentials: { email: string; password: string }): Observable<AuthResponse> {
    this.logger.log('Attempting login', credentials.email);
    return this.http.post<AuthResponse>(ApiRoutes.auth.login, credentials).pipe(
      tap(() => this.logger.log('Login request sent'))
    );
  }

  register(data: { email: string; password: string }): Observable<User> {
    this.logger.log('Registering new user', data.email);
    return this.http.post<User>(ApiRoutes.auth.register, data).pipe(
      tap(() => this.logger.log('Registration request sent'))
    );
  }

  logout(): void {
    this.logger.warn('User logging out');
    localStorage.removeItem('access_token');
  }

  getToken(): string | null {
    const token = localStorage.getItem('access_token');
    this.logger.log('Token retrieved', token);
    return token;
  }
}
