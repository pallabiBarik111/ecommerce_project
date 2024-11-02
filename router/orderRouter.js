
const express = require('express');

const router = express.Router();

const { createOrder, getOrder, getupdateOrder, getDeleteOrder } = require('../controller/orderController')


router.post('/', createOrder);

router.get('/', getOrder);

router.put('/:id', getupdateOrder);

router.delete('/:id', getDeleteOrder);

module.exports = router;