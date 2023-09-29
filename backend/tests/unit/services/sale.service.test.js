const chai = require('chai');
const sinonChai = require('sinon-chai');
const sinon = require('sinon');
const { saleModel } = require('../../../src/models');
const saleMock = require('../mocks/sale.mock');
const { saleService } = require('../../../src/services');

chai.use(sinonChai);
const { expect } = chai;

describe('Realizando testes - SALE SERVICE', function () {
   afterEach(sinon.restore);
    it('Testando a função findAllSalesService', async function () {
        sinon.stub(saleModel, 'findAllSalesModel').resolves(saleMock.salesDB);

        const sales = await saleService.findAllSalesService();

        expect(sales.data).to.be.deep.equal(saleMock.salesDB);
        expect(sales.status).to.be.equal('SUCCESSFUL');
    });
    it('Testa a função findByIdSaleService', async function () {
        sinon.stub(saleModel, 'findByIdSaleModel').resolves(saleMock.saleById);

        const saleId = 2;
        const sale = await saleService.findByIdSaleService(saleId);

        expect(sale.data).to.be.deep.equal(saleMock.saleById);
        expect(sale.status).to.be.equal('SUCCESSFUL');
    });
});