const { signed, loginUser } = require('../services/user.service');

const signup = async (req, res) => {
    try {
        const result = await signed(req.body);
        res.status(201).send({ message: "Success" });
        console.log(signup);
    } catch (error) {
        res.status(500).send({ message: "Error in Controller side", error: error })
    }
}

const login = async (req, res) => {
    try {
        const result = await loginUser(req.body);
        res.status(200).send({ message: "success", report: result });
    } catch (error) {
        res.status(500).send({ message: "Error in Controller side", error: error })
    }
}

module.exports = { signup, login };