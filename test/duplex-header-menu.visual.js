import { visualDiff } from '@web/test-runner-visual-regression';
import {fixture, html} from "@open-wc/testing";
import '../src/duplex-header-menu';
it('can diff an element', async () => {
  const element = await fixture(html`
      <duplex-header-menu></duplex-header-menu>
    `);

  await visualDiff(element, 'duplex-header-menu');
});
