let Book = require('../models/book');

class BookController {
    constructor(){
    }

    static async create(req,res,next){
        let {title, page} = req.body;
        try{
            let book = await Book.create({title,page});
            return res.json({status:201, message:"book berhasil ditambahkan", book});
        }
        catch(e){
            return res.json(e);
        }
    }
    static async getAll(req,res,next){
        let books = await Book.find({});
        return res.json({status:200,books});
    }
    static async edit(req,res,next){
        let {_id} = req.params,
            {title,page} = req.body ;
        let book = await Book.findById({_id});
        // edit
        book.title = title || book.title ;
        book.page = page || book.page ;
        
        await book.save();
        return res.json({status:201, message:"Book berhasil diedit", book});
    }
    static async delete(req,res,next){
        let {_id} = req.params,
            result = await Book.deleteOne({_id});
            return res.json({status:200,message:"Data berhasil dihapus", result});
    }
}

module.exports = BookController ;