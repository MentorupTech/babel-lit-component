import { html, fixture } from '@open-wc/testing';

import '../src/duplex-header-menu';

describe('ComponentExample', () => {
  it('has a default title', async () => {
    const el = await fixture(html`
      <duplex-header-menu></duplex-header-menu>
    `);
  });
});
