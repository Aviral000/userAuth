const passport = require('passport');
const { findUserByUsername } = require('../services/user.service');

const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.ACCESS_KEY
}

const strategy = new JwtStrategy(options, async(payload, done) => {
    try {
        const user = await findUserByUsername(payload.username);
        return done(null, user);
    } catch (error) {
        return done(error, false);
    }
})

module.exports = (passport) => {
    passport.use(strategy);
}