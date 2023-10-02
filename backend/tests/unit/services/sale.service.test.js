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
    it('Testando caso de erro da função findAllSalesService', async function () {
        sinon.stub(saleModel, 'findAllSalesModel').resolves(null);

        const sales = await saleService.findAllSalesService();

        expect(sales.status).to.be.deep.equal('FAILURE');
    });
    it('Testa a função findByIdSaleService', async function () {
        sinon.stub(saleModel, 'findByIdSaleModel').resolves(saleMock.saleById);

        const saleId = 2;
        const sale = await saleService.findByIdSaleService(saleId);

        expect(sale.data).to.be.deep.equal(saleMock.saleById);
        expect(sale.status).to.be.equal('SUCCESSFUL');
    });
    it('Testando caso de erro da função findByIdSaleService', async function () {
        sinon.stub(saleModel, 'findByIdSaleModel').resolves(null);

        const sale = await saleService.findByIdSaleService();

        expect(sale.status).to.be.deep.equal('FAILURE');
    });
    it('Testando a função addSaleService', async function () {
        sinon.stub(saleModel, 'addSaleModel').resolves(saleMock.addSale);

        const newSale = [
            {
                  productId: 1,
                  quantity: 1,
            },
          ];
        
        const sale = await saleService.addSaleService(newSale);

        expect(sale).to.be.a('object');
        expect(sale.data).to.be.deep.equal(saleMock.addSale);
        expect(sale.status).to.be.equal('SUCCESSFUL');
    });
    it('Testando caso de erro da função addSaleService, sem productId', async function () {
        sinon.stub(saleModel, 'addSaleModel').resolves(saleMock.addSale);

        const newSale = [
            {
                  quantity: 1,
            },
          ];

        const sale = await saleService.addSaleService(newSale);

        expect(sale.status).to.be.equal(404);
    });
    it('Testando caso de erro da função addSaleService, em que productId não existe', async function () {
        sinon.stub(saleModel, 'addSaleModel').resolves(saleMock.addSale);

        const newSale = [
            {
                  productId: 10,
                  quantity: 1,
            },
          ];

        const sale = await saleService.addSaleService(newSale);

        expect(sale.status).to.be.equal(404);
    });
    it('Testa a função deleteService', async function () {
        sinon.stub(saleModel, 'deleteSaleModel').resolves({ status: 'SUCCESSFUL' });

        await saleService.deleteSaleService(1);
        const allSales = await saleService.findAllSalesService();

        expect(allSales.status).to.be.equal('SUCCESSFUL');
    });
    it('Testa caso de erro da função deleteService', async function () {
        const id = 10;
        sinon.stub(saleModel, 'deleteSaleModel').resolves({ status: 'FAILURE' });

        await saleService.deleteSaleService(id);
        const allSales = await saleService.findAllSalesService();

        expect(allSales.status).to.be.equal('SUCCESSFUL');
    });
    it('Testando caso de erro da função updateProductQuantity', async function () {
        sinon.stub(saleModel, 'updateProductQuantityModel').resolves({ status: 404 });

        const sale = await saleService.updateProductQuantityService(1, 99, 20);

        expect(sale.status).to.be.equal('FAILURE');
    });
});
