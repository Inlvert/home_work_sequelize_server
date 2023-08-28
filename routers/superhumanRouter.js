const superhumanRouter = require('express').Router();
const SuperhumanController = require('../controllers/superhumans.controller');

superhumanRouter.post('/', SuperhumanController.createSuperhuman);

module.exports = superhumanRouter;