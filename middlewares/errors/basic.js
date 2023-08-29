module.exports = async (err, req, res, next) => {

    console.log(err);

    const status = err.status || 500;
    res.status(status).send({
        errors: [
        err.message
    ]
    });
}