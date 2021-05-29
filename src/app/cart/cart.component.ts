import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../article.service';
import { CartElement } from '../models/cart-element.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart: CartElement[];
  constructor(private articleService: ArticleService) { }

  ngOnInit(): void {
    this.cart = this.articleService.getCart();
  }
  getTotal(): number {
    try {
      return this.cart.map(item => item.quantity * item.article.price).reduce((i1, i2) => i1 + i2);
    } catch (e) {
      return 0;
    }

  }
  deleteElement(index) {
    this.cart.splice(index, 1);
    this.articleService.setCart(this.cart)
  }

}
