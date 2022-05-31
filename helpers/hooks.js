const Helper = require('@codeceptjs/helper');
const { helper } = require('codeceptjs');
const execSync = require('child_process').execSync;
const utf8 = { encoding: 'utf-8' };

class hooks extends Helper {

  _init() {
    // console.log('User tester: ' + process.env.USERNAME),

    try {
      execSync('rm output/* -f', utf8);
    } catch (e) {
      console.log(e)
    }

  } // before all tests
  _before() { } // before a test
  _after() { } // after a test
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
