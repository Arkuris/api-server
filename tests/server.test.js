const { app } = require('../src/server.js');
const { sequelize } = require('../src/error-handlers/models');
const supertest = require('supertest');
const request = supertest;


// built in jest function, setup our test suite
beforeAll(async () => {
  await sequelize.sync(); // sets up our tables before tests run
});
afterAll(async () => {
  await sequelize.drop(); // removes the tables we set up for our test environment
});

describe('Food Routes', () => {

  it('should return a 404 on a bad route', async () => {
    const response = await request(app).get('/nonexistentroute');
    expect(response.status).toBe(404);
  });

  it('should return a 404 on a bad method', async () => {
    const response = await request(app).patch('/api/food');
    expect(response.status).toBe(404);
  });

  // it('should create a record using POST', async () => {
  //   const response = await request(app).post('/api/food').send({
  //     name: 'Burger',
  //     type: 'Fast Food'
  //   });
  //   expect(response.status).toBe(200);
  //   expect(response.body.name).toBe('Burger');
  // });

  // it('should read a list of records using GET', async () => {
  //   const response = await request(app).get('/api/food');
  //   expect(response.status).toBe(200);
  //   expect(Array.isArray(response.body)).toBeTruthy();
  // });
});
