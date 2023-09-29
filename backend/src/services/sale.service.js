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

const addSaleService = async (array) => {
    const addSale = await saleModel.addSaleModel(array);
    if (!addSale) {
        return { status: 'FAILURE', data: { message: 'Sale not registered' } };
    }
    return { status: 'SUCCESSFUL', data: addSale };
};

module.exports = {
    findAllSalesService,
    findByIdSaleService,
    addSaleService,
};