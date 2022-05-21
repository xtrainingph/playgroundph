const { withModuleFederation } = require('@nrwl/angular/module-federation');
const config = require('./module-federation.config');
module.exports = withModuleFederation({
  ...config,
  /*
   * Remote overrides for production.
   * Each entry is a pair of an unique name and the URL where it is deployed.
   *
   * e.g.
   * remotes: [
   *   ['app1', 'https://app1.example.com'],
   *   ['app2', 'https://app2.example.com'],
   * ]
   */
  remotes: [
    ['shell', 'https://master--jade-pithivier-cfa39a.netlify.app'],
    ['login', 'https://magenta-biscochitos-0848df.netlify.app'],
  ]
});
