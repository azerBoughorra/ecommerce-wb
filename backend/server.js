let express = require('express')
let authJWT = require('./authJWT')
let app = express();
let bodyParser = require('body-parser');
var port =  8080;
let articleService = require('./services/articles');


app.listen(port, function () {
    console.log("Running FirstRest on Port " + port);
})


app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.get('/api/articles', articleService.getArticles)
app.get('/api/articles/category/:category', articleService.getArticlesByCategory)
app.get('/api/articles/:id', articleService.getArticlesById)
app.get('/api/categories', articleService.getCategories)
app.post('/api/signIn', articleService.signin)
app.put('/api/articles/', authJWT.verifyToken,articleService.addArticle)
app.delete('/api/articles/:id',authJWT.verifyToken, articleService.deleteArticle)

