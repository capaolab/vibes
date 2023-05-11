const express = require('express');
const app = express();
const routes = require('./src/configs/router');
const error = require('./src/configs/error/errorRoute');

app.use(routes);
app.use(error.erro404);

app.listen(3000, () => {
    console.log('API is running.');
    console.log('Access http://localhost:3000');
});