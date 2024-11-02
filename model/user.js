
const mongoose = require('mongoose');

//use schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    mobile: {
        type: String,
        required: true
    },
    address: {
        type: String
    },
    work:{
        type: String,
        enum: ['customer', 'admin'],
        required : true,
    },
    username: {
        type: String,
        unique: true,
        trim: true,
        required: true
    },
    password: {
        type: String,
        required: true


    }
   

    
    
});

// Create user model
const User = mongoose.model('User', userSchema);
module.exports = User;