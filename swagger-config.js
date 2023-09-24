// swagger-config.js

const doc = {
    info: {
        title: 'My Express API',
        description: 'Documentation for my Express API',
    },
    host: process.env.host || 'localhost:3000', // Replace with your server's host and port
    basePath: '/',
};

module.exports = doc;
