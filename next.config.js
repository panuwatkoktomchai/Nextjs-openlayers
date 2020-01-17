const dotenv = require('dotenv');
const withSass = require('@zeit/next-sass')
const withCSS = require('@zeit/next-css')
const path = require('path')
dotenv.config();
module.exports = withSass(withCSS({
    webpack(config, options) {
        config.resolve.alias['~'] = path.resolve(__dirname);
        return config    
    },
    env: {
        APP_NAME: process.env.APP_NAME
    }
}))