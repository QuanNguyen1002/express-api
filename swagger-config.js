// swagger-config.js
const dotenv = require("dotenv").config().parsed;
const doc = {
    info: {
        title: 'My Express API',
        description: 'Documentation for my Express API',
    },
    host: dotenv.API_HOST || 'localhost:3000', // Replace with your server's host and port
    basePath: '/',
};

module.exports = doc;
