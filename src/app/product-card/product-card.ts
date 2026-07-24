import { Component, Input, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Product } from '../services/product';
import { Cart as CartService } from '../services/cart';

@Component({
  selector: 'app-product-card',
  imports: [RouterLink],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css'
})
export class ProductCard {
  @Input({ required: true }) product!: Product;

  private cartService = inject(CartService);

  ajouterAuPanier() {
    this.cartService.addToCart(this.product);
  }
}
