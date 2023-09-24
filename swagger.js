// swagger.js

const swaggerAutogen = require('swagger-autogen')();
const outputFile = './swagger_output.json';

const doc = require('./swagger-config'); // Import the Swagger config from swagger-config.js

swaggerAutogen(outputFile, ['app.js'], doc).then(() => {
    require('./app.js'); // Start your Express app
});
