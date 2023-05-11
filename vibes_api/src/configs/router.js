const express = require('express');
const route = express.Router();
const homePage = require('./controllers/homeController');
const healthChecker = require('./controllers/healthCheckerController');
const apiRoute = require('./controllers/apiController');
const v1Route = require('./controllers/v1Controller');


// home page route
route.get('/', homePage.home);

// /api route
route.get('/api', apiRoute.api);

// /v1 route
route.get('/api/v1', v1Route.v1);

// health checker route
route.get('/healthChecker', healthChecker.homePage);




module.exports = route;