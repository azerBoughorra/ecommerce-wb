import { Article } from './../models/article.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-article-element',
  templateUrl: './article-element.component.html',
  styleUrls: ['./article-element.component.css']
})
export class ArticleElementComponent implements OnInit {

  @Input() article: Article;
  constructor() { }

  ngOnInit(): void {
  }

}
