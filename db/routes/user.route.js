const { signup, login } = require('../controllers/user.controller')
const { validUser } = require('../validators/requestValidation')
const Router = require("express").Router();

Router.post("/signup", validUser, signup);
Router.post("/login", validUser, login);

module.exports = Router;