const chai = require('chai');
const sinonChai = require('sinon-chai');
const sinon = require('sinon');
const { productService } = require('../../../src/services');
const { productsDB } = require('../mocks/product.mock');
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
});