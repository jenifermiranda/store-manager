const chai = require('chai');
const sinonChai = require('sinon-chai');
const sinon = require('sinon');
const productMock = require('../mocks/product.mock');
const { productModel } = require('../../../src/models');
const { productService } = require('../../../src/services');

chai.use(sinonChai);
const { expect } = chai;

describe('Realizando testes - PRODUCT SERVICE', function () {
    afterEach(sinon.restore);
    it('Testando a função findAll', async function () {
        sinon.stub(productModel, 'findAll').resolves(productMock.productsDB);

        const products = await productService.findAll();

        expect(products.data).to.be.deep.equal(productMock.productsDB);
        expect(products.status).to.be.equal('SUCCESSFUL');
    });

    it('Testando a função findById', async function () {
        sinon.stub(productModel, 'findById').resolves(productMock.productById);

        const products = await productService.findById(1);
        console.log(products);

        expect(products.data).to.be.deep.equal(productMock.productById);
        expect(products.status).to.be.equal('SUCCESSFUL');
    });
});