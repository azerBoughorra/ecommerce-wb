import { Article } from './../models/article.model';
import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../article.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit {

  article = new Article(null, '', '', '', 0, '');
  constructor(private articleService: ArticleService, private router: Router) { }

  ngOnInit(): void {
  }
  add() {
    console.log(this.article);
    this.articleService.addArticle(this.article).subscribe(() => {
      this.router.navigate(['/shop'])
    })
  }
}
