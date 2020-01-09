const {Builder, By, Key, until} = require('selenium-webdriver');

module.exports = async () => {
  global.driver = await new Builder().forBrowser(process.env.browser || 'firefox').build();
  global.Builder = Builder;
  global.By = By;
  global.Key = Key;
  global.until = until;
};
