const request = require('supertest');
const app = require('../../server');  // Your Express app

describe('Expense Routes', function () {
    it('GET /api/expenses should return 200', function (done) {
        request(app)
            .get('/api/expenses')
            .expect(200, done);
    });
});
