// app.js

const express = require('express');
const app = express();
const port = 3000;


app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    next();
})

// Define your API routes
app.get('/', (req, res) => {
    res.send('Hello, World!');
});
const testRoutes = require('./routers/testRouters');

app.use('/test', testRoutes);
// Serve Swagger UI
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger_output.json'); // Path to your generated Swagger file

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Start your Express server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
