const dotenv = require('dotenv');
dotenv.config();
module.exports = {
    env: {
        APP_NAME: process.env.APP_NAME
    }
  }