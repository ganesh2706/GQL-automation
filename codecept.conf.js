exports.config = {
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'http://localhost:5000',
      show: true
    },
    GraphQL: {
      endpoint: 'http://localhost:5000/graphql/',
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
    features: './features/basic.feature',
    steps: ['./step_definitions/steps.js']
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    retryFailedStep: {
      enabled: true
    }
  },
  tests: './*_test.js',
  name: 'Codecept-Sample'
}