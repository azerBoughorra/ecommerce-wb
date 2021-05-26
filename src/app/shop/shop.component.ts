import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../article.service';
import { Article } from '../models/article.model';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  selectedCategory = null;
  categories: string[];
  articles: Article[];
  constructor(public service: ArticleService) { }

  ngOnInit(): void {
    this.articles = this.service.getAll();
    this.categories = this.service.getCategories();


  }
  catClicked(category: string) {
    this.selectedCategory = category;
    this.articles = this.service.getArticlesByCategory(category)
  }
  getAll() {
    this.selectedCategory = 'all';
    this.articles = this.service.getAll();
  }

}
