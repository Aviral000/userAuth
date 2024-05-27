require('dotenv').config();

const Auth = (req, res, next) => {
    const { authorization } = req.headers;

    if(!authorization || authorization !== process.env.ACCESS_KEY) {
        res.status(500).send({ error: "Authorization failed" })
    }

    next();
}

module.exports = Auth;