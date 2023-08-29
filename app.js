const express = require('express');
const router = require('./routers');
const basic = require('./middlewares/errors/basic');
const basicErrorHandler = require('./middlewares/errors/basic');

const app = express();

app.use(express.json());
app.use(router);
app.use(basicErrorHandler);

module.exports = app;