let mongoose = require('mongoose');
let Schema = mongoose.Schema;

// create a schema
let userSchema = new Schema({
    
    userName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required : true
    },
    email: {
        type : String,
        required : true
    }
});

// create a model
let User = mongoose.model('users', userSchema);

// export the model
module.exports = User;