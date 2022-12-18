// @ts-check
const { devices } = require('@playwright/test');
//create a config object
const config = {
  testDir: './tests',
  /* Maximum time one test can run for. */
  timeout: 30 * 1000,
  expect: {
    timeout: 5000
  },
  
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {

    browserName: 'chromium',
    headless: false
    //browserName: 'firefox'
    //browserName: 'webkit' //safari
 },

};
module.exports = config;