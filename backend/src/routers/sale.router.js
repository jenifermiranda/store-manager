const router = require('express').Router();

const { saleController } = require('../controllers');

router.get('/sales', saleController.findAllSalesController);

router.get('/sales/:id', saleController.findByIdSaleController);

router.post(
    '/sales',
    saleController.addSaleController,
    );

module.exports = router;