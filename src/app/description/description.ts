import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-descritpion,
  templateUrl: './description.html',
  styleUrl: './descritpion.css',
})
export class ProductDetailComponent implements OnInit {

  produit: any;

  produits = [
    {
      id: 1,
      nom: 'Fjallraven - Foldsack No. 1 Backpack',
      prix: 109.95,
      image: 'assets/images/sac.jpg',
      description: 'Sac à dos très résistant pour ordinateur portable jusqu’à 15 pouces.'
    }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.produit = this.produits.find(p => p.id === id);
  }
}
