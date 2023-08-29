const superpowerRouter = require('express').Router();
const SuperpowerController = require('../controllers/superpowers.controller');

superpowerRouter.post('/', SuperpowerController.createSuperpower);
// superpowerRouter.get('/', SuperpowerController.getAllSuperhumanSuperpowers);

module.exports = superpowerRouter;