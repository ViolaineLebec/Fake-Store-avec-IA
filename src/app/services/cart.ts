import { Injectable, computed, signal } from '@angular/core';
import { Product } from './product';

export interface CartItem {
  product: Product;
  quantity: number;
}

@Injectable({ providedIn: 'root' })
export class Cart {
  private itemsSignal = signal<CartItem[]>([]);
  items = this.itemsSignal.asReadonly();

  total = computed(() =>
    this.itemsSignal().reduce((sum, item) => sum + item.product.price * item.quantity, 0)
  );
  
itemCount = computed(() =>
    this.itemsSignal().reduce((sum, item) => sum + item.quantity, 0)
  );


  addToCart(product: Product): void {
    const existing = this.itemsSignal().find((item) => item.product.id === product.id);
    if (existing) {
      this.updateQuantity(product.id, existing.quantity + 1);
      return;
    }
    this.itemsSignal.update((items) => [...items, { product, quantity: 1 }]);
  }

  updateQuantity(productId: number, quantity: number): void {
    if (quantity <= 0) {
      this.itemsSignal.update((items) => items.filter((item) => item.product.id !== productId));
      return;
    }
    this.itemsSignal.update((items) =>
      items.map((item) => (item.product.id === productId ? { ...item, quantity } : item))
    );
  }
}
