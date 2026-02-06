import { Injectable, inject, signal, computed } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap, catchError, of } from 'rxjs';
import { ApiService } from './api.service';
import { User, LoginCredentials, LoginResponse } from '../../shared/models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly apiService = inject(ApiService);
  private readonly router = inject(Router);

  // Signals para manejo de estado reactivo
  private readonly userSignal = signal<User | null>(null);
  private readonly isAuthenticatedSignal = signal<boolean>(false);

  // Computed signals
  readonly user = computed(() => this.userSignal());
  readonly isAuthenticated = computed(() => this.isAuthenticatedSignal());

  constructor() {
    this.loadUserFromStorage();
  }

  login(credentials: LoginCredentials): Observable<LoginResponse> {
    return this.apiService.post<LoginResponse>('/v1/autenticar/login', credentials).pipe(
      tap(response => {
        if (response.result) {
          this.setUser(response.result);
          this.router.navigate(['/admin']);
        }
      }),
      catchError(error => {
        console.error('Login error:', error);
        return of(error);
      })
    );
  }

  logout(): void {
    localStorage.clear();
    this.userSignal.set(null);
    this.isAuthenticatedSignal.set(false);
    this.router.navigate(['/login']);
  }

  private setUser(user: User): void {
    localStorage.setItem('user', JSON.stringify(user));
    this.userSignal.set(user);
    this.isAuthenticatedSignal.set(true);
  }

  private loadUserFromStorage(): void {
    const userStr = localStorage.getItem('user');
    if (userStr) {
      try {
        const user: User = JSON.parse(userStr);
        this.userSignal.set(user);
        this.isAuthenticatedSignal.set(true);
      } catch (error) {
        console.error('Error parsing user from storage:', error);
        this.logout();
      }
    }
  }

  getToken(): string | null {
    const user = this.userSignal();
    return user?.token || null;
  }
}
