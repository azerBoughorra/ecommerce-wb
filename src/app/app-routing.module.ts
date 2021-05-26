import { ArticleDetailsComponent } from './article-details/article-details.component';
import { CartComponent } from './cart/cart.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShopComponent } from './shop/shop.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'shop',
    pathMatch: 'full'
  },
  {
    path: 'shop',
    component: ShopComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'details/:id',
    component: ArticleDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
