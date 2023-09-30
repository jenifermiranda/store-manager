const chai = require('chai');
const sinonChai = require('sinon-chai');
const sinon = require('sinon');
const validateName = require('../../../src/middlewares/validateName');
const validateProductId = require('../../../src/middlewares/validateProductId');

chai.use(sinonChai);
const { expect } = chai;

describe('realizando testes - MIDDLEWARES', function () {
    it('Testa a validação validateName sem passar um nome', async function () {
        const req = { body: { name: '' } };
        const res = {
            status: sinon.stub().returnsThis(),
            json: sinon.stub(),
        };

        await validateName(req, res, sinon.stub());

        expect(res.status).to.be.calledWith(400);
        expect(res.json).to.be.calledWith({ message: '"name" is required' });
    });
    it('Testa a validação validateName passando um nome com menos de 5 caracteres', async function () {
        const req = { body: { name: 'Bat' } };
        const res = {
            status: sinon.stub().returnsThis(),
            json: sinon.stub(),
        };

        await validateName(req, res, sinon.stub());

        expect(res.status).to.be.calledWith(422);
        expect(res.json).to.be.calledWith({ message: '"name" length must be at least 5 characters long' });
    });
    it('Testa a validação validadeProductId sem passar um id', async function () {
        const req = { body: [{ productId: '' }] };
        const res = {
            status: sinon.stub().returnsThis(),
            json: sinon.stub(),
        };

        await validateProductId(req, res, sinon.stub());

        expect(res.status).to.be.calledWith(400);
        expect(res.json).to.be.calledWith({ message: '"productId" is required' });
    });
    // it('Testa a validação validadeQuantity sem passar uma quantidade', async function () {
    //     const req = { body: [{ productId: '1' }] };
    //     const res = {
    //         status: sinon.stub().returnsThis(),
    //         json: sinon.stub(),
    //     };

    //     await validateProductId(req, res, sinon.stub());

    //     expect(res.status).to.be.calledWith(400);
    //     expect(res.json).to.be.calledWith({ message: '"quantity" is required' });
    // });
});
