/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig

const path = require('path');

module.exports = {
    // Define custom directory aliases
    webpack(config) {
      config.resolve.alias['@redux'] = path.join(__dirname, 'app', 'redux');
      return config;
    },
  };