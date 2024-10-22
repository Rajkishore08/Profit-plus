const express = require('express');
const { addCollection, addOrder, getOwnerData } = require('../controllers/dataController');
const auth = require('../middleware/auth');
const router = express.Router();

router.post('/collection', auth, addCollection);
router.post('/order', auth, addOrder);
router.get('/owner', auth, getOwnerData);

module.exports = router;
