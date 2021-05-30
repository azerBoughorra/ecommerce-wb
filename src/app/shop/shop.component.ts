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
    this.service.getAll().subscribe(articles => {
      this.articles = articles;
    })

    this.service.getCategories().subscribe(cats => {
      this.categories = cats;
    });


  }
  catClicked(category: string) {
    this.selectedCategory = category;
    this.service.getArticlesByCategory(category).subscribe(x => {
      this.articles = x;
    })
  }
  getAll() {
    this.selectedCategory = 'all';
    this.service.getAll().subscribe(e => {
      this.articles = e;
    });
  }

}
