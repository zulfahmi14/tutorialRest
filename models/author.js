let mongoose = require('mongoose');
let Schema = mongoose.Schema;

// create a schema
let authorSchema = new Schema({
    
    name : {
        type: String,
        required: true
    },
    address : {
        type : String,
        required: true
    }
});

// create a model
let Author = mongoose.model('authors', authorSchema);

// export the model
module.exports = Author;