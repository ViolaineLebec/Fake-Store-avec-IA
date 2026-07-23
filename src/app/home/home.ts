import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductCard } from '../product-card/product-card';

// TODO: à remplacer par l'import depuis '../services/product' une fois le service prêt
export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ProductCard,
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

  // ---- Données mockées temporaires (à remplacer par ProductService.getLimitedProducts(8)) ----
  products = signal<Product[]>([
    {
      id: 1, title: 'Produit 1', price: 29.99,
      description: '', category: 'electronique',
      image: 'https://via.placeholder.com/200',
      rating: { rate: 4.2, count: 120 }
    },
    {
      id: 2, title: 'Produit 2', price: 49.99,
      description: '', category: 'vetements',
      image: 'https://via.placeholder.com/200',
      rating: { rate: 3.8, count: 45 }
    },
    {
      id: 3, title: 'Produit 3', price: 15.5,
      description: '', category: 'accessoires',
      image: 'https://via.placeholder.com/200',
      rating: { rate: 4.7, count: 300 }
    },
    {
      id: 4, title: 'Produit 4', price: 89.0,
      description: '', category: 'electronique',
      image: 'https://via.placeholder.com/200',
      rating: { rate: 4.0, count: 89 }
    },
    {
      id: 5, title: 'Produit 5', price: 22.0,
      description: '', category: 'chaussures',
      image: 'https://via.placeholder.com/200',
      rating: { rate: 3.5, count: 12 }
    },
    {
      id: 6, title: 'Produit 6', price: 65.0,
      description: '', category: 'vetements',
      image: 'https://via.placeholder.com/200',
      rating: { rate: 4.4, count: 67 }
    },
    {
      id: 7, title: 'Produit 7', price: 39.99,
      description: '', category: 'accessoires',
      image: 'https://via.placeholder.com/200',
      rating: { rate: 4.1, count: 200 }
    },
    {
      id: 8, title: 'Produit 8', price: 120.0,
      description: '', category: 'electronique',
      image: 'https://via.placeholder.com/200',
      rating: { rate: 4.9, count: 500 }
    },
  ]);

  isLoading = signal<boolean>(false);
  errorMessage = signal<string | null>(null);
}