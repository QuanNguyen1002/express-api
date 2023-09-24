// swagger.js

const swaggerAutogen = require('swagger-autogen')();
const outputFile = './swagger_output.json';

// Sử dụng module fs để tìm kiếm và đọc tệp endpoints từ thư mục "routers"
const fs = require('fs');
const path = require('path');
const routersDir = './routers'; // Thư mục chứa tệp endpoints

const endpointsFiles = fs
    .readdirSync(routersDir)
    .filter(file => path.extname(file) === '.js')
    .map(file => path.join(routersDir, file));
console.log(endpointsFiles);
const doc = require('./swagger-config'); // Import the Swagger config from swagger-config.js

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
    require('./app.js'); // Start your Express app
});
