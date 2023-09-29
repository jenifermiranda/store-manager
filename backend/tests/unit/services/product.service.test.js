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
    it('Testando a função findAllProductService', async function () {
        sinon.stub(productModel, 'findAllProductsModel').resolves(productMock.productsDB);

        const products = await productService.findAllProductService();

        expect(products.data).to.be.deep.equal(productMock.productsDB);
        expect(products.status).to.be.equal('SUCCESSFUL');
    });

    it('Testando a função findByIdProductService', async function () {
        sinon.stub(productModel, 'findByIdProductModel').resolves(productMock.productById);

        const products = await productService.findByIdProductService(1);
        
        expect(products.data).to.be.deep.equal(productMock.productById);
        expect(products.status).to.be.equal('SUCCESSFUL');
    });
});