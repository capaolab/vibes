const express = require('express');
const app = express();
const router = require('./src/configs/router');
const { erro404 } = require('./src/configs/apiController');

app.use(router);
app.use(erro404);

app.listen(3000, () => {
    console.log('API is running.');
    console.log('Access http://localhost:3000');
});