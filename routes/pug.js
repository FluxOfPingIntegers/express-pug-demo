const path = require('path');

const express = require('express');
const router = express.Router();

// this is our array of pugs that'll be held in memory
const pugs = [];

// /pugs/new => GET
router.get('/new', (req, res, next) => {
  res.render('pugs-new', {
    pageTitle: 'Create Pug',
    path: './new'
  });
});

// /pugs/create => POST
router.post('/create', (req, res, next) => {
  // creating object which is our submitted form data in req.body
  const pug = {
    "name": req.body.name,
    "age": req.body.age,
    "owner": req.body.owner
  };
  // adding object to list in memory
  pugs.push(pug);
  console.log("*SNORT* bow-wow!", pug);
  res.redirect('/pugs');
});

// /pugs => GET
router.get('/', (req, res, next) => {
    // passing object as 2nd argument with a key of 'pugs' holding our list
    res.render('pugs-index', {
      pageTitle: 'Pug List',
      pugs: pugs
    });
})

// exports our middleware
module.exports = router;

