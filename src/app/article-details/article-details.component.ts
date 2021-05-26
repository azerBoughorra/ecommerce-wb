import { CartElement } from './../models/cart-element.model';
import { Article } from './../models/article.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.css']
})
export class ArticleDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private service: ArticleService) {

  }
  quantity: number = 1;
  article: Article;
  id: number;
  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.article = this.service.getArticleById(this.id)
  }
  add() {
    let element: CartElement = new CartElement(this.article, this.quantity);
    this.service.addToCart(element);
  }

}
