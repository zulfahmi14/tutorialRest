var express = require('express');
var router = express.Router();
var Book = require("../models/book");
let BookController = require('../controller/book');

router.post('/',async(req,res,next)=>{
    await BookController.create(req,res,next);
});
router.get('/',async(req,res,next)=>{
    await BookController.getAll(req,res,next);
})
router.put('/:_id',async(req,res,next)=>{
    await BookController.edit(req,res,next);
})
router.delete('/:_id',async(req,res,next)=>{
    await BookController.delete(req,res,next);
})

module.exports = router;