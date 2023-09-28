// const { productService } = require('../services');

// const { findAllService } = require('../services/product.service');

// const { findAllService } = require('../services/product.service');

// const mapStatusHTTP = require('../utils/mapStatusHTTP');
const { productService } = require('sd-031-b-store-manager/backend/src/services/index.js');
const findAllController = async (req, res) => {
    const serviceResponse = await findAllService();
  if (serviceResponse.status !== 'SUCCESSFUL') {
    return res.status(400).json(serviceResponse.data);
  }
  return res.status(200).json(serviceResponse.data);
};

module.exports = {
    findAllController,
};