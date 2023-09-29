const { saleModel } = require('../models');

const findAllSalesService = async () => {
    const sales = await saleModel.findAllSalesModel();
    if (sales) {
        return { status: 'SUCCESSFUL', data: sales };
    }
        return { status: 'FAILURE', data: { message: 'error' } };
};

const findByIdSaleService = async (saleId) => {
    const sale = await saleModel.findByIdSaleModel(saleId);
    if (!sale || sale.length === 0) {
        return { status: 'FAILURE', data: { message: 'Sale not found' } };
    }
    return { status: 'SUCCESSFUL', data: sale };
};

module.exports = {
    findAllSalesService,
    findByIdSaleService,
};