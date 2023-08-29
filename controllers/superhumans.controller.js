const createHttpError = require('http-errors');
const { Superhuman } = require ('../models');

module.exports.createSuperhuman = async (req, res, next) => {
    try {
        const { body } = req;

        const superhuman = await Superhuman.create(body);

        res.status(201).send({ data: superhuman });

    } catch (error) {
        next(error);
    }
}

module.exports.getSuperhumans = async (req, res , next) => {
    try {
        const superhumans = await Superhuman.findAll();
        res.send(superhumans);

    } catch (error) {
        next(error);
    }
}

module.exports.getSuperhuman = async (req, res, next) => {
    try {
        const { params: { superhumanId } } = req;
        const superhuman = await Superhuman.findByPk(superhumanId);
        if(!superhuman) {
            return next(createHttpError(404, 'not found'));
        }
        res.send({ data: superhuman });

    } catch (error) {
        next(error);
    }
}

module.exports.deleteSuperhuman = async (req, res, next) => {
    try {
        const { params: { superhumanId } } = req;
        await Superhuman.destroy ({
            where: {
                id: superhumanId
            }
        });
        res.send({ data: superhumanId });
    } catch (error) {
        next(error);
    }
}

module.exports.updateSuperhuman = async (req, res, next) => {
    try {
        const {
            body,
            params: { superhumanId }
        } = req;

        const [updatedRows, [superhuman]] = await Superhuman.update(body, {
            where: {
                id: superhumanId
            },
            returning: true
        });

        res.send({ data: superhuman });
    } catch (error) {
        next(error);
    }
}