const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../src/models/connection');
const { productModel } = require('../../../src/models');
const productMock = require('../mocks/product.mock');

describe('realizando testes - PRODUCT MODEL', function () {
    afterEach(sinon.restore);
    it('recuperando todos os produtos da tabela', async function () {
        sinon.stub(connection, 'execute').resolves([productMock.productsDB]);

        const products = await productModel.findAllProductsModel();

        expect(products).to.be.equal(productMock.productsDB);
        expect(products).to.be.deep.equal(productMock.productsDB);
        expect(products.length).to.be.equal(productMock.productsDB.length);
    });
    it('recuperando um produto a partir do id', async function () {
        sinon.stub(connection, 'execute').resolves([[productMock.productById]]);

        const productId = 1;
        const product = await productModel.findByIdProductModel(productId);

        expect(product).to.be.deep.equal(productMock.productById);
        expect(product).to.be.an('object');
    });
    it('cadastrando um produto na tabela', async function () {
        sinon.stub(connection, 'execute').resolves([productMock.ResultSetHeader]);

        const newProduct = 'Laço da Verdade';
        const product = await productModel.addProductModel(newProduct);

        expect(product).to.be.a('object');
        expect(product).to.be.deep.equal(productMock.addProduct);
    });
});
