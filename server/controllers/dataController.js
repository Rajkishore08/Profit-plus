const Collection = require('../models/Collection');
const Order = require('../models/Order');

exports.addCollection = async (req, res) => {
  const { billNumber, shopName, amount, remarks, location } = req.body;
  const collection = new Collection({ ...req.body, salespersonId: req.user.id, ownerId: req.user.ownerId });
  await collection.save();
  res.status(201).json(collection);
};

exports.addOrder = async (req, res) => {
  const order = new Order({ ...req.body, salespersonId: req.user.id, ownerId: req.user.ownerId });
  await order.save();
  res.status(201).json(order);
};

exports.getOwnerData = async (req, res) => {
  const collections = await Collection.find({ ownerId: req.user.id });
  const orders = await Order.find({ ownerId: req.user.id });
  res.json({ collections, orders });
};
