import assert from 'assert';

import buildJSDom from '../setup/jsdom';

describe('Client', () => {

  it('has an h1 after mount', async () => {
    const { dom: { window: { document } } } = await buildJSDom();
    const heading = document.querySelector('#app h1');

    assert.strictEqual(heading.textContent, 'Hello from React Boilerplate');
  });

});