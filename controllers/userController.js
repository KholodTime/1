const User = require('../models/user');
const bcrypt = require('bcrypt');

exports.register = async (req, res) => {
  const { email, password, name, phone, profilePicture } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new User({ email, password: hashedPassword, name, phone, profilePicture });

  try {
    await newUser.save();
    req.session.userId = newUser._id;
    res.redirect('/dashboard');
  } catch (err) {
    res.status(500).send('Error registering new user.');
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).send('Invalid email or password.');
    }
    req.session.userId = user._id;
    res.redirect('/dashboard');
  } catch (err) {
    res.status(500).send('Error logging in.');
  }
};

exports.logout = (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).send('Error logging out.');
    }
    res.redirect('/');
  });
};

exports.isAuthenticated = (req, res, next) => {
  if (req.session.userId) {
    next();
  } else {
    res.redirect('/');
  }
};