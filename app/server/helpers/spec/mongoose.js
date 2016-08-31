const cwd = process.cwd();

module.exports = () => {
  const config = require(`${cwd}/app/server/config`);
  const mongoose = require('mongoose');
  const environment = 'test';

  mongoose.connect(`${config.mongo.env[environment].uri}`, {
    config: config.mongo.env[environment].config,
    user: config.mongo.env[environment].authentication.user,
    pass: config.mongo.env[environment].authentication.password
  }, () => {
    mongoose.connection.db.dropDatabase();
  });

  return mongoose;
}
