import { Component, Input, inject } from '@angular/core';
import { CartItem, Cart as CartService } from '../services/cart';

@Component({
  selector: 'app-selected-card',
  imports: [],
  templateUrl: './selected-card.html',
  styleUrl: './selected-card.css',
})
export class SelectedCard {
  @Input({ required: true }) item!: CartItem;

  private cartService = inject(CartService);

  increment() {
    this.cartService.updateQuantity(this.item.product.id, this.item.quantity + 1);
  }

  decrement() {
    this.cartService.updateQuantity(this.item.product.id, this.item.quantity - 1);
  }
}
