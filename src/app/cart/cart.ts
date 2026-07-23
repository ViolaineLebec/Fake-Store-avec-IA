import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectedCard } from '../selected-card/selected-card';
import { Cart as CartService } from '../services/cart';

@Component({
  selector: 'app-cart',
  imports: [CommonModule, SelectedCard],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart {
  cartService = inject(CartService);
}
