const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.json({ "message": 'Hello World!' });
});

app.listen(3000, () => {
    console.log('API is running.');
    console.log('Access http://localhost:3000');
});