const Product = require('../models/product.model');
const User = require('../models/user.model');
const { validateBody } = require('../validators/validator');

exports.getAll = async (req, res, next) => {
  try {
    console.log('running get');
    const products = await Product.find();
    const user = await User.find();
    console.log(products, user);
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

exports.getOneById = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) res.status(404).json({ message: 'Not found' });
    else res.json({ data: post });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

exports.createOne = async (req, res) => {
  try {
    const bodyIsValid = validateBody(req.body);
    if (!bodyIsValid)
      throw new Error('Incorrect input values have been provided.', 400);
    let photoPath = !req.file
      ? 'uploads/images/generic.jpg'
      : req.file.path.replace(/\\/g, '/');

    const newPost = new Post({
      ...req.body,
      photo: photoPath,
    });
    await newPost.save();
    const response = await Post.findById(newPost._id)
      .populate('author', ['name', 'email', 'googleId'])
      .select(
        'title content summary photo publishedDate author location price status'
      );
    res.json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err });
  }
};

exports.updateOne = async (req, res) => {
  try {
    const bodyIsValid = validateBody(req.body);
    if (!bodyIsValid)
      throw new Error('Incorrect input values have been provided.', 400);

    let photoPath = !req.file
      ? 'uploads/images/generic.jpg'
      : req.file.path.replace(/\\/g, '/');
    const {
      content,
      summary,
      price,
      location,
      title,
      email,
      author,
      status,
      _id,
    } = req.body;

    const post = await Post.findOneAndUpdate(
      { _id: { $eq: _id } },
      {
        $set: {
          content,
          summary,
          price,
          location,
          title,
          email,
          author,
          status,
          photo: photoPath,
        },
      },
      { new: true }
    );
    const response = await Post.findById(post._id)
      .populate('author', ['name', 'email', 'googleId'])
      .select(
        'title content summary photo publishedDate author location price'
      );
    res.json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err });
  }
};

exports.deletOne = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post) {
      await Post.deleteOne({ _id: { $eq: req.params.id } });
      res.json({ message: 'OK', data: { post } });
    } else res.status(404).json({ message: 'Not found...' });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

exports.getByUser = async (req, res) => {
  try {
    const posts = await Post.find({
      author: req.params.userId,
    });
    if (posts) {
      res.json({ message: 'OK', data: posts });
    } else res.status(404).json({ message: 'Not found...' });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};
