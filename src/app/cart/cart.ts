import { Component } from '@angular/core';
import { SelectedCard } from '../selected-card/selected-card'

@Component({
  selector: 'app-cart',
  imports: [SelectedCard],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart {}
