import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-inscription',
  imports: [RouterLink],
  templateUrl: './inscription.html',
  styleUrl: './inscription.css',
})
export class Inscription {
  constructor(private router: Router) {}

  onCreerCompte() {
    this.router.navigate(['/login']);
  }
}
