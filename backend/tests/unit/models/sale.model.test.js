const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../src/models/connection');
const saleMock = require('../mocks/sale.mock');
const { saleModel } = require('../../../src/models');

describe('realizando testes - SALE MODEL', function () {
    afterEach(sinon.restore);

    it('recuperando todos os dados das tabelas', async function () {
        sinon.stub(connection, 'execute').resolves([saleMock.salesDB]);

        const sales = await saleModel.findAllSalesModel();

        expect(sales).to.be.equal(saleMock.salesDB);
        expect(sales).to.be.deep.equal(saleMock.salesDB);
        expect(sales.length).to.be.equal(saleMock.salesDB.length);
    });
    it('recuperando uma venda a partir do id', async function () {
        sinon.stub(connection, 'execute').resolves([saleMock.saleById]);

        const saleId = 2;
        const sale = await saleModel.findByIdSaleModel(saleId);

        expect(sale).to.be.deep.equal(saleMock.saleById);
        expect(sale).to.be.an('object');
    });
});