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

const addProductService = async (productData) => {
    const addProduct = await productModel.addProductModel(productData);
    if (!addProduct) {
        return { status: 'FAILURE', data: { message: 'Product not registered' } };
    } 
    return { status: 'SUCCESSFUL', data: addProduct };
};

const updateProductService = async (name, productId) => {
    const products = await productModel.findAllProductsModel();
    const productsId = products.map(({ id }) => id);

    const productNotFound = productsId.includes(Number(productId));

    if (!productNotFound) {
        return { status: 404, data: { message: 'Product not found' } };
    }

    const updateProduct = await productModel.updateProductModel(name, productId);
    if (!updateProduct) {
        return { status: 'FAILURE', data: { message: 'Updated failure' } };
    }
    return { status: 'SUCCESSFUL', data: updateProduct };
};

module.exports = {
    findAllProductService,
    findByIdProductService,
    addProductService,
    updateProductService,
};