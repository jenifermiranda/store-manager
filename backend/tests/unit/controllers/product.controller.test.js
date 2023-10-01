const chai = require('chai');
const sinonChai = require('sinon-chai');
const sinon = require('sinon');
const { productService } = require('../../../src/services');
const { productsDB, productById, addProduct, updateProduct } = require('../mocks/product.mock');
const { productController } = require('../../../src/controllers');

chai.use(sinonChai);
const { expect } = chai;
const res = {};

describe('realizando testes - PRODUCT CONTROLLER', function () {
    afterEach(sinon.restore);
    beforeEach(function () {
        res.status = sinon.stub().returnsThis();
        res.json = sinon.stub();
    });
    it('Testando a função findAllProductController', async function () {
        sinon.stub(productService, 'findAllProductService').resolves({ status: 'SUCCESSFUL', data: productsDB });

        await productController.findAllProductController({}, res);

        expect(res.status).to.have.been.calledWith(200);
        expect(res.json).to.have.been.calledWith(productsDB);
    });
    it('Testando caso de erro da função findAllProductController', async function () {
        sinon.stub(productService, 'findAllProductService').resolves({ status: 'FAILURE', data: productsDB });

        await productController.findAllProductController({}, res);

        expect(res.status).to.have.been.calledWith(400);
    });
    it('Testando a função findByIdProductController', async function () {
        const req = { params: { id: 1 } };

        sinon.stub(productService, 'findByIdProductService').resolves({ status: 'SUCCESSFUL', data: productById });

        await productController.findByIdProductController(req, res);

        expect(res.status).to.have.been.calledWith(200);
        expect(res.json).to.have.been.calledWith(productById);
    });
    it('Testando caso de erro da função findByIdProductController', async function () {
        const req = { params: { id: '10' } };

        sinon.stub(productService, 'findByIdProductService').resolves({ status: 'FAILURE' });

        await productController.findByIdProductController(req, res);

        expect(res.status).to.have.been.calledWith(404);
    });
    it('Testando a função addProductController', async function () {
        const req = { body: { name: 'Laço da Verdade' } };

        sinon.stub(productService, 'addProductService').resolves({ status: 'SUCCESSFUL', data: addProduct });

        await productController.addProductController(req, res);

        expect(res.status).to.have.been.calledWith(201);
        expect(res.json).to.have.been.calledWith(addProduct);
    });
    it('Testando caso de erro da função addProductController', async function () {
        const req = { body: { name: '' } };

        sinon.stub(productService, 'addProductService').resolves({ status: 'FAILURE' });

        await productController.addProductController(req, res);
        expect(res.status).to.have.been.calledWith(404);
    });
    it('Testando a função updateProductController', async function () {
        const req = {
            params: { id: '1' },
            body: { name: 'Martelo do Batman' },
        };

        sinon.stub(productService, 'updateProductService').resolves({ status: 'SUCCESSFUL', data: updateProduct });

        await productController.updateProductController(req, res);

        const result = { name: 'Martelo do Batman' };

        expect(res.status).to.have.been.calledWith(200);
        expect(res.json).to.have.been.calledWith(result);
    });
    it('Testando caso de erro da função updateProductController', async function () {
        const req = {
            params: { id: '10' },
            body: { name: 'Martelo do Batman' },
        };

        sinon.stub(productService, 'updateProductService').resolves({ status: 'FAILURE', data: updateProduct });

        await productController.updateProductController(req, res);

        expect(res.status).to.have.been.calledWith(404);
    });
});
