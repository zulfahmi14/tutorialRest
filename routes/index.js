var express = require('express');
var router = express.Router();
var Book = require("../models/book");

/* GET home page. */

router.get('/', async function(req, res, next) {
  let book = await Book.create({title:"bobo"});
  return res.status(200).json({
    message : "success !",
    book
  });
  res.render('index', { title: 'Express' });
});

router.post('/', async function(req, res, next) {
  
  let title= req.body.title, book = await Book.create({title});
  return res.status(200).json({
    message : "success !",
    book
  });
  res.render('index', { title: 'Express' });
});

module.exports = router;
