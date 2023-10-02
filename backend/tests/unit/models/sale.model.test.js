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
    it('Testando caso de falha na função findAllSalesModel', async function () {
        sinon.stub(connection, 'execute').resolves([null]);

        const sales = await saleModel.findAllSalesModel();

        expect(sales).to.be.equal(null);
    });
    it('recuperando uma venda a partir do id', async function () {
        sinon.stub(connection, 'execute').resolves([saleMock.saleById]);

        const saleId = 2;
        const sale = await saleModel.findByIdSaleModel(saleId);

        expect(sale).to.be.deep.equal(saleMock.saleById);
        expect(sale).to.be.an('object');
    });
    it('Testando caso de falha na função findByIdSaleModel', async function () {
        sinon.stub(connection, 'execute').resolves([null]);

        const saleId = 2;
        const sale = await saleModel.findByIdSaleModel(saleId);

        expect(sale).to.be.deep.equal(null);
    });
    it('cadastrando uma venda nas tabelas', async function () {
        sinon.stub(connection, 'execute').resolves([saleMock.ResultSetHeaderSale]);

        const array = [
            {
                productId: 1,
                quantity: 1,
              },
              {
                productId: 2,
                quantity: 5,
              },
        ];
        const sale = await saleModel.addSaleModel(array);

        expect(sale).to.be.a('object');
        expect(sale).to.be.deep.equal(saleMock.addSaleRetorno);
    });
    // it('Testando caso de erro da função deleteSaleModel', async function () {
    //     const id = 11;
    //     sinon.stub(connection, 'execute').resolves([null]);

    //     const saleId = 2;
    //     const sale = await saleModel.deleteSaleModel(saleId);

    //     expect(sale).to.be.deep.equal(undefined);
    // });
});
