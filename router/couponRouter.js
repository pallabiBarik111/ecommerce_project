const express = require('express');

const router = express.Router();



const { createCoupon,getCoupon, getupdateCoupon, getDeleteCoupon } = require('../controller/couponController')


router.post('/', createCoupon);

router.get('/', getCoupon);

router.put('/:id', getupdateCoupon);

router.delete('/:id', getDeleteCoupon);





module.exports = router;