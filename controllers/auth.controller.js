const User = require('../models/user.model');

exports.getUser = async (req, res, next) => {
  try {
    const { loggedIn } = req.body;
    if (!loggedIn && !req.user) {
      return res.json({ message: 'Not logged in!' });
    }
    let user = await User.findOne({ googleId: { $eq: req.user.id } });
    if (user === null) {
      user = new User({
        googleId: req.user.id,
        firstName: req.user.name.givenName,
        lastName: req.user.name.familyName,
        name: `${req.user.name.givenName} ${req.user.name.familyName}`,
        email: req.user.emails[0].value,
      });
      await user.save();
    }
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err });
  }
};
