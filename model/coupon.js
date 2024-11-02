// models/Coupon.js
const mongoose = require('mongoose');

const couponSchema = new mongoose.Schema({
    code: {
        type: String,
        required: true,
        unique: true
    },
    discountType: {
        type: String,
        enum: ['fixed', 'percentage'],
        required: true
    },
    // discountValue: {
    //     type: Number,
    //     required: true
    // },
    // minOrderValue: {
    //     type: Number,
    //     required: true
    // },
    // maxDiscount: {
    //     type: Number, // Optional for percentage-based coupons
    //     default: null
    // },
    // startDate: {
    //     type: Date,
    //     required: true
    // },
    // expiryDate: {
    //     type: Date,
    //     required: true
    // },
    // usageLimit: {
    //     type: Number,
    //     default: null // Optional for unlimited usage
    // },
    // timesUsed: {
    //     type: Number,
    //     default: 0
    // },
    status: {
        type: String,
        enum: ['active', 'expired'],
        default: 'active'
    }
});

const Coupon = mongoose.model('Coupon', couponSchema);
module.exports = Coupon;
