const mongoose = require('mongoose');
const collectionSchema = new mongoose.Schema({
  billNumber: String,
  shopName: String,
  amount: Number,
  remarks: String,
  location: { lat: Number, lng: Number },
  timestamp: { type: Date, default: Date.now },
  salespersonId: mongoose.Schema.Types.ObjectId,
  ownerId: mongoose.Schema.Types.ObjectId
});
module.exports = mongoose.model('Collection', collectionSchema);
