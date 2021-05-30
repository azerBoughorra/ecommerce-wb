import { LoginService } from './login.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Article } from './models/article.model';
import { CartElement } from './models/cart-element.model';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {


  private Data = [
    new Article(1, "tapis de souris", "Plus petit mais tout aussi efficace que le QcK, le QcK Mini est le premier tapis de chez Steelseries en mousse et tissu.", "https://media.ldlc.com/r1600/ld/products/00/03/49/81/LD0003498188_2.jpg", 30, "Gaming"),
    new Article(2, "PC portable DELL", "Ecran 15.6  HD, Processeur Intel ® Core ™ i7-5500U (2.4-3.0 GHz, 4 Mo de mémoire cache), Systéme d'exploitation Free Dos, Mémoire RAM8 Go DDR3L, Disque Dur 1 To HDD,  Carte Graphique NVIDIA Geforce 920M ( 4Go dédiée ) avec WiFi, Ethernet, Bluetooth", "https://www.tunisianet.com.tn/69371-large/pc-portable-dell-inspiron-7559-i5-6e-gen-16go-128-go-ssd-m2.jpg", 1299, "Laptop"),
    new Article(3, "PC portable TOCHIBA", "Ordinateur / PC Portable Dynabook Toshiba Satellite Pro R50-E-12P - Core i3 7020U / 2.3 GHz - Win 10 Pro 64 bits - 8 Go RAM - 128 Go SSD - 15.6 1366 x 768 (HD) - UHD Graphics 620 - Wi-Fi, Bluetooth - noir graphite - avec 1 an de garantie fiabilité", "https://image.darty.com/informatique/ordinateur_portable-portable/portable/toshiba_c50t-b-110_s1510124166795A_104519670.jpg", 1500, "Laptop"),
    new Article(4, "casque Bluetooth JBL", "Micro Casque JBL T500 - Connectivité Sans Fil: Bluetooth V 4.1 - Impédance nominale: 32 ohm - Réponse en fréquence: 20 - 20 kHz - Diamètre du haut-parleur: 32mm - Batterie Lithium-ion-polymère - Temps de charge: 2 heures - Autonomie: 16 heures - Couleur: Noir", "https://www.gforcedistribution.com/3787-large_default/jbl-tune-750btnc-noir.jpg", 80, "Sound"),
    new Article(5, "Enceinte Bluetooth Portable", "COOCHEER 24W Haut-Parleur Portable Bluetooth avec lumière", "https://images-na.ssl-images-amazon.com/images/I/810neKWwu0L._AC_SY450_.jpg", 50, "Sound")
  ]
  constructor(private http: HttpClient, private loginService: LoginService) { }
  getAll() {
    return this.http.get<Article[]>("/api/articles")
  }
  getCategories() {
    return this.http.get<string[]>("/api/categories")

  }
  getArticlesByCategory(category: string) {
    return this.http.get<Article[]>("/api/articles/category/" + category);
  }
  getArticleById(id: number) {
    return this.http.get<Article>("/api/articles/" + id)
  }
  addArticle(article: Article) {
    let header = new HttpHeaders({
      'x-access-token': this.loginService.getToken()
    });
    return this.http.put("/api/articles/", article, { headers: header })
  }

  addToCart(chartArticle: CartElement) {
    let chartArticles: CartElement[] = this.getCart();
    const index = chartArticles.findIndex(i => i.article.id == chartArticle.article.id);
    if (index >= 0) {
      chartArticles[index].quantity = chartArticle.quantity;
    } else {
      chartArticles.push(chartArticle)
    }
    this.setCart(chartArticles);
  }
  getCart() {
    return JSON.parse(sessionStorage.getItem('cart')) || [];
  }
  setCart(cart: CartElement[]) {
    sessionStorage.setItem('cart', JSON.stringify(cart))
  }
  deleteArticle(id: number) {
    let header = new HttpHeaders({
      'x-access-token': this.loginService.getToken()
    });
    return this.http.delete("api/articles/" + id, { headers: header })
  }
}
