import { Component, Input } from '@angular/core';
import { Product } from '../home/home';


@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {
  
  produit = {
    nom: 'Ordinateur portable HP',
    prix: 899,
    image: 'assets/images/hp.jpg'
  };

  ajouterAuPanier() {
    alert(this.produit.nom + ' ajouté au panier !');
  }
}




