import assert from 'assert';
import request from 'supertest';
import cheerio from 'cheerio';
import nock from 'nock';

import server from '../../src/server';

nock.disableNetConnect();
nock.enableNetConnect('127.0.0.1');

describe('Server', () => {

  it('returns a 200', async () => {
    await request(server).get('/')
      .expect(200);
  });

  it('has the correct page title', async () => {
    const res = await request(server).get('/');
    const $ = cheerio.load(res.text);
    const title = $('title').text();
    
    assert.strictEqual(title, 'React Boilerplate');
  });
  
});
