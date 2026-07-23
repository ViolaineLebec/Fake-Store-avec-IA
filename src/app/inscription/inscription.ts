import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth';

@Component({
  selector: 'app-inscription',
  imports: [RouterLink, FormsModule],
  templateUrl: './inscription.html',
  styleUrl: './inscription.css'
})
export class Inscription {
  email = '';
  password = '';
  confirmPassword = '';

  constructor(private router: Router, private authService: AuthService) {}

  onCreerCompte() {
    if (this.password !== this.confirmPassword) {
      return;
    }
    this.authService.register(this.email, this.password);
    this.router.navigate(['/login']);
  }
}