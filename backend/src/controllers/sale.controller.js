const { saleService } = require('../services');

const findAllSalesController = async (req, res) => {
    const serviceResponce = await saleService.findAllSalesService();

    if (serviceResponce.status !== 'SUCCESSFUL') {
        return res.status(400).json(serviceResponce.data);
    }
    return res.status(200).json(serviceResponce.data);
};

const findByIdSaleController = async (req, res) => {
    const { id } = req.params;
    const serviceResponce = await saleService.findByIdSaleService(id);

    if (serviceResponce.status !== 'SUCCESSFUL') {
        return res.status(404).json(serviceResponce.data);
    }
    return res.status(200).json(serviceResponce.data);
};

const addSaleController = async (req, res) => {
    const array = req.body;
    const serviceResponce = await saleService.addSaleService(array);
    if (serviceResponce.status !== 'SUCCESSFUL') {
        return res.status(404).json(serviceResponce.data);
    }
    return res.status(201).json(serviceResponce.data);
};

const deleteSaleController = async (req, res) => {
    const { id } = req.params;

    const serviceResponce = await saleService.deleteSaleService(id);
    
    if (serviceResponce.status !== 'SUCCESSFUL') {
        return res.status(404).json(serviceResponce.data);
    }
    return res.status(204).end();
};

const updateProductQuantityController = async (req, res) => {
    const { saleId, productId } = req.params;
    const { quantity } = req.body;

    const serviceResponce = await saleService
        .updateProductQuantityService(Number(saleId), Number(productId), quantity);
    if (serviceResponce.status !== 'SUCCESSFUL') {
        return res.status(404).json(serviceResponce.data);
    }
    return res.status(200).json(serviceResponce.data);
};

module.exports = {
    findAllSalesController,
    findByIdSaleController,
    addSaleController,
    deleteSaleController,
    updateProductQuantityController,
};