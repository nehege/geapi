const request = require('supertest');

const app = require('../src/app');

const posts = require('../src/posts.json');

describe('GET /api/v1', () => {
  it('should respond with a json message', (done) => {
    request(app)
      .get('/api/v1')
      .expect(200, {
        message: '🌎 /api/v1 🌎',
      }, done);
  });
});

describe('GET /api/v1/posts', () => {
  it('should respond with posts', (done) => {
    request(app)
      .get('/api/v1/posts')
      .expect(200, posts, done);
  });
});
