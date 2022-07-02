const path = require ('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// telling express to use the pug templating engine
app.set('view engine', 'pug');

// telling express where to find our templates.  This IS views by default
app.set('views', 'views');

const pugRoutes = require('./routes/pug');

app.use(bodyParser.urlencoded({extended: false}));

// allows our html files to search within the public folder for links & scripts
app.use(express.static(path.join(__dirname, 'public')));

app.use('/pugs', pugRoutes);

app.use((req, res, next) => {
  res.status(404).render('404', {pageTitle: 'Page Not Found'});
})

// setting the port # for our server.  The starting url is localhost:3000/pugs/new
app.listen(3000);
