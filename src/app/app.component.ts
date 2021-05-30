import { Component } from '@angular/core';
import { ArticleService } from './article.service';
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ecommerce-wb';
  constructor(private articleService: ArticleService, private loginService: LoginService) {

  }
  clicked() {
    console.log('clicked');

  }
  getCartSize(): number {
    return this.articleService.getCart().length
  }
  loggout() {
    this.loginService.loggout();
  }
  isLoggedIn() {
    if (this.loginService.getToken() != null && this.loginService.getToken() != undefined) {
      return true
    }
    return false;
  }
}
