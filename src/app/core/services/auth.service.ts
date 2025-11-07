import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn: boolean = true;

  constructor() { }

  login (email: string, password: string): boolean {
    // Lógica de autenticação (exemplo simples)
    if(email === 'user@example.com' && password === 'password') {
      this.loggedIn = true;
      return true;
    }
    return false;
  }

  logout(): void {
    this.loggedIn = false;
  }

  get isLoggedIn(): boolean {
    return this.loggedIn;
  }
}
