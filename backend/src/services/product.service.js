const { productModel } = require('../models');

const findAllService = async () => {
    const products = await productModel.findAll();
    if (products) {
        return { status: 'SUCCESSFUL', data: products };
    }
        return { status: 'FAILURE', data: { message: 'error' } };
};

const findById = async (productId) => {
    const product = await productModel.findById(productId);
    if (product) {
        return { status: 'SUCCESSFUL', data: product };
    }
    return { status: 'FAILURE', data: { message: 'Product not found' } };
};

module.exports = {
    findAllService,
    findById,
};