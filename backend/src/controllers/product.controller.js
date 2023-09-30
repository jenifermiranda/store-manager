const { productService } = require('../services');

const findAllProductController = async (req, res) => {
    const serviceResponse = await productService.findAllProductService();
  if (serviceResponse.status !== 'SUCCESSFUL') {
    return res.status(400).json(serviceResponse.data);
  }
  return res.status(200).json(serviceResponse.data);
};

const findByIdProductController = async (req, res) => {
  const { id } = req.params;
  const serviceResponse = await productService.findByIdProductService(id);
  if (serviceResponse.status !== 'SUCCESSFUL') {
    return res.status(404).json(serviceResponse.data);
  }
    return res.status(200).json(serviceResponse.data);
};

const addProductController = async (req, res) => {
  const { name } = req.body;
  const serviceResponse = await productService.addProductService(name);
  if (serviceResponse.status !== 'SUCCESSFUL') {
    return res.status(404).json(serviceResponse.data);
  }
    return res.status(201).json(serviceResponse.data);
};

const updateProductController = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  const serviceResponse = await productService.updateProductService(name, id);
  if (serviceResponse.status !== 'SUCCESSFUL') {
    return res.status(404).json(serviceResponse.data);
  }
  return res.status(200).json(serviceResponse.data);
};

module.exports = {
    findAllProductController,
    findByIdProductController,
    addProductController,
    updateProductController,
};