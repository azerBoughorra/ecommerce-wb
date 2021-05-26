import { Article } from './article.model';
export class CartElement {
  constructor(
    public article: Article,
    public quantity: number
  ) {

  }
}
