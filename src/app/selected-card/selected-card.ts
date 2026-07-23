import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-selected-card',
  imports: [],
  templateUrl: './selected-card.html',
  styleUrl: './selected-card.css',
})
export class SelectedCard {
  productName = 'Casque sans fil Pulse';
  price = 89.0;
  imageUrl = 'https://picsum.photos/id/367/100/100';
  quantity = 1;

  @Output() quantityChange = new EventEmitter<number>();

  increment() {
    this.quantity++;
    this.quantityChange.emit(this.quantity);
  }

  decrement() {
    if (this.quantity === 0) {
      return;
    }
    this.quantity--;
    this.quantityChange.emit(this.quantity);
  }
}
