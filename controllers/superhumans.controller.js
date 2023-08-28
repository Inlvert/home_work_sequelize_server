const { Superhuman } = require ('../models');

module.exports.createSuperhuman = async (req, res, next) => {
    try {
        const { body } = req;

        const superhuman = await Superhuman.create(body);

        console.log(superhuman);

        res.status(201).send(superhuman);

    } catch (error) {
        next(error);
    }
}

module.exports.getSuperhuman = async (req, res , next) => {
    try {
        const superhuman = await Superhuman.findAll();

        res.send(superhuman);
    } catch (error) {
        next(error);
    }
}