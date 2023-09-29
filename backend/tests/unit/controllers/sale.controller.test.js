const chai = require('chai');
const sinonChai = require('sinon-chai');
const sinon = require('sinon');
const { saleService } = require('../../../src/services');
const { saleController } = require('../../../src/controllers');
const { salesDB } = require('../mocks/sale.mock');

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
});