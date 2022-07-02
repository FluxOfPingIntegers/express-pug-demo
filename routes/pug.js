const path = require('path');

const express = require('express');

const router = express.Router();

const pugs = [];

router.get('/new', (req, res, next) => {
  res.render('pugs-new', {
    pageTitle: 'Create Pug',
    path: './new'
  });
});

router.post('/create', (req, res, next) => {
  const pug = {
    "name": req.body.name,
    "age": req.body.age,
    "owner": req.body.owner
  };
  pugs.push(pug);
  console.log("*SNORT* bow-wow!", pug);
  res.redirect('/pugs');
});

router.get('/', (req, res, next) => {
    res.render('pugs-index', {
      pageTitle: 'Pug List',
      pugs: pugs
    });
})

module.exports = router;