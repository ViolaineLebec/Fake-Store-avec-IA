import { Component, Input, inject } from '@angular/core';
import { Product } from '../home/home';
import { Cart as CartService } from '../services/cart';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {
  @Input({ required: true }) produit!: Product;

  private cartService = inject(CartService);

  ajouterAuPanier() {
    this.cartService.addToCart(this.produit);
  }
}
