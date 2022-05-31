const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');
require('dotenv').config({ path: '.env' })

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

exports.config = {
  tests: './test/*.js',
  output: './output',
  helpers: {
    REST: {
      endpoint: require('./resources/conf/' + process.env.env + '.json').urlBase
    },
    JSONResponse: {},
    Hooks: {
      require: './helpers/hooks.js'
    },
    ChaiWrapper : {
      require: "codeceptjs-chai"
    }
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  name: 'codeceptjs-api',
  translation: 'pt-BR',

  mocha: {
    mochawesome: {
      stdout: './output/console.log',
      options: {
        reportDir: './output',
        reportFilename: 'report'
      }
    },
    reporterOptions: {
      'codeceptjs-cli-reporter': {
        stdout: '-',
        options: {
          verbose: true,
          steps: true,
        }
      },
      'mocha-junit-reporter': {
        stdout: './output/console.log',
        options: {
          mochaFile: './output/result.xml',
          attachments: true //add screenshot for a failed test
        }
      }
    }
  },

  plugins: {
    allure: {
      enabled: true,
      outputDir: "./output"
    },
    screenshotOnFail: {
      enabled: true
    },
    pauseOnFail: {
      enabled: false
    },
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    stepByStepReport: {
      enabled: true,
      screenshotsForAllureReport: true,
      output: "./output",
      deleteSuccessful: true
    }
   
  }
}