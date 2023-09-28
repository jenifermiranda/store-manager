const router = require('express').Router();

const { productController } = require('../controllers');

router.get('/products', productController.findAllController);

router.get('/products/:id', productController.findByIdController);

module.exports = router;