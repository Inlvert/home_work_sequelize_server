const createHttpError = require('http-errors');
const { Superpower } = require ('../models');

module.exports.createSuperpower = async (req, res, next) => {
    try {
        const { superhuman, name } = req;

        const superpower = await superhuman.createSuperpower(name)

        res.status(201).send({ data: superpower });

    } catch (error) {
        next(error);
    }
}
