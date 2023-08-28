const superhumanRouter = require('express').Router();
const SuperhumanController = require('../controllers/superhumans.controller');

superhumanRouter.post('/', SuperhumanController.createSuperhuman);
superhumanRouter.get('/', SuperhumanController.getSuperhumans);
superhumanRouter.get('/:superhumanId', SuperhumanController.getSuperhuman);
superhumanRouter.delete('/:superhumanId', SuperhumanController.deleteSuperhuman);

module.exports = superhumanRouter;