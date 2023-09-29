const router = require('express').Router();

const { productController } = require('../controllers');
const validateName = require('../middlewares/validateName');

router.get('/products', productController.findAllProductController);

router.get('/products/:id', productController.findByIdProductController);

router.post(
    '/products',
    validateName,
    productController.addProductController,
    );

module.exports = router;