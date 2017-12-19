const request = require('supertest');
const expect = require('expect');

var app = require('./server').app;

describe('Server', () => {
  describe('#Get /', () => {
    it('should return hello world response', (done) => {
      request(app)
        .get('/')
        .expect(404)
        .expect((res) => {
          expect(res.body).toEqual(expect.objectContaining({
            error: 'Page not found.'
          }))
        })
        .end(done);
    });
  });

  describe('#Get /users', () =>{
    it('should return status 200 and have me as user', (done) => {
      request(app)
      .get('/users')
      .expect(200)
      .expect((res) => {
        expect(res.body).toEqual(expect.arrayContaining([{
            name: 'Tobi',
            age: 31
          }]
        ))
      })
      .end(done);
    });
  });
});
