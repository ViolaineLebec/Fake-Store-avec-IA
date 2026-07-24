# Novamarket

Application Angular de e-commerce (catalogue produits, panier, fiche produit) — projet de formation Simplon.

_(English version below)_

## Prérequis

- [Node.js](https://nodejs.org/) 20+
- npm (fourni avec Node.js)
- [Angular CLI](https://angular.dev/tools/cli) — installé en tant que dépendance du projet, pas besoin de l'installer globalement

## Installation

```bash
npm install
```

## Lancer le projet en développement

```bash
npm start
```

ou directement avec Angular CLI :

```bash
ng serve
```

L'application est accessible sur [http://localhost:4200](http://localhost:4200). Elle se recharge automatiquement à chaque modification des fichiers source.

## Lancer les tests

```bash
npm test
```

## Build de production

```bash
npm run build
```

Les fichiers compilés sont générés dans le dossier `dist/`.

## API

Les produits sont récupérés depuis l'API publique [Fake Store API](https://fakestoreapi.com/) — aucune configuration ni clé d'API n'est nécessaire.

## Structure du projet

```
src/app/
├── home/            page catalogue (liste des produits)
├── product-card/    card produit affichée dans le catalogue
├── description/     page détail d'un produit (route /description/:id)
├── cart/            page panier
├── selected-card/   card d'un article dans le panier
├── login/           page de connexion
├── inscription/     page d'inscription
├── navbar/, footer/ mise en page globale
└── services/        logique métier partagée (produits, panier, auth, commandes)
```

---

# Novamarket (English)

Angular e-commerce application (product catalog, cart, product detail page) — Simplon training project.

## Requirements

- [Node.js](https://nodejs.org/) 20+
- npm (bundled with Node.js)
- [Angular CLI](https://angular.dev/tools/cli) — installed as a project dependency, no need to install it globally

## Installation

```bash
npm install
```

## Run in development mode

```bash
npm start
```

or directly with the Angular CLI:

```bash
ng serve
```

The app is available at [http://localhost:4200](http://localhost:4200). It automatically reloads on every source file change.

## Run tests

```bash
npm test
```

## Production build

```bash
npm run build
```

Compiled output is generated in the `dist/` folder.

## API

Products are fetched from the public [Fake Store API](https://fakestoreapi.com/) — no configuration or API key required.

## Project structure

```
src/app/
├── home/            product catalog page
├── product-card/    product card displayed in the catalog
├── description/     product detail page (route /description/:id)
├── cart/            cart page
├── selected-card/   card for one item in the cart
├── login/           login page
├── inscription/     signup page
├── navbar/, footer/ global layout
└── services/        shared business logic (products, cart, auth, orders)
```