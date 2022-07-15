const Helper = require('@codeceptjs/helper');
const { container, ecorder, event, output } = require('codeceptjs');
const execSync = require('child_process').execSync;
const utf8 = { encoding: 'utf-8' };
let validacao = '';

class Hooks extends Helper {
  _init() {
    console.log('*************************************')
    console.log('******* Variáveis de Ambiente *******')
    console.log('ENV: ' + process.env.env)
    console.log('RETRY: ' + process.env.retry)
    console.log('*************************************')
    try {
      execSync('rm -rf output/*', utf8);
    } catch (e) { }

    let fs = require('fs');
    let util = require('util');
    let log_file = fs.createWriteStream('output/console.log', { flags: 'w' });
    let log_stdout = process.stdout;
    console.log = function (d) { //
      log_file.write(util.format(d) + '\n');
      log_stdout.write(util.format(d) + '\n');
    };
  } // before all

  _before(test) {
    // console.log(container.support())
    test.retries(process.env.retry)
    console.log('-------------------------------Start---------------------------------')
    console.log(`-------------------- ${test.title} --------------------`)
  } // before a test
  _after() {
    // console.log(container.mocha())
    console.log('--------------------------------End----------------------------------')
  } // after a test
  _beforeStep() { } // before each step
  _afterStep() {
    try {
      let url = container.helpers().JSONResponse.response.config.baseURL
      let method = container.helpers().JSONResponse.response.config.method
      if (validacao != container.helpers().JSONResponse.response) {
        let request = container.helpers().JSONResponse.response.config;
        let response = container.helpers().JSONResponse.response.data;
        console.log(`[${method}] ${url}`)
        console.log('***Request***')
        console.log(request)
        console.log('***Response***')
        console.log(response)

        let allure = codeceptjs.container.plugins('allure');
        allure.addAttachment(
          'Request params',
          JSON.stringify(request, null, 2),
          'application/json'
        );
        allure.addAttachment(
          'Response body',
          JSON.stringify(response, null, 2),
          'application/json'
        );
      }
    } catch (error) { }
    validacao = container.helpers().JSONResponse.response
  } // after each step
  _beforeSuite() { } // before each suite
  _afterSuite() { } // after each suite
  _passed() { } // after a test passed
  _failed() { } // after a test failed
  _finishTest() { // after all tests
    //  execSync('allure serve output', utf8);
  }
}
module.exports = Hooks;
