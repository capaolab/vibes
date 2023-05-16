import express from 'express';
import { API_HOST, API_PORT } from './src/configs/senttings.js';
import { router } from './src/configs/router.js';
import { erro404 } from './src/configs/apiController.js';

const app = express();

app.use(router);
app.use(erro404);


app.listen(API_PORT, () => {
    console.log('API is running.');
    console.log(`Access http://${API_HOST}:${API_PORT}/api/v1`);
});