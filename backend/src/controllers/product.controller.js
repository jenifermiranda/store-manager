const { productService } = require('../services');

const findAllController = async (req, res) => {
    const serviceResponse = await productService.findAllService();
  if (serviceResponse.status !== 'SUCCESSFUL') {
    return res.status(400).json(serviceResponse.data);
  }
  return res.status(200).json(serviceResponse.data);
};

const findByIdController = async (req, res) => {
  const { id } = req.params;
  const serviceResponse = await productService.findByIdService(id);
  if (serviceResponse.status !== 'SUCCESSFUL') {
    return res.status(404).json(serviceResponse.data);
  }
    return res.status(200).json(serviceResponse.data);
};

module.exports = {
    findAllController,
    findByIdController,
};