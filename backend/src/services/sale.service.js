const { saleModel, productModel } = require('../models');
const { deleteSaleModel } = require('../models/sale.model');

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
    const products = await productModel.findAllProductsModel();
    const productsId = products.map(({ id }) => id);

    const productNotFound = array.some(({ productId }) => !productsId.includes(productId));

    if (productNotFound) {
        return { status: 404, data: { message: 'Product not found' } };
    }

    const addSale = await saleModel.addSaleModel(array);
    if (!addSale) {
        return { status: 'FAILURE', data: { message: 'Sale not registered' } };
    }
    return { status: 'SUCCESSFUL', data: addSale };
};

const deleteSaleService = async (saleId) => {
    const saleById = await saleModel.findByIdSaleModel(saleId);
    if (saleById.length === 0) {
        return { status: 'FAILURE', data: { message: 'Sale not found' } };
    }

    await deleteSaleModel(saleId);
    return { status: 'SUCCESSFUL' };
};

module.exports = {
    findAllSalesService,
    findByIdSaleService,
    addSaleService,
    deleteSaleService,
};