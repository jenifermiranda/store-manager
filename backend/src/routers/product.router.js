const router = require('express').Router();

const { productController } = require('../controllers');

router.get('/products', productController.findAllProductController);

router.get('/products/:id', productController.findByIdProductController);

module.exports = router;