import { Component, OnInit, signal } from '@angular/core';
import { ProductService, Product } from '../services/product';
import { ProductCard } from '../product-card/product-card';

@Component({
  selector: 'app-home',
  imports: [ProductCard],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {
  products = signal<Product[]>([]);

  isLoading = signal<boolean>(false);
  errorMessage = signal<string | null>(null);
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe(data => {
      this.products.set(data);
    });
  }
}