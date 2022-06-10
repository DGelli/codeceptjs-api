const Helper = require('@codeceptjs/helper');
const { container, ecorder, event, output } = require('codeceptjs');
const execSync = require('child_process').execSync;
const utf8 = { encoding: 'utf-8' };

class hooks extends Helper {

  _init() {
    // console.log(container.support())
    try {
      execSync('rm output/* -f', utf8);
    } catch (e) { }

    var fs = require('fs');
    var util = require('util');
    var log_file = fs.createWriteStream('output/console.log', { flags: 'w' });
    var log_stdout = process.stdout;
    console.log = function (d) { //
      log_file.write(util.format(d) + '\n');
      log_stdout.write(util.format(d) + '\n');
    };
  } // before all tests

  _before() {
    console.log('-------------------------------Start---------------------------------')
  } // before a test
  _after() {
    var request = container.helpers().JSONResponse.response.config;
    var response = container.helpers().JSONResponse.response.data;
    var allure = codeceptjs.container.plugins('allure');
    allure.createStep('Evidencia do Request', () => {
      allure.addAttachment(
        'Request params',
        JSON.stringify(request, null, 2),
        'application/json'
      );
    });
    allure.createStep('Evidencia do Response', () => {
      allure.addAttachment(
        'Response body',
        JSON.stringify(response, null, 2),
        'application/json'
      );
    });
    console.log('***Request***')
    console.log(request)
    console.log('***Response***')
    console.log(response)
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
