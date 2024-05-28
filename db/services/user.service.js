const { date } = require('joi');
const { User } = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const signed = async (data) => {
  const { username, password } = data;

  if (!username || !password) {
    throw new Error('Username and password are required');
  }

  try {
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(password, salt);
    const data = new User({ username: username, password: hashedPassword });
    const result = await data.save();
    return result;
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
};

const generateToken = (username) => {
  try {
    const payload = { username: username };
    const options = { expiresIn: "1h" };
    const token = jwt.sign( payload, process.env.ACCESS_KEY, options );
    return token
  } catch (error) {
    throw error;
  }
}

const loginUser = async (data) => {
  const { username, password } = data;

  if (!username || !password) {
    throw new Error('Username and password are required');
  }

  try {
    const user = await User.findOne({ username });
    if (!user) {
      throw new Error('Invalid username or password');
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      throw new Error('Invalid username or password');
    }
    const jwtToken = generateToken(username);
    console.log(jwtToken);
    return { data: user, token: jwtToken };
  } catch (error) {
    console.error('Error logging in:', error);
    throw error;
  }
};

const findUserByUsername = async (username) => {
  try {
    const user = await User.findOne({ username: username });
    return user;
  } catch (error) {
    throw new error;
  }
}

module.exports = { signed, loginUser, findUserByUsername };
