module.exports = (wallaby) => {
  return {
    debug: true,
    env: {
      type: 'node'
    },
    files: [{
      pattern: 'app/server/**/!(*-*-spec).js',
      load: false
    }],
    tests: [{
      pattern: 'app/server/i18n/en-US/**/*.json',
      load: true
    },{
      pattern: 'app/server/**/*-integration-spec.js',
      load: true
    },{
      pattern: 'app/server/**/*-unit-spec.js',
      load: true
    }],
    workers: {
      recycle: true
    },
    setup: function() {
      global.expect = require('chai').expect;
    },
    testFramework: 'jasmine'
  }
}
