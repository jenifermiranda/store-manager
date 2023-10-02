const router = require('express').Router();

const { saleController } = require('../controllers');
const validateProductId = require('../middlewares/validateProductId');
const validateProductUpdate = require('../middlewares/validateProductUpdate');
const validateQuantity = require('../middlewares/validateQuantity');
const validateQuantityUpdate = require('../middlewares/validateQuantityUpdate');

router.get('/sales', saleController.findAllSalesController);

router.get('/sales/:id', saleController.findByIdSaleController);

router.post(
    '/sales',
    validateProductId,
    validateQuantity,
    saleController.addSaleController,
    );

router.delete('/sales/:id', saleController.deleteSaleController);

router.put(
    '/sales/:saleId/products/:productId/quantity',
    validateQuantityUpdate,
    validateProductUpdate,
    saleController.updateProductQuantityController,
    );

module.exports = router;