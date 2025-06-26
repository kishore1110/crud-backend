const express = require('express');
const route = express.Router();

const { getProducts, getProduct, postProduct, updateProduct, deleteProduct } = require('../controller/product.controller.js');

route.get('/', getProducts);

route.get('/:id',getProduct);

route.post('/', postProduct);

route.put('/:id', updateProduct);

route.delete('/:id', deleteProduct);

module.exports = route;
