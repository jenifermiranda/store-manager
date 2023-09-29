const { productModel } = require('../models');

const findAllProductService = async () => {
    const products = await productModel.findAllProductsModel();
    if (products) {
        return { status: 'SUCCESSFUL', data: products };
    }
        return { status: 'FAILURE', data: { message: 'error' } };
};

const findByIdProductService = async (productId) => {
    const product = await productModel.findByIdProductModel(productId);
    if (product) {
        return { status: 'SUCCESSFUL', data: product };
    }
    return { status: 'FAILURE', data: { message: 'Product not found' } };
};

module.exports = {
    findAllProductService,
    findByIdProductService,
};