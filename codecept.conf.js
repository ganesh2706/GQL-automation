exports.config = {
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'http://localhost:5000',
      show: false
    },
    GraphQL: {
      endpoint: 'http://localhost:5000/',
      timeout: 30000,
    }
  },
  include: {
    I: './steps_file.js'
  },
  mocha: {},
  bootstrap: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: ['./step_definitions/steps.js']
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    retryFailedStep: {
      enabled: true
    },
    allure: {
      enabled: true
    },
    tests: './*_test.js',
    name: 'Codecept-Sample'
  }
}