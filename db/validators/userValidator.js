const Joi = require('joi');

const userBody = Joi.object({
    username: Joi.string().min(3).max(20).required(),
    password: Joi.string().min(6).max(20).required()
})

module.exports = { userBody };