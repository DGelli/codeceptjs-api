const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');
require('dotenv').config({ path: '.env' })

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

exports.config = {
  name: 'codeceptjs-api',
  translation: 'pt-BR',
  output: './output',
  helpers: {
    REST: {
      endpoint: require('./resources/conf/' + process.env.env + '.json').urlBase
    },
    JSONResponse: {},
    Hooks: {
      require: './helpers/Hooks.js'
    },
    ChaiWrapper: {
      require: "codeceptjs-chai"
    }
  },
  include: {
    I: './steps_file.js',
    conf: './resources/conf/' + process.env.env + '.json', // Para usar os dados do arquivo de configuracao
    data: './resources/data/' + process.env.env + '/massa.json', // Para usar massa de dados de testes
    utils: './helpers/Utils.js', // Para usar funcionalidades dentro de utils
    faker: '@faker-js/faker/locale/pt_BR', // Para gerar massa fake
  },

  gherkin: {
    features: './tests/**/*.feature',
    steps: './tests/**/*Steps.js'
  },

  bootstrap: null,

  mocha: {
    reporterOptions: {
      mochaFile: './output/xml/result.xml',
    }
  },

  plugins: {
    allure: {
      enabled: true,
      outputDir: "./output"
    },
    stepByStepReport: {
      enabled: false,
      output: "./output",
      deleteSuccessful: false
    }

  }
}