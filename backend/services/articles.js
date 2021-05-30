const puppeteer = require('puppeteer');
const config = require("../JWT.config");
const jwt = require("jsonwebtoken");
let articles = [
    { "id": 1, "name": "tapis de souris", "desc": "Plus petit mais tout aussi efficace que le QcK, le QcK Mini est le premier tapis de chez Steelseries en mousse et tissu.", "img": "https://media.ldlc.com/r1600/ld/products/00/03/49/81/LD0003498188_2.jpg", "price": 30, "category": "Gaming" },
    { "id": 2, "name": "PC portable DELL", "desc": "Ecran 15.6  HD, Processeur Intel ® Core ™ i7-5500U (2.4-3.0 GHz, 4 Mo de mémoire cache), Systéme d'exploitation Free Dos, Mémoire RAM8 Go DDR3L, Disque Dur 1 To HDD,  Carte Graphique NVIDIA Geforce 920M ( 4Go dédiée ) avec WiFi, Ethernet, Bluetooth", "img": "https://www.tunisianet.com.tn/69371-large/pc-portable-dell-inspiron-7559-i5-6e-gen-16go-128-go-ssd-m2.jpg", "price": 1299, "category": "Laptop" },
    { "id": 3, "name": "PC portable TOCHIBA", "desc": "Ordinateur / PC Portable Dynabook Toshiba Satellite Pro R50-E-12P - Core i3 7020U / 2.3 GHz - Win 10 Pro 64 bits - 8 Go RAM - 128 Go SSD - 15.6 1366 x 768 (HD) - UHD Graphics 620 - Wi-Fi, Bluetooth - noir graphite - avec 1 an de garantie fiabilité", "img": "https://image.darty.com/informatique/ordinateur_portable-portable/portable/toshiba_c50t-b-110_s1510124166795A_104519670.jpg", "price": 1500, "category": "Laptop" },
    { "id": 4, "name": "casque Bluetooth JBL", "desc": "Micro Casque JBL T500 - Connectivité Sans Fil: Bluetooth V 4.1 - Impédance nominale: 32 ohm - Réponse en fréquence: 20 - 20 kHz - Diamètre du haut-parleur: 32mm - Batterie Lithium-ion-polymère - Temps de charge: 2 heures - Autonomie: 16 heures - Couleur: Noir", "img": "https://www.gforcedistribution.com/3787-large_default/jbl-tune-750btnc-noir.jpg", "price": 80, "category": "Sound" },
    { "id": 5, "name": "Enceinte Bluetooth Portable", "desc": "COOCHEER 24W Haut-Parleur Portable Bluetooth avec lumière", "img": "https://images-na.ssl-images-amazon.com/images/I/810neKWwu0L._AC_SY450_.jpg", "price": 50, "category": "Sound" }
]
let nextId = articles.length + 1;
exports.getArticles = async (req, res) => {
    res.status(200).send(articles)
}
exports.getCategories = async (req, res) => {
    let duplicatedCategories = articles.map(d => d.category);
    let categories = [];
    duplicatedCategories.forEach((d, i) => {
        if (duplicatedCategories.indexOf(d) == i) {
            categories.push(d);
        }
    });
    res.status(200).send(categories)
}
exports.getArticlesByCategory = async (req, res) => {
    let category = req.params.category;
    let result = [];
    for (const article of articles) {
        if (article.category == category) {
            result.push(article)
        }
    }
    res.status(200).send(result);
}
exports.getArticlesById = async (req, res) => {
    res.status(200).send(articles.find((d) => d.id == req.params.id));
}
exports.signin = (req, res) => {
    if (req.body.user == 'admin' && req.body.password == 'admin') {
        var token = jwt.sign({
            id: req.body.user
        }, config.secret, {
            expiresIn: 86400 // 24 hours
        });
        res.send({ token: token });
    } else {
        res.status(500).send('Credentials invalide');
    }

};
exports.addArticle = (req, res) => {
    req.body.id = nextId;
    nextId++;
    articles.push(req.body)
    res.status(200).send();

};
exports.deleteArticle = (req, res) => {
    const id = req.params.id;
    const oldLength = articles.length;
    articles = articles.filter(a => a.id != id);
    if (articles.length == oldLength) {
        res.status(500).send('article not found');
    } else {
        res.status(200).send();
    }

};