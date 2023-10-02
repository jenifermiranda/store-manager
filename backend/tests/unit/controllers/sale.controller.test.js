const chai = require('chai');
const sinonChai = require('sinon-chai');
const sinon = require('sinon');
const { saleService } = require('../../../src/services');
const { saleController } = require('../../../src/controllers');
const { salesDB, saleById, addSale, addSaleRetorno, addSaleError } = require('../mocks/sale.mock');

chai.use(sinonChai);
const { expect } = chai;
const res = {};

describe('Realizando testes - SALE CONTROLLER', function () {
    afterEach(sinon.restore);
    beforeEach(function () {
        res.status = sinon.stub().returnsThis();
        res.json = sinon.stub();
    });
    it('Testando a função findAllSalesController', async function () {
        sinon.stub(saleService, 'findAllSalesService').resolves({ status: 'SUCCESSFUL', data: salesDB });

        await saleController.findAllSalesController({}, res);

        expect(res.status).to.have.been.calledWith(200);
        expect(res.json).to.have.been.calledWithExactly(salesDB);
    });
    it('Testando caso de erro da função findAllSalesController', async function () {
        sinon.stub(saleService, 'findAllSalesService').resolves({ status: 'FAILURE' });

        await saleController.findAllSalesController({}, res);

        expect(res.status).to.have.been.calledWith(400);
    });
    it('Testando a função findByIdSaleController', async function () {
        const req = { params: { id: 2 } };

        sinon.stub(saleService, 'findByIdSaleService').resolves({ status: 'SUCCESSFUL', data: saleById });

        await saleController.findByIdSaleController(req, res);

        expect(res.status).to.have.been.calledWith(200);
        expect(res.json).to.have.been.calledWithExactly(saleById);
    });
    it('Testando caso de erro da função findByIdSaleController', async function () {
        const req = { params: { id: '' } };

        sinon.stub(saleService, 'findByIdSaleService').resolves({ status: 'FAILURE', data: { message: 'Sale not found' } });

        await saleController.findByIdSaleController(req, res);

        expect(res.status).to.have.been.calledWith(404);
        expect(res.json).to.have.been.calledWithExactly({ message: 'Sale not found' });
    });
    it('Testando a função addSaleController', async function () {
        const req = { body: addSale };

        sinon.stub(saleService, 'addSaleService').resolves({ status: 'SUCCESSFUL', data: addSaleRetorno });

        await saleController.addSaleController(req, res);

        expect(res.status).to.have.been.calledWith(201);
        expect(res.json).to.have.been.calledWith(addSaleRetorno);
    });
    it('Testando caso de erro da função addSaleController', async function () {
        const req = { body: addSaleError };

        sinon.stub(saleService, 'addSaleService').resolves({ status: 'FAILURE' });

        await saleController.addSaleController(req, res);

        expect(res.status).to.have.been.calledWith(404);
    });
});