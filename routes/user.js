const express = require('express');
const router = express.Router()
const UserController = require('../controllers/UserControllers');
router.post('/addCustomer', UserController.addCustomer);
router.post('/purchase', UserController.purchase);
router.post('/shippingDetails', UserController.shippingDetails);
router.get('/getShippingDetailsByCity', UserController.getShippingDetailsByCity);
router.get('/customerPurchaseData', UserController.customerPurchaseData);
module.exports = router