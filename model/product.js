const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
        trim: true,
    },
    price: {
        type: Number,
        required: true,
        min: 0,
    },
    category: {
        type: String,
        
        enum: ['Electronics', 'Clothing', 'Books', 'Other'],
        required: true,
    },
    stock: {
        type: Number,
        required: true,
        min: 0, // Ensure stock is not negative
        default: 0,
    },
    description: {
        type: String,
        required: true,
    },






})
const Product = mongoose.model('Product', productSchema);
module.exports =Product ;