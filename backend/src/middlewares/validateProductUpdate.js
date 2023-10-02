const { productModel } = require('../models');

module.exports = async (req, res, next) => {
    const { productId } = req.params;
    
    const validateProduct = await productModel.findByIdProductModel(productId);
    console.log(validateProduct);
    if (!validateProduct) {
        return res.status(404).json({ message: 'Product not found in sale' });
    }
    next();
};