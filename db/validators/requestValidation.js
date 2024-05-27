const { userBody } = require('./userValidator');

const userValidation = (req, res, next) => {
    const userBodyValid = userBody.validate(req.body);

    if(userBodyValid.error) {
        res.status(500).send({ error: userBodyValid.error.details[0].message })
    }

    next();
}

module.exports = { userValidation };