module.exports = {
  application: {
    contentLanguage: 'en-US',
    contentType: 'application/json',
    name: 'prima-ai-api'
  },
  mongo: {
    database: 'api',
    env: {
      development: {
        uri: 'mongodb://mongo',
        authentication: {
          password: 'password',
          user: 'development'
        },
        config: {
          autoIndex: true,
          db: 'api-development'
        }
      },
      production: {
        config: {
          autoIndex: false,
          db: 'api-production'
        }
      },
      staging: {
        config: {
          autoIndex: false,
          db: 'api-staging'
        }
      },
      test: {
        uri: 'mongodb://localhost:27017',
        authentication: {
          password: 'password',
          user: 'test'
        },
        config: {
          autoIndex: false,
          db: 'api-test'
        }
      }
    },
  }
};
