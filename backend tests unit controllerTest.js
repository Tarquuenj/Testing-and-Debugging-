const { expect } = require('chai');
const sinon = require('sinon');
const { getExpenses } = require('../../controllers/expenseController');

describe('Expense Controller - getExpenses', function () {
    it('should return an array of expenses', async function () {
        const req = {};
        const res = {
            status: sinon.stub().returnsThis(),
            json: sinon.spy()
        };

        await getExpenses(req, res);
        expect(res.status.calledWith(200)).to.be.true;
        expect(res.json.args[0][0]).to.be.an('array');
    });
});
