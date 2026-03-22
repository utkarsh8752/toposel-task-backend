const Product = require('../models/Product');

exports.list = async (_req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });
    return res.json(products);
  } catch (err) {
    return res.status(500).json({ message: 'Failed to fetch products', error: err.message });
  }
};

exports.create = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    return res.status(201).json(product);
  } catch (err) {
    return res.status(400).json({ message: 'Failed to create product', error: err.message });
  }
};

exports.update = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!product) return res.status(404).json({ message: 'Not found' });
    return res.json(product);
  } catch (err) {
    return res.status(400).json({ message: 'Failed to update product', error: err.message });
  }
};

exports.remove = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) return res.status(404).json({ message: 'Not found' });
    return res.json({ message: 'Deleted', id: req.params.id });
  } catch (err) {
    return res.status(400).json({ message: 'Failed to delete product', error: err.message });
  }
};
