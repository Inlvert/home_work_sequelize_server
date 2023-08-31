const createHttpError = require('http-errors');
const { Superhuman } = require('../models');

module.exports.findSuperhuman = async (req, res ,next) => {
    try {
        const { params: { superhumanId } } = req;
        const superhuman = await Superhuman.findByPk(superhumanId);
        if(!superhuman) {
            return next(createHttpError(404, 'not found'));
        }

        req.superhuman = superhuman;

        next();

    } catch (error) {
        next(error);
    }
}