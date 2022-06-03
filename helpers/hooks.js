const Helper = require('@codeceptjs/helper');
const { container, ecorder, event, output } = require('codeceptjs');
const execSync = require('child_process').execSync;
const utf8 = { encoding: 'utf-8' };

class hooks extends Helper {

  _init() {
    console.log('User tester: ' + process.env.USERNAME),
      console.log('ENV: ' + process.env.env),
      console.log('Token: ' + process.env.TOKEN)
    // try {
    //   execSync('rm output/* -f', utf8);
    // } catch (e) {
    //   console.log(e)
    // }

  } // before all tests
  _before() {
    console.log('-------------------------------Start---------------------------------')
  } // before a test
  _after() {
    console.log('Request:', container.helpers().JSONResponse.response.config)
    console.log('Response:', container.helpers().JSONResponse.response.data)
    console.log('--------------------------------End----------------------------------')
  } // after a test
  _beforeStep() { } // before each step
  _afterStep() { } // after each step
  _beforeSuite() { } // before each suite
  _afterSuite() { } // after each suite
  _passed() { } // after a test passed
  _failed() { } // after a test failed
  _finishTest() { // after all tests
    //  execSync('allure serve output', utf8);
  }
}
module.exports = hooks;
