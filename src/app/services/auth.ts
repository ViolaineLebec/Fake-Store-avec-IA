import { Injectable, signal } from '@angular/core';

interface User {
  login: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class Auth {
  private users: User[] = [];
  isLoggedIn = signal(false);

  register(login: string, password: string): void {
    this.users.push({ login, password });
  }

  login(login: string, password: string): boolean {
    if (!login || !password) {
      return false;
    }
    const success = this.users.some(
      u => u.login === login && u.password === password
    );
    if (success) {
      this.isLoggedIn.set(true);
    }
    return success;
  }
}