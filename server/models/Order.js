const mongoose = require('mongoose');
const orderSchema = new mongoose.Schema({
  shopName: String,
  orderDetails: String,
  location: { lat: Number, lng: Number },
  timestamp: { type: Date, default: Date.now },
  salespersonId: mongoose.Schema.Types.ObjectId,
  ownerId: mongoose.Schema.Types.ObjectId
});
module.exports = mongoose.model('Order', orderSchema);
