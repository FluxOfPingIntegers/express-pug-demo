const path = require ('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// telling express to use the pug templating engine
app.set('view engine', 'pug');

// telling express where to find our templates.  This IS views by default
app.set('views', 'views');

app.use(bodyParser.urlencoded({extended: false}));

// allows our html files to search within the public folder for links & scripts
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  // searches for a html template with the name specified in the first argument
  // the second argument is an object with variables that can be used in the template
  res.render('home', {
    pageTitle: 'Pug-Express Home',
    path: '/'
  });
})

// setting the port # for our server.  The url is localhost:3000
app.listen(3000);
