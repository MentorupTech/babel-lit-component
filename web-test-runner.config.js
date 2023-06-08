import { playwrightLauncher } from '@web/test-runner-playwright';
import {visualRegressionPlugin } from "@web/test-runner-visual-regression/plugin";

export default {
  files: [
    'test/*.test.js',
    'test/*.visual.js',
  ],
  nodeResolve: true,
  concurrency: 10,
  browsers: [
    playwrightLauncher({ product: 'firefox', concurrency: 1 }),
    playwrightLauncher({ product: 'chromium' }),
    playwrightLauncher({ product: 'webkit' }),
  ],
  coverage: true,
  plugins: [ visualRegressionPlugin({
    update: process.argv.includes('--update-visual-baseline'),
  })],
}
