const NodeEnvironment = require('jest-environment-node');

class SeleniumEnvironment extends NodeEnvironment {
  constructor(config) {
    super(config);
  }

  async setup() {
    await super.setup();
    // connect to puppeteer
    this.global.driver = global.driver;
    this.global.Builder = global.Builder;
    this.global.By = global.By;
    this.global.Key = global.Key;
    this.global.util = global.util;
  }

  async teardown() {
    await super.teardown();
  }

  runScript(script) {
    return super.runScript(script);
  }
}

module.exports = SeleniumEnvironment;
