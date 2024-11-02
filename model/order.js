
const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    name: {
        type: String,

        required: true
    },
    // products: [
    //     {
    //         product: {
    //             type: mongoose.Schema.Types.ObjectId,
    //             ref: 'Product',                      
    //             required: true
    //         },
    //         quantity: {
    //             type: Number,
    //             required: true,
    //             min: 1
    //         },
    //         price: {
    //             type: Number,
    //             required: true
    //         }
    //     }
    // ],
    totalAmount: {
        type: Number,
        required: true
    },
    paymentMethod: {
        type: String,
        enum: ['Credit Card', 'Debit Card', 'PayPal', 'Cash on Delivery'],
        required: true
    },
    paymentStatus: {
        type: String,
        enum: ['Pending', 'Paid', 'Failed'],
        default: 'Pending',
        required: true
    },
    // orderDate: {
    //     type: Date,
    //     default: Date.now
    // },
    // deliveryDate: {
    //     type: Date,
    // }
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"

    },
    product: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product"

        }
    ],
     // Add Coupon Reference
     coupon: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Coupon"// Reference to the Coupon model
        
    },
    // discountApplied: {
    //     type: Number, // Store the actual discount applied (if any)
    //     default: 0
    // }


}, { timestamps: true });

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;



