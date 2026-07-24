import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Auth } from '../services/auth';

@Component({
  selector: 'app-login',
  imports: [RouterLink, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  email = '';
  password = '';

  constructor(private router: Router, private authService: Auth) {}

  onSeConnecter() {
    if (!this.email || !this.password || !this.authService.login(this.email, this.password)) {
      this.router.navigate(['/error']);
      return;
    }
    console.log('isLoggedIn après connexion :', this.authService.isLoggedIn());
    this.router.navigate(['/home']);
  }
}