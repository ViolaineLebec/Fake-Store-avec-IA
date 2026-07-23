import { Injectable } from '@angular/core';

interface User {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private users: User[] = [];

  register(email: string, password: string): void {
    this.users.push({ email, password });
  }

  login(email: string, password: string): boolean {
    return this.users.some(u => u.email === email && u.password === password);
  }
}