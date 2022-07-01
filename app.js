const path = require ('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'pug');
app.set('views', 'views');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  res.render('home', {
    pageTitle: 'Pug-Express Home',
    path: '/'
  });
})

app.listen(3000);
