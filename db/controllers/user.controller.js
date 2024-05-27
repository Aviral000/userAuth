const { signed, loginUser } = require('../services/user.service');

const signup = async (req, res) => {
    try {
        const result = await signed(req.body);
        res.status(201).send(result);
    } catch (error) {
        res.status(500).send({ message: "Error in Controller side", error: error })
    }
}

const login = async (req, res) => {
    try {
        const result = await loginUser(req.body);
        res.cookie("token", result.token, {
            maxAge: 60 * 60 * 1000
        });
        res.status(200).send({ message: "success", report: result });
    } catch (error) {
        res.status(500).send({ message: "Error in Controller side", error: error })
    }
}

module.exports = { signup, login };