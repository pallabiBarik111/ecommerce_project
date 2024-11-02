const express = require('express');

const router = express.Router();

const {createProduct,getProduct,getProductBycategory,getupdateProduct,getDeleteProduct}=require('../controller/productController')


router.post('/',createProduct);

router.get('/',getProduct);


router.get('/:categoryType',getProductBycategory);

router.put('/:id',getupdateProduct);

router.delete('/:id',getDeleteProduct);





















module.exports = router;