import { Component } from '@angular/core';
import { ArticleService } from './article.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ecommerce-wb';
  constructor(private articleService: ArticleService) {

  }
  clicked() {
    console.log('clicked');

  }
  getCartSize(): number {
    return this.articleService.getCart().length
  }
}
