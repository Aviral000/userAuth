const { signup, login } = require('../controllers/user.controller')
const { userValidation } = require('../validators/requestValidation')
const Router = require("express").Router();

Router.post("/signup", userValidation, signup);
Router.post("/login", userValidation, login);

module.exports = Router;