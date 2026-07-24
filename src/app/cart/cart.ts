import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectedCard } from '../selected-card/selected-card';
import { Cart as CartService } from '../services/cart';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  imports: [CommonModule, SelectedCard],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart {
  cartService = inject(CartService);
  private router = inject(Router);

  passerCommande(): void {
    this.router.navigate(['/merci']);
  }
}

