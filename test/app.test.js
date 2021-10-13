const request = require('supertest');

const app = require('../src/app');

describe('GET /', () => {
  it('should respond with a json message', (done) => {
    request(app)
      .get('/')
      .expect(200, {
        message: '🌎 Hello Express 🌎',
      }, done);
  });
});

describe('GET /not-exist-route', () => {
  it('should respond with a json message', (done) => {
    request(app)
      .get('/not-found')
      .expect(404, done);
  });
});
