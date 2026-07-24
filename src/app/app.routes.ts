import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Inscription } from './inscription/inscription';
import { Home } from './home/home';
import { Cart } from './cart/cart';
import { Description} from './description/description';
import { NotFound } from './not-found/not-found';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', component: Login },
  { path: 'inscription', component: Inscription },
  { path: 'home', component: Home },
  { path: 'cart', component: Cart },
  { path: 'description', component: Description },
  { path: 'error', component: NotFound },
  { path: '**', component: NotFound },
];