const superhumanRouter = require('express').Router();
const SuperhumanController = require('../controllers/superhumans.controller');

superhumanRouter.post('/', SuperhumanController.createSuperhuman);
superhumanRouter.get('/', SuperhumanController.getSuperhuman);
superhumanRouter.get('/:superhumanId', SuperhumanController.getSuperhuman);

module.exports = superhumanRouter;