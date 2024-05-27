const { userBody } = require('./userValidator');

const validUser = (req, res, next) => {
    console.log("Validation Request");
    const userBodyValid = userBody.validate(req.body);

    if(userBodyValid.error) {
        res.status(500).send({ error: userBodyValid.error.details })
    }

    next();
}

module.exports = { validUser };