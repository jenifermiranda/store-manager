const chai = require('chai');
const sinonChai = require('sinon-chai');
const sinon = require('sinon');
const validateName = require('../../../src/middlewares/validateName');
const validateProductId = require('../../../src/middlewares/validateProductId');
const validateQuantity = require('../../../src/middlewares/validateQuantity');
const validateProductUpdate = require('../../../src/middlewares/validateProductUpdate');

chai.use(sinonChai);
const { expect } = chai;

describe('realizando testes - MIDDLEWARES', function () {
    it('Testa a validação validateName', async function () {
        const req = { body: { name: 'Laço da Verdade' } };
        const res = {
            status: sinon.stub().returnsThis(),
            json: sinon.stub(),
        };

        await validateName(req, res, sinon.stub());

        expect(res.status).to.not.have.been.calledWith(400);
    });
    it('Testa a validação validateName sem passar um nome', async function () {
        const req = { body: { name: '' } };
        const res = {
            status: sinon.stub().returnsThis(),
            json: sinon.stub(),
        };

        await validateName(req, res, sinon.stub());

        expect(res.status).to.have.been.calledWith(400);
        expect(res.json).to.be.calledWith({ message: '"name" is required' });
    });
    it('Testa a validação validateName passando um nome com menos de 5 caracteres', async function () {
        const req = { body: { name: 'Bat' } };
        const res = {
            status: sinon.stub().returnsThis(),
            json: sinon.stub(),
        };

        await validateName(req, res, sinon.stub());

        expect(res.status).to.have.been.calledWith(422);
        expect(res.json).to.be.calledWith({ message: '"name" length must be at least 5 characters long' });
    });
    it('Testa a validação validateProductId', async function () {
        const req = { body: [{
            productId: 1,
            quantity: 1,
          }] };
        const res = {
            status: sinon.stub().returnsThis(),
            json: sinon.stub(),
        };

        await validateProductId(req, res, sinon.stub());

        expect(res.status).to.not.have.been.calledWith(400);
    });
    it('Testa a validação validateProductId sem passar um id', async function () {
        const req = { body: [{ productId: '' }] };
        const res = {
            status: sinon.stub().returnsThis(),
            json: sinon.stub(),
        };

        await validateProductId(req, res, sinon.stub());

        expect(res.status).to.have.been.calledWith(400);
        expect(res.json).to.be.calledWith({ message: '"productId" is required' });
    });
    it('Testa a validação validateQuantity', async function () {
        const req = { body: {
            productId: 1,
            quantity: 1,
          } };
        const res = {
            status: sinon.stub().returnsThis(),
            json: sinon.stub(),
        };

        await validateQuantity(req, res, sinon.stub());

        expect(res.status).to.not.have.been.calledWith(400);
    });
    it('Testa a validação validateQuantity sem passar uma quantidade', async function () {
        const req = { body: {
            productId: 1,
            quantity: '',
          } };
        const res = {
            status: sinon.stub().returnsThis(),
            json: sinon.stub(),
        };

        await validateQuantity(req, res, sinon.stub());

        expect(res.status).to.be.calledWith(400);
        expect(res.json).to.be.calledWith({ message: '"quantity" is required' });
    });
    it('Testa a validação validateQuantity passando uma quantidade inferior a 1', async function () {
        const req = { body: {
            productId: 1,
            quantity: 0,
          } };
        const res = {
            status: sinon.stub().returnsThis(),
            json: sinon.stub(),
        };

        await validateQuantity(req, res, sinon.stub());

        expect(res.status).to.be.calledWith(422);
        expect(res.json).to.be.calledWith({ message: '"quantity" must be greater than or equal to 1' });
    });
    it('Testa a validação validateProductupdate', async function () {
        const req = {
            params: { saleId: '1', productId: '1' },
            body: { quantity: 20 },
        };
        const res = {
            status: sinon.stub().returnsThis(),
            json: sinon.stub(),
        };

        await validateProductUpdate(req, res, sinon.stub());

        expect(res.status).to.not.have.been.calledWith(400);
    });
    it('Testa a validação validateProductupdate sem passar um id de produto', async function () {
        const req = {
            params: { saleId: '1', productId: '' },
            body: { quantity: 20 },
        };
        const res = {
            status: sinon.stub().returnsThis(),
            json: sinon.stub(),
        };

        await validateProductUpdate(req, res, sinon.stub());

        expect(res.status).to.have.been.calledWith(404);
        expect(res.json).to.be.calledWith({ message: 'Product not found in sale' });
    });
});