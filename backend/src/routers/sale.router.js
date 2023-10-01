const router = require('express').Router();

const { saleController } = require('../controllers');
const validateProductId = require('../middlewares/validateProductId');
const validateQuantity = require('../middlewares/validateQuantity');

router.get('/sales', saleController.findAllSalesController);

router.get('/sales/:id', saleController.findByIdSaleController);

router.post(
    '/sales',
    validateProductId,
    validateQuantity,
    saleController.addSaleController,
    );

router.delete('/sales/:id', saleController.deleteSaleController);

module.exports = router;