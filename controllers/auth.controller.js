const User = require('../models/user.model');

exports.getUser = async (req, res, next) => {
  try {
    const { loggedIn } = req.body;
    if (!loggedIn && !req.user) {
      return res.json({ message: 'Not logged in!' });
    }
    const user = await User.findOne({ googleId: { $eq: req.user.id } });
    if (!user) {
      user = new User({
        googleId: req.user.sub,
        firstName: req.user.given_name,
        firstName: req.user.family_name,
        email: req.user.email,
      });
      await user.save();
    }
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err });
  }
};
