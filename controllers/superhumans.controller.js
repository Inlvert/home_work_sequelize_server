const { Superhuman } = require ('../models');

module.exports.createSuperhuman = async (req, res, next) => {
    try {
        const { body } = req;

        const superhuman = await Superhuman.create(body);

        res.status(201).send(superhuman);

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
        res.send(superhuman);

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
        res.send(superhumanId);
    } catch (error) {
        next(error);
    }
}