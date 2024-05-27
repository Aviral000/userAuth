const { date } = require('joi');
const { User } = require('../models/user.model');
const bcrypt = require('bcrypt');

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

    return user;
  } catch (error) {
    console.error('Error logging in:', error);
    throw error;
  }
};

module.exports = { signed, loginUser };
