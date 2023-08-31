const superhumanRouter = require('express').Router();
const SuperhumanController = require('../controllers/superhumans.controller');
const superpowerRouter = require('./superpowerRouter');
const SuperhumanMW = require('../middlewares/superhuman.mv')

superhumanRouter.post('/', SuperhumanController.createSuperhuman);
superhumanRouter.get('/', SuperhumanController.getSuperhumans);
superhumanRouter.get('/:superhumanId', SuperhumanController.getSuperhuman);
superhumanRouter.delete('/:superhumanId', SuperhumanMW.findSuperhuman, SuperhumanController.deleteSuperhuman);
superhumanRouter.put('/:superhumanId', SuperhumanMW.findSuperhuman, SuperhumanController.updateSuperhuman);

superhumanRouter.use('/:superhumanId/superpowers', superpowerRouter);

module.exports = superhumanRouter;