let mongoose = require('mongoose');
let Schema = mongoose.Schema;

// create a schema
let bookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    page:{
        type: Number,
        required: true
    },
    autohorId:{
        required: true,
        ref: a
    }
});

// create a model
let Book = mongoose.model('books', bookSchema);

// export the model
module.exports = Book;