import supertest from 'supertest';
import server from '../../../src/server';

const request = supertest(server);

describe('GET /', () => {
  it('responds with "Hello World!"', async () => {
    const response = await request.get('/');

    expect(response.status).toBe(200);
    expect(response.body).toBe('Hello World!');
  });
});
